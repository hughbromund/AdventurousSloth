const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/get/flights', (req, res) => {
    var options = {
        method: 'POST',
        url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/v1.0',
        headers: {
          'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
          'x-rapidapi-key': '2e76c5745dmshd2a111331fdd934p19c002jsncee35b7d4ffd',
          'content-type': 'application/x-www-form-urlencoded'
        },
        form: {
          inboundDate: '2020-02-10',
          cabinClass: 'business',
          children: '0',
          infants: '0',
          country: 'US',
          currency: 'USD',
          locale: 'en-US',
          originPlace: 'SFO-sky',
          destinationPlace: 'LHR-sky',
          outboundDate: '2020-02-07',
          adults: '1'
        }
      };
      
      request(options, function (error, response, body) {
          if (error) throw new Error(error);
      
          console.log(body);
      });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))