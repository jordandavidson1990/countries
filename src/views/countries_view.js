const PubSub = require('../helpers/pub_sub.js');

const CountriesView = function(container){
this.container = container;
}
console.log('hello you');
CountriesView.prototype.bindEvents = function() {
    PubSub.subscribe('Countries:countries-loaded', (evt)=>{
      console.log('helloWorld');
      this.render(evt.detail);
    });
}

module.exports = CountriesView;
