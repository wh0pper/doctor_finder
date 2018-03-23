import {DoctorSearch} from './doctor';
import {Helper} from './helper';
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
    let website = (doctor.practices[0].website == undefined) ? 'No website listed':`<a href='${doctor.practices[0].website}' target='_blank'>Visit their site</a>`;
    let phone = Helper.formatPhone(doctor.practices[0].phones.filter(function(phone){return phone.type == 'landline'})[0].number); //isolates landline of first practice
    let open = (doctor.practices[0].accepts_new_patients) ? 'yes':'no';
    $('.doctorList').append(`<div class='bd-callout'>${doctor.profile.last_name}, ${doctor.profile.first_name} - ${specialty}<div class='moreInfo'><br><img class='image' src='${doctor.profile.image_url}'><br> ${address}<br>Main phone number: ${phone}<br>Accepting new patients? ${open}<br>${website}</div></div>`);
  })
  $('.bd-callout').click(function(event) {
    $(this).siblings().children().slideUp();
    $(this).children().slideDown();
  })
}


$(document).ready(function() {
  let parameters = {'specialty': '', 'ailment': '', 'name': ''};

  $('.locationForm').submit(function(event) {
    event.preventDefault();
    parameters.location = $('#location').val();
    $('#head').text(`Search for doctors near ${parameters.location}:`)
    $('#changeLocation').show();
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
    parameters.numResults = $('#number').val();
    let list = new DoctorSearch(parameters);
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
    $('#newSearch').hide();
  })

  $('#changeLocation').click(function(event) {
    $('#changeLocation').hide();
    $('.locationForm').show();
    $('.doctorSearchForm').hide();
  });

});
