const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

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
      'x-rapidapi-key': '34e4098176mshec364d2c1499529p103ed0jsnc7560e74c41b'
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
    'x-rapidapi-key': '34e4098176mshec364d2c1499529p103ed0jsnc7560e74c41b'
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
        console.log(hotel_options.qs.location_id);
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
                });
            });
    
            res.json(hotel_dense[0]);
        });
    });

    
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))