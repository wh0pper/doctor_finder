export class Doctor {
  constructor(parameters) {
    this.location = '45.5231%2C122.6765%2C25' //hardcoding Portland for now, with 25 mile range;
    this.specialty = parameters.specialty;
    this.ailment = parameters.ailment;
    this.name = parameters.name;
    this.otherSearch = parameters.other;
  }

  getDoctors() {
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${this.name}&query=${this.otherSearch}&specialty_uid=${this.specialty}&location=${this.location}&user_key=${process.env.API_KEY}`
  }


}
