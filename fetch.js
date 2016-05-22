var Xray = require("x-ray");
var xray = new Xray();

exports.fetchBaseUrl = function(baseUrl){
  xray(baseUrl, 'a.nav-button', [{
    region: '',
    href: '@href'
  }])
    .write('./data/regions.json');
}
