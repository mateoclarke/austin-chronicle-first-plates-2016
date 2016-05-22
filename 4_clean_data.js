var restaurants = JSON.parse(fs.readFileSync('./data/restaurant_details.json', 'utf8'));
var fs = require("fs");

restaurants.forEach(function(restaurant){
  var addressPhoneArray = restaurant.address.split(", ");

  restaurant.description = restaurant.description.trim();
  restaurant.address = addressPhoneArray[0];
  restaurant.phone = addressPhoneArray[1];
});

fs.appendFile("./data/restaurant_details2.json", JSON.stringify(restaurants, null, '\t'));
