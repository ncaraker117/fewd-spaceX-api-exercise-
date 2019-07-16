// Get app container
var launchesApp = document.querySelector('#launches-app');

// Store button id as variable
var button = document.querySelector('#more-launches')

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
          launchesApp.textContent = ("We're having trouble contacting the SpaceX api right now, please try again later.");
          console.log(xhr);
      }
  };
  // Create and send a GET request
  xhr.open('GET', 'https://api.spacexdata.com/v3/launches');
  xhr.send();

  function renderMarkup(data) {

    // Set up HTML string
    var html = '';

    // Create random number
    var randomIndex = Math.floor(Math.random() * 103);
    var videoBlock = '';
    var videoBlockSuccess =
    '<span>Launch Video:</span> &nbsp; <span class="launches_text">' + '<a href="' +  data[randomIndex].links.video_link + '" target="_blank">' + data[randomIndex].links.video_link + '</span>';
    var videoBlockFailure =
    '<span>Launch Video:</span> &nbsp; <span class="launches_text">No Launch video available.<span>';
    if (data[randomIndex].links.video_link === null) {
        videoBlock = videoBlockFailure;
     } else {
        videoBlock = videoBlockSuccess;
    }
    console.log(videoBlock);
    launchesApp.innerHTML =
      '<div class="launches-card">' +
        '<p>' +
          '<span>Mission Name:</span> &nbsp; <span class="launches_name">' + data[randomIndex].mission_name + '</span>' +
        '</p>' +
        '<p>' +
          '<span>Flight Number:</span> &nbsp; <span class="launches_name">' + data[randomIndex].flight_number + '</span>' +
        '</p>' +
        '<p>' +
          '<span>Mission ID:</span> &nbsp; <span class="launches_id">' + data[randomIndex].mission_id + '</span>' +
        '</p>' +
        '<p>' +
          '<span>Launch Site:</span> &nbsp; <span class="launches_text">' + data[randomIndex].launch_site.site_name_long + '</span>' +
        '</p>' +
        '<p>' +
          '<span>Launch Success:</span> &nbsp; <span class="launches_text">' + data[randomIndex].launch_success + '</span>' +
        '</p>' +
        '<p>' +
          '<span>Launch Details:</span> &nbsp; <span class="launches_text">' + data[randomIndex].details + '</span>' +
        '</p>' +
        '<p id="video-block">' +
          videoBlock +
        '</p>' +
      '</div>'
      // Change button text
      button.innerHTML = 'More Launches';
  }
}, false);
