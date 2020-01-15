const express = require('express');
const morgan = require('morgan');

const app = express();

/* This is middleware taht requests pass through on their
way to the final handler */
app.use(morgan('dev'));

/* This is the final request handler. */
app.get('/', (req, res) =>{
    res.send('Hello Express!');
});

app.listen(8000, () => {
    console.log('Express sever is listening on port 8000!');
});

app.get('/burgers', (req, res) => {
    res.send('We have juicy cheeseburgers!');
});

app.get('/pizza/pepperoni', (req, res) => {
    res.send('Your pizza is on the way!');
});

app.get('/pizza/pineapple', (req, res) => {
    res.send(`We don't serve that here. Never call again!`);
});

app.get('/echo', (req, res) => {
    const responseText = `Here are some of the details of your request:
        Base URL: ${req.baseUrl}
        Host: ${req.hostname}
        Path: ${req.path}
    `;
    res.send(responseText);
});

app.get('/queryViewer', (req, res) => {
    console.log(req.query);
    res.end();
})

app.get('/greetings', (req, res) => {
    const name = req.query.name;
    const race = req.query.race;

    if(!name){
        return res.status(400).send('Please provide a name');   
    }

    if(!race) {
        return res.status(400).send('Please provide a race');
    }

    const greeting = `Greetings ${name} the ${race}, it is a pleasure to meet you.`
    res.send(greeting);
});

app.get('/sum', (req, res) => {
    const num1 = req.query.num1;
    const num2 = req.query.num2;

    const sum = Number(num1) + Number(num2)

    res.send(`The sum of ${num1} and ${num2} equals ${sum.toString()}.`)
})