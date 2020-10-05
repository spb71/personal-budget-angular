const express = require('express');
const app = express();
const port = 3000;

app.use('/', express.static('public'));

const budget = require('/Users/shemb/Documents/dev/week03/personal-budget/budget.json')

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    res.send(JSON.stringify(budget));
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});