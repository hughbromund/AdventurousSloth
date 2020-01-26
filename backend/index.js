const express = require('express');
const request = require('request');
const cors = require('cors');
var rerequest = require('retry-request', {
    request: require('request')
});

const config = require('./config.json');

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());

//begin flight request
var opts = {
    noResponseEntries: 20,
    shouldRetryFn: function (incomingHttpMessage) {
        return incomingHttpMessage.statusMessage !== 'OK';
    }
};

app.get('/get/flights/:departPort/:arrivalPort/:outboundDate/:inboundDate', (req, res) => {
    let params = req.params;
    let departPort = params.departPort;
    let arrivalPort = params.arrivalPort;
    let outDate = params.outboundDate;
    let inDate = params.inboundDate;

     var options = {
        method: 'POST',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
        headers: {
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          'x-rapidapi-key': '2e76c5745dmshd2a111331fdd934p19c002jsncee35b7d4ffd',
          'content-type': 'application/x-www-form-urlencoded'
        },
        form: {
            inboundDate: inDate,
            cabinClass: 'economy',
            children: '0',
            infants: '0',
            country: 'US',
            currency: 'USD',
            locale: 'en-US',
            originPlace: departPort,
            destinationPlace: arrivalPort,
            outboundDate: outDate,
            adults: '1'
          }
      };
      
      rerequest(options, function (error, response, body) {
        if (error) throw new Error(error);

        let updated_url = response.headers.location;
        if (!updated_url) {
            return -1;
        }

        updated_url = updated_url.substring(updated_url.lastIndexOf('/'));

        var get_options = {
            method: 'GET',
            url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0' + updated_url,
            qs: {
              originAirports: departPort,
              destinationAirports: arrivalPort,
              sortType: 'price',
              stops: '0',
              pageIndex: '0',
              pageSize: '10'
            },
            headers: {
              'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
              'x-rapidapi-key': '2e76c5745dmshd2a111331fdd934p19c002jsncee35b7d4ffd'
            }
          };

        rerequest(get_options, opts, function (error, response, body) {
            if (error) throw new Error(error);

            //console.log("try");
            let bod = JSON.parse(body);
            let itin = (bod.Itineraries);
            let min = (itin)[0];
            let minCost = (min.PricingOptions)[0].Price;
            itin.forEach(element => {
                if ((element.PricingOptions)[0].Price < minCost) {
                    min = element;
                    minCost = (element.PricingOptions)[0].Price;
                }
            });

            let bookingUrl = (min.PricingOptions)[0].DeeplinkUrl;
            let outLegId = min.OutboundLegId;
            let inLegId = min.InboundLegId;
            let departureOrigin;
            let departureDestination;
            let arrivelOrigin;
            let arrivalDestination;
            let carrierIdOrigin;
            let carrierIdDestination;

            let legs = (bod.Legs);
            legs.forEach(element => {
                if ((element.Id) == outLegId) {
                    departureOrigin = element.Departure;
                    arrivalDestination = element.Arrival;
                    carrierIdOrigin = (element.FlightNumbers)[0].CarrierId;
                }
                if ((element.Id) == inLegId) {
                    departureDestination = element.Departure;
                    arrivelOrigin = element.Arrival;
                    carrierIdDestination = (element.FlightNumbers)[0].CarrierId;
                }
            });

            let carriers = (bod.Carriers);
            let carrierNameOrigin;
            let carrierNameDestination;

            carriers.forEach(element => {
                if ((element.Id) == carrierIdOrigin) {
                    carrierNameOrigin = element.Name;
                }
                if ((element.Id) == carrierIdDestination) {
                    carrierNameDestination = element.Name;
                }
            });
            
            res.json({
                'departureTimeOrigin' : departureOrigin,
                'departureTimeDestination' : departureDestination,
                'arrivalTimeDestination' : arrivalDestination,
                'arrivalTimeOrigin' : arrivelOrigin,
                'price' : minCost,
                'carrierNameOrigin' : carrierNameOrigin,
                'carrierNameDestination' : carrierNameDestination,
                'bookingUrl' : bookingUrl,
                'departureAirport' : departPort,
                'arrivalAirpot' : arrivalPort
            });
        });
      }); 
});
//end flight request


//begin hotel request
var hotel_options = {
    method: 'GET',
    url: 'https://tripadvisor1.p.rapidapi.com/hotels/list',
    qs: {
      zff: '4%2C6',
      offset: '0',
      subcategory: 'hotel%2Cbb%2Cspecialty',
      hotel_class: '1%2C2%2C3',
      currency: 'USD',
      amenities: 'beach%2Cbar_lounge%2Cairport_transportation',
      child_rm_ages: '7%2C10',
      limit: '3',
      checkin: '2020-03-08',
      order: 'asc',
      lang: 'en_US',
      sort: 'recommended',
      nights: '1',
      location_id: '293919',
      adults: '1',
      rooms: '1'
    },
    headers: {
      'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
      'x-rapidapi-key': config.rapidapi_key,
    }
  };

var location_options = {
method: 'GET',
url: 'https://tripadvisor1.p.rapidapi.com/locations/search',
qs: {
    location_id: '1',
    limit: '1',
    sort: 'relevance',
    offset: '0',
    lang: 'en_US',
    currency: 'USD',
    units: 'km',
    query: 'pattaya'
},
headers: {
    'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
    'x-rapidapi-key': config.rapidapi_key,
}
};


app.get('/get/hotels/:location/:date', (req, res) => {
    location_options.qs.query = req.params.location;
    hotel_options.qs.checkin = req.params.date;

    request(location_options, function(error, response, body) {
        if (error) {
            console.log("There was a location error")
        }

        let bod = JSON.parse(body);
        //console.log(hotel_options.qs.location_id);
        hotel_options.qs.location_id = bod.data[0].result_object.location_id;

        request(hotel_options, function(error_2, response_2, body_2) {
        
            if (error_2) {
                console.log("There was a hotel error")
            }
    
            let bod_2 = JSON.parse(body_2);
            let hotel_dense = [];
    
            bod_2.data.forEach(element => {
                hotel_dense.push({
                    name: element.name,
                    rating: element.rating,
                    price: element.price,
                    location: element.name + ' ' + element.location_string,
                    booking_url: element.hac_offers.offers[0].link,
                });
            });
    
            res.json(hotel_dense[0]);
        });
    });
});
//end hotel request


//begin attraction request
var attraction_options = {
    method: 'GET',
    url: 'https://tripadvisor1.p.rapidapi.com/attractions/list',
    qs: {
      lang: 'en_US',
      currency: 'USD',
      sort: 'recommended',
      lunit: 'mi',
      limit: '12',
      bookable_first: 'false',
      location_id: '37209'
    },
    headers: {
      'x-rapidapi-host': 'tripadvisor1.p.rapidapi.com',
      'x-rapidapi-key': config.rapidapi_key,
    }
  };
//also uses location_options in hotel request

app.get('/get/attractions/:location', cors(), (req, res) => {
    location_options.qs.query = req.params.location;

    request(location_options, function(error, response, body) {
        if (error) {
            console.log("There was a location error")
        }

        let bod = JSON.parse(body);
        console.log(attraction_options.qs.location_id);
        attraction_options.qs.location_id = bod.data[0].result_object.location_id;

        request(attraction_options, function(error_2, response_2, body_2) {
        
            if (error_2) {
                console.log("There was an attraction error")
            }
    
            let bod_2 = JSON.parse(body_2);
            let attract_dense = [];
    
            bod_2.data.forEach(element => {
                if (element.ad_position) {
                    return;
                }

                attract_dense.push({
                    name: element.name,
                    desc: element.description,
                    rating: element.rating,
                    location: element.name + " " + element.location_string, 
                    photo_url: element.photo.images.original.url,
                });
            });
    
            res.json(attract_dense);
        });
    }); 
});
//end attraction request

app.listen(port, () => console.log(`Example app listening on port ${port}!`));