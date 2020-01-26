const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

app.use(express.json());

let people = [
    {class: 'CS307', name: 'Daniel', age: 19},
    {class: 'CS252', name: 'Hugh', age: 20},
    {class: 'CS252', name: 'Peyton', age: 16},
    {class: 'CS307', name: 'Aditya', age: 3},
]

app.get('/', cors(), (req, res) => {
    res.send('Hello World!');
});

app.get('/abc/def', cors(), (req, res) => {
    res.send([1, 2, 3]);
});

app.get('/get/:class', cors(), (req, res) => {
    let result = people.filter(c => c.class === req.params.class);
    if (!result) {
        res.status(404).send("Could not find class name :(");
    }
    res.send(result);
});

app.post('/post', (req, res) => {
    let person = {
        class : req.body.class,
        name : req.body.name,
        age : parseInt(req.body.age)
    };
    people.push(person);
    res.send(people);
});

app.get('/abc/def/:name/:age/:eye_color', (req, res) => {
    res.send(req.params);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))