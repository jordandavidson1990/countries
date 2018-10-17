const PubSub = require('../helpers/pub_sub');
const Request = require('../helpers/request');

const SelectView = function(container){
  this.container = container;
}

SelectView.prototype.bindEvents = function(){
  PubSub.subscribe('Countries:countries-loaded', (event) => {
    const allCountries = event.detail
    this.populate(allCountries);
  });
}

SelectView.prototype.populate = function(countriesData) {
  countriesData.forEach((countries, index) => {
    const option = document.createElement('option');
    option.textContent = countries.name;
    console.log('name:',countries.name);
    // console.log('xoxxx',data.name);
    option.value = index;
    this.container.appendChild(option);
    // debugger
  })
}
// SelectView.prototype.bindEvents(){
//   PubSub.subscribe("Countries:countries-loaded", (event)=>
// console.log('anything:', event);)
// }

module.exports = SelectView;
