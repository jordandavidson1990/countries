const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const countries = new Countries();
  countries.getData();

  const countriesElement = document.querySelector('select#countries')
  const countryDropdown = new SelectView(countriesElement)
  countryDropdown.bindEvents();
});
