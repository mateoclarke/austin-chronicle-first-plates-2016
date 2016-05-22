// Part 3 - get details from each restaurant Url
var restaurants = JSON.parse(fs.readFileSync('./data/restaurants.json', 'utf8'));
var Xray = require("x-ray");
var xray = new Xray();
var fs = require("fs");

restaurants.forEach(function(restaurant){
  xray(restaurant.href, 'section.TheGoods', [{
    description: 'p',
    address: 'div:nth-child(5)',
    website: 'div:nth-child(6) a@href',
    moreInfoUrl: 'div:nth-child(7) a@href'
  }])
  (function(err, results){
    var results = results;

    results.forEach(function(result){
      result.name = restaurant.name;
      result.href = restaurant.href;
      result.region = restaurant.region;
    });

    fs.appendFile("./data/restaurant_details.json", JSON.stringify(results, null, '\t'));
  });

});
