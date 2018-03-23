export class DoctorSearch {
  constructor(parameters) {
    this.location = '45.5231%2C122.6765%2C25' //hardcoding Portland for now, with 25 mile range;
    this.specialty = parameters.specialty;
    this.ailment = parameters.ailment;
    this.name = parameters.name;
    this.otherSearch = parameters.other;
  }

  getDoctors() {
    return new Promise(function(resolve, reject) {
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.name}&query=${this.otherSearch}&specialty_uid=${this.specialty}&location=${this.location}&user_key=${process.env.API_KEY}`
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }


}
