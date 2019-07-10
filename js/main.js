
// Missions Section

// Get app container
var app = document.querySelector('#mission-app');
// Store blockquote element as variable
var missionName = document.querySelector('#mission-name');
var missionId = document.querySelector('#mission-id');
var missionText = document.querySelector('#mission-text');

// Store button id as variable
var button = document.querySelector('#more-missions')

// Sanitize and encode all HTML in from a 3rd party
var sanitizeHTML = function(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};

// Event listener on button
button.addEventListener('click', function(event) {

  // Set up our HTTP request
  var xhr = new XMLHttpRequest();

  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
          // This will run when the request is successful
          renderMarkup(JSON.parse(xhr.responseText));

      } else {
          // This will run when it's not
          blockQuote.textContent = ("We're having trouble contacting the SpaceX api right now, please try again later.");
          console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://api.spacexdata.com/v3/missions');
  xhr.send();
}, false);


renderMarkup(data) {
  // write funtion to pull in data
  var randomIndex = Math.floor(Math.random() * 10);
  data[randomIndex].mission_name;
  data[randomIndex].mission_id;
  data[randomIndex].description;
}
