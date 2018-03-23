import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';

export class DoctorSearch {
  constructor(parameters) {
    this.location = '45.523%2C-122.676%2C25' //hardcoding Portland for now, with 25 mile range;
    this.specialty = parameters.specialty;
    this.ailment = parameters.ailment;
    this.name = parameters.name;
    this.otherSearch = parameters.other;

  }

  getDoctors() {
    let key = 'f845c0444fa19113c09c78cfefd663f5';
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.name}&query=${this.otherSearch}&specialty_uid=${this.specialty}&location=${this.location}&user_key=${key}`
    console.log(url);
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      $('.doctorList').text('Finding results...');
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          console.log(request.response);
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }


}
