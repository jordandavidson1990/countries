const PubSub = require('../helpers/pub_sub.js');

const CountryInfoView = function(container){
  this.container = container;
}
// console.log('hello you');
CountryInfoView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:selected-country-ready', (evt)=>{
    console.log('helloWorld', evt.detail);
    // this.render(evt.detail);
    const country = evt.detail;
    this.render(country)
  });
}
CountryInfoView.prototype.render = function(country){
  console.log('country:', country);
  const infoHeading = document.createElement('h2');
  infoHeading.textContent = country.name;
  this.container.innerHTML = '';
  this.container.appendChild(infoHeading);

  const infoCapital = document.createElement('p');
  infoCapital.textContent = `The capital city is ${country.capital}. The Region is ${country.region}`
  this.container.appendChild(infoCapital);


const img = document.createElement("img");
img.src = country.flag;
img.alt = `image of ${country.name}`
img.id = 'flagImg';
this.container.appendChild(img)
}

module.exports = CountryInfoView;
