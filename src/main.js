import {DoctorSearch} from './doctor';
import $ from 'jquery';

function displayData(results) {
  $('.doctorList').text('');
  if (results.data.length === 0) {
    $('.doctorList').text('No results found.');
  }
  results.data.forEach(function(doctor) {
    $('.doctorList').append(`<p>${doctor.profile.last_name}</p>`);
  })
}

$(document).ready(function() {
  let parameters = {'specialty': '', 'ailment': '', 'name': '', 'other': ''};
  $('.doctorSearchForm').submit(function(event) {

    event.preventDefault();
    parameters.name = $('#name').val();
    parameters.ailment = $('#ailment').val();
    parameters.specialty = $('#specialty').val();
    parameters.other = $('#other').val();
    let list = new DoctorSearch(parameters);
    console.log(list);
    list.getDoctors().then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      displayData(body);
    }, function(error) {
      error = JSON.parse(error);
      $('.doctorList').text('There was an error processing your request. Reason: ' + error.meta.message);
    });
  })
});
