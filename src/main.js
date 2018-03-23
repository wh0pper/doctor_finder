import {DoctorSearch} from './doctor';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function displayData(results) {
  $('.doctorList').text('');
  if (results.data.length === 0) {
    $('.doctorList').text('No results found.');
  }
  results.data.forEach(function(doctor) {
    let specialty = (doctor.specialties[0] == undefined) ? 'No specialty listed':doctor.specialties[0].name;
    let address = (doctor.practices[0].visit_address == undefined) ? 'No address listed':`${doctor.practices[0].visit_address.street} ${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}`;
    $('.doctorList').append(`<div class='bd-callout bd-callout-info'>${doctor.profile.last_name}, ${doctor.profile.first_name} - ${specialty}, ${address}</div>`);
  })
}

$(document).ready(function() {
  let parameters = {'specialty': '', 'ailment': '', 'name': ''};

  $('.locationForm').submit(function(event) {
    event.preventDefault();
    parameters.location = $('#location').val();

    $('.locationForm').hide();
    $('.doctorSearchForm').show();
  });

  $('.doctorSearchForm').submit(function(event) {

    event.preventDefault();
    $('.doctorSearchForm').hide();
    $('#newSearch').show();
    $('.doctorList').text('Finding results...');

    parameters.name = $('#name').val();
    parameters.ailment = $('#ailment').val();
    parameters.specialty = $('#specialty').val();

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
  });

  $('#newSearch').click(function(event) {
    $('.doctorSearchForm').show();
  })
});
