const request = require('request');
const api_key = require('./.env');


const rates = (amount, callback) => {
    const url = 'http://data.fixer.io/api/latest?access_key=`${api_key}`&symbols=USD,CAD,XOF,CUP,HTG,GBP,MXN,BTC,EUR'

    request({ url: url, json: true }, (error, response) => {
        // Low level errors such a network disconnection.
        if (error) {
            callback(`Unable to retrive data.`, undefined);
        // Errors with the API request.
        } else if (response.body.error) {
            callback(response.body.error.info, undefined);
        } else {
            callback(undefined, amount);
        }
    });
}


module.exports = rates;
