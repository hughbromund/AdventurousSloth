const express = require('express');
const request = require('request');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let facts = [
    {id: 'CS 307', fact: 'Daniel', age: 19},
    {class: 'CS 252', name: 'Hugh', age: 20},
    {class: 'CS 252', name: 'Peyton', age: 16},
    {class: 'CS 307', name: 'Aditya', age: 3},
]

app.get('/get/cats', (req, res) => {
    request("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=2", function(error, response, body) {
        if (error) {
            console.log("There was an error")
        }
        let bod = JSON.parse(body);
        let result = [];
        bod.forEach(element => {
            result.push({
                text: element.text,
                _id : element._id
            })
        });
        res.json(result);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))