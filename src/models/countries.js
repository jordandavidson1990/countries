const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

// console.log('hello');
const Countries = function(){
  this.text = null;
}

Countries.prototype.getData = function() {
  const request = new Request("https://restcountries.eu/rest/v2/all");
  request.get((data) => {
    PubSub.publish("Countries:countries-loaded", data)
    console.log(data);
    ;
  })
}

module.exports = Countries;
