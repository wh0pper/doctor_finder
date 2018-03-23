// const loadGoogleMapsApi = require('load-google-maps-api');
//
// loadGoogleMapsApi().then(function (googleMaps) {
//   new googleMaps.Map(document.querySelector('.map'), {
//     center: {
//       lat: 40.7484405,
//       lng: -73.9944191
//     },
//     zoom: 12
//   })
//   }).catch(function (error) {
//     console.error(error)
//   })
//
// export class Map {
//   constructor(parameters) {
//     this.center = parameters.center;
//     this.locations = parameters.locations; //holds locations of current search to be mapped
//   }
//
//   static addMap() {
//
//   }
// }
// // window.eqfeed_callback = function(results) {
// //         for (var i = 0; i < results.features.length; i++) {
// //           var coords = results.features[i].geometry.coordinates;
// //           var latLng = new google.maps.LatLng(coords[1],coords[0]);
// //           var marker = new google.maps.Marker({
// //             position: latLng,
// //             map: map
// //           });
// //         }
// //       }
