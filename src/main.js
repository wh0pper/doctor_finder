import {DoctorSearch} from './doctor';
import $ from 'jquery';

$(document).ready(function() {
  let parameters = {'specialty': '', 'ailment': '', 'name': '', 'other': ''};
  let list = new DoctorSearch(parameters);
  console.log(list);
  list.getDoctors().then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
  }, function(error) {
    console.log('error');
  });
});
