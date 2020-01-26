const express = require('express');
var request = require('retry-request', {
    request: require('request')
});
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
      
      request(options, function (error, response, body) {
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

        request(get_options, opts, function (error, response, body) {
            if (error) throw new Error(error);

            console.log("try");
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

app.listen(port, () => console.log(`Example app listening on port ${port}!`))