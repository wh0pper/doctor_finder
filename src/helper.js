export class Helper {

  static getGeocode(location) {
    //uses google geocode api
    console.log(location);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?&address=${location}`;
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(JSON.parse(request.response));
        } else {
          console.log(request.response);
          reject(JSON.parse(request.response));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }

  static parseGeocode(response) {
    //parses latitude and longitude from geocode and returns formatted string for api call

    let latitude = response.results[0].geometry.location.lat.toFixed(3);
    let longitude = response.results[0].geometry.location.lng.toFixed(3);
    console.log(latitude, longitude);
    return `${latitude}%2C${longitude}%2C25`; //defaults to a range of 25 miles
  }


}
