// Part 2 - Grab all the Regions' Restaurants
var regions = require('./data/regions');

var Xray = require("x-ray");
var xray = new Xray();
var fs = require("fs");

regions.forEach(function(region){
  xray(region.href, 'h3.entry', [{
    name: '',
    href: 'a@href',
    region: 'region.region'
  }])
  (function(err, results){
    var results = results;
    for (var i = 0; i < results.length; i++) {
      results[i].name = results[i].name.trim();
    }

    results.forEach(function(result){
      result.region = region.region.replace(/ /g,'');
    });

    fs.appendFile("./data/restaurants.json", JSON.stringify(results, null, '\t'));
  });

});
// manual step of removing "[]" for [,]. This could be regexed.
