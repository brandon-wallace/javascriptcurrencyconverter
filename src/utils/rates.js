const request = require('request');


const url = 'http://data.fixer.io/api/latest?access_key=!!!!!!!!'


const getRates = (url) => {
    request({ url: url, json: true }, (error, response) => {
        const date = response.body.date;
        const rates = response.body.rates;
        console.log(date);
        console.log(rates);
    });
}


module.exports = getRates;
