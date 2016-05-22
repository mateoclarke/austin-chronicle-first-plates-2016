var fs = require("fs");
var converter = require('json-2-csv');

var restaurants = JSON.parse(fs.readFileSync('./data/restaurant_details2.json', 'utf8'));

var json2csvCallback = function (err, csv) {
    if (err) throw err;
    console.log(csv);
};

converter.json2csv(restaurants, json2csvCallback);
