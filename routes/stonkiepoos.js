const fetch = require("node-fetch");

var express = require('express');
var router = express.Router();

router.get('/search/:string', function (req, res, next) {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="+req.params.string+"&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "62b43b5606mshc426c20b0c77dc9p170f71jsn401e7036ea70",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(json => res.send(json));
});

router.get('/:stonk', function (req, res, next) {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-summary?symbol="+req.params.stonk+"&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "62b43b5606mshc426c20b0c77dc9p170f71jsn401e7036ea70",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    }).then(response => response.json())
        .then(json => {
            console.log(json.prices[0].date);
            console.log(new Date(json.prices[0].date));
            let stonkData = {
                price: json.price,
                quoteType: json.quoteType
            };
            res.send(stonkData);
        })
});

router.get('/:stonk/historicaldata', function (req, res, next) {
    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=AMRN&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "62b43b5606mshc426c20b0c77dc9p170f71jsn401e7036ea70",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    }).then(response => response.json())
        .then(json => {
            console.log(json.prices[0].date);
            console.log(new Date(json.prices[0].date));

            let stonkData = {
                prices: json.prices,
                firstTradeDate: json.firstTradeDate
            };

            res.send(stonkData);
        })
});

module.exports = router;
