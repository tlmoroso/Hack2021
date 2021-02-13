const fetch = require("node-fetch");

var express = require('express');
var router = express.Router();

router.get('/:stonk', function (req, res, next) {
    let stonkData;
    console.log("PARAMS:", req.params);

    fetch("https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q="+req.params.stonk+"&region=US", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "62b43b5606mshc426c20b0c77dc9p170f71jsn401e7036ea70",
            "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(json => res.send(json));
});

module.exports = router;
