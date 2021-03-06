/*
These are HTML strings to format dynamic data from JSON with.
*/
var HTMLheaderName = "<h1 id='name'>%data%</h1>";
var HTMLheaderRole = "<br/><h2>%data%</h2>";

var HTMLcontactGeneric = "<li class='flex-item'><span class='orange-text'>%contact%</span><span class='white-text'>%data%</span></li>";
var HTMLmobile = "<li class='flex-item'><span class='orange-text'>%icon% mobile</span><span class='white-text'>%data%</span></li>";
var HTMLemail = "<li class='flex-item'><span class='orange-text'>%icon% email</span><span class='white-text'>%data%</span></li>";
var HTMLtwitter = "<li class='flex-item'><span class='orange-text'>%icon% twitter</span><span class='white-text'>%data%</span></li>";
var HTMLgithub = "<li class='flex-item'><span class='orange-text'>%icon% github</span><span class='white-text'>%data%</span></li>";
var HTMLlinkedin = "<li class='flex-item'><span class='orange-text'>%icon% linked in</span><span class='white-text'>%data%</span></li>";
var HTMLlocation = "<li class='flex-item'><span class='orange-text'>%icon% location</span><span class='white-text'>%data%</span></li>";

var HTMLbioPic = "<img src='%data%' class='biopic img-responsive' alt='%datum%'>";
var HTMLWelcomeMsg = "<span class='welcome-message'>%data%</span>";

var HTMLskillsStart = "<h3 id='skillsH3'>Skills at a Glance:</h3><ul id='skills' class='flex-box'>";
var HTMLskills = "<li class='flex-item hvr-float' data-toggle='tooltip' title='%info%'><span class='white-text'>%data%</span></li>";
var HTMLskillsEnd = "</ul>";

var HTMLworkStart = "<div class='work-entry'></div>";
var HTMLworkEmployer = "<h4>%data%";
var HTMLworkTitle = " - %data%</h4>";
var HTMLworkDates = "<div class='date-text'>%data%</div>";
var HTMLworkLocation = "<div class='location-text'>%data%</div>";
var HTMLworkDescription = "<p>%data%</p>";

var HTMLprojectStart = "<div class='project-entry %extraClass%'></div>";
var HTMLprojectTitle = "<h3><a href='%url%' target='_blank'>%data%</a> - <span>%dates%</span></h3>";
var HTMLprojectDescription = "%data%";
var HTMLprojectImage = "<img src='%data%' class='img-responsive project-image' alt='%datum%'>";

var HTMLschoolStart = "<div class='education-entry'></div>";
var HTMLschoolName = "<h4>%data%</h4>";
var HTMLschoolDates = "<div class='date-text'>%data%</div>";
var HTMLschoolLocation = "<div class='location-text'>%data%";
var HTMLschoolDegreeMajor = "<p> %degree%%comma% Major: <em>%major%</em></p> </div>";

var HTMLonlineClasses = "<h2>Online Classes</h2><div class='onlineClasses-entry'></div>";
var HTMLonlineTitleSchool = "<h4>%title% - %school%</h4>";
var HTMLonlineDates = "<div class='date-text'>%data%</div>";
var HTMLonlineURL = "<p>Website: <a href='%url%' target='_blank'>%data%</a></p>";

var googleMap = "<div id='map'></div>";

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
var clickLocations = [];

function logClicks(x, y) {
  clickLocations.push({
    "x": x,
    "y": y
  });
  console.log("x location: " + x + "; y location: " + y);
}

$(document)
  .click(function(loc) {
    // your code goes here!
    logClicks(loc.pageX, loc.pageY);
  });


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  // This next line makes `map` a new Google Map JavaScript Object and attaches it to
  // <div id="map">, which is appended as part of an exercise late in the course.
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    //locations.push(bio.contacts.location.value);
    locations.push({
      "location": bio.contacts.location,
      "type": "home",
      "name": "Home"
    });

    // iterates through school locations and appends each location to
    // the locations array
    for (var school = 0; school < education.schools.length; school++) {
      locations.push({
        "location": education.schools[school].location,
        "type": "school",
        "name": education.schools[school].name
      });
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job = 0; job < work.jobs.length; job++) {
      locations.push({
        "location": work.jobs[job].location,
        "type": "work",
        "name": work.jobs[job].employer
      });
    }
    //let's see where we got.
    //console.log(locations);

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat(); // latitude from the place service
    var lon = placeData.geometry.location.lng(); // longitude from the place service
    var name = placeData.formatted_address; // name of the place from the place service
    var bounds = window.mapBounds; // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      content: name;
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place = 0; place < locations.length; place++) {
      //console.log(locations[place].name);
      // the search request object
      var request = {
        query: locations[place].location
      };
      //console.log(request);
      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});