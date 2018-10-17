const PubSub = require('../helpers/pub_sub.js')
const Request = require('../helpers/request.js')

// console.log('hello');
const Countries = function(){
  this.countries = [];
}

Countries.prototype.getData = function() {
  const request = new Request("https://restcountries.eu/rest/v2/all");
  request.get((data) => {
    this.countries = data
    PubSub.publish("Countries:countries-loaded", data);
    console.log('data:', data);
  })
// }
//
// Countries.prototype.bindEvents = function(){
  PubSub.subscribe('SelectView:change', (evt) => {
    const selectedIndex = evt.detail;
    console.log('evt.detail:', evt.detail);
    this.publishDataDetail(selectedIndex);
  })
};

Countries.prototype.publishDataDetail = function(selectedIndex){
  const selectedCountry = this.countries[selectedIndex];
  PubSub.publish('Countries:selected-country-ready', selectedCountry)
};


module.exports = Countries;
