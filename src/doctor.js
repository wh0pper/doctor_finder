import {Helper} from './helper.js';

export class DoctorSearch {
  constructor(parameters) {
    this.location = parameters.location; //'45.523%2C-122.676%2C25' //hardcoding Portland for now, with 25 mile range;
    this.specialty = parameters.specialty;
    this.ailment = parameters.ailment;
    this.name = parameters.name;
  }

  getDoctors() {
    let that = this;
    let innerPromise = Helper.getGeocode(that.location).then(function(response) {
      let position = Helper.parseGeocode(response);
      console.log(position);
      let key = 'f845c0444fa19113c09c78cfefd663f5';
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${that.name}&query=${that.ailment}&specialty_uid=${that.specialty}&location=${position}&limit=20&user_key=${key}`
      console.log(url);
      return new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
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
    }, function(error) {
      $('.doctorList').text('The location you entered was invalid');
    });
    return innerPromise;
  }


}
