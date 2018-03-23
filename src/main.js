import {DoctorSearch} from './doctor';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

function displayData(results) {
  $('.doctorList').text('');
  if (results.data.length === 0) {
    $('.doctorList').text('No results found.');
  } else {
    $('.doctorList').text('Results:');
  }
  results.data.forEach(function(doctor) {
    let specialty = (doctor.specialties[0] == undefined) ? 'No specialty listed':doctor.specialties[0].name;
    $('.doctorList').append(`<p class='bd-callout bd-callout-info'>${doctor.profile.last_name}, ${doctor.profile.first_name} - ${specialty}</p>`);
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
