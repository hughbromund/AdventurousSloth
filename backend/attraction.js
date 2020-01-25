const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

var attraction_options = {
    method: 'GET',
    url: 'https://tripadvisor1.p.rapidapi.com/attractions/list',
    qs: {
      lang: 'en_US',
      currency: 'USD',
      sort: 'recommended',
      lunit: 'mi',
      limit: '30',
      bookable_first: 'false',
      location_id: '37209'
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

app.get('/attraction/:city', (req, res) => {
    location_options.qs.query = req.params.city;

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
                });
            });
    
            res.json(attract_dense);
        });
    });

    
    
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))