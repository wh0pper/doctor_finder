import {DoctorSearch} from './doctor';
import $ from 'jquery';

$(document).ready(function() {
  let parameters = {};
  let list = new DoctorSearch(parameters);
  list.getDoctors().then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
  }, function(error) {
    console.log('error');
  });
});
