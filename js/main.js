
// Missions Section
  // Get app container
  var missionsApp = document.querySelector('#mission-app');


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

    function renderMarkup(data) {

      // Set up HTML string
      var html = '';

      // Create random number
      var randomIndex = Math.floor(Math.random() * 10);

      // Add markup to injected sections
      missionsApp.innerHTML =
        '<div class="missions-card">' +
          '<p>' +
            '<span>Mission Name:</span> &nbsp; <span class="mission_name">' + data[randomIndex].mission_name + '</span>' +
          '</p>' +
          '<p>' +
            '<span>Mission ID:</span> &nbsp; <span class="mission_id">' + data[randomIndex].mission_id + '</span>' +
          '</p>' +
          '<p>' +
            '<span>Mission Description:</span> &nbsp; <span class="mission_text">' + data[randomIndex].description + '</span>' +
          '</p>' +
        '</div>'
    }
  }, false);



  // Launches Section
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
              blockQuote.textContent = ("We're having trouble contacting the SpaceX api right now, please try again later.");
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

        // Add markup to injected sections
        launchesApp.innerHTML =
          '<div class="launches-card">' +
            '<p>' +
              '<span>Mission Name:</span> &nbsp; <span class="launches_name">' + data[randomIndex].mission_name + '</span>' +
            '</p>' +
            '<p>' +
              '<span>Mission ID:</span> &nbsp; <span class="launches_id">' + data[randomIndex].mission_id + '</span>' +
            '</p>' +
            '<p>' +
              '<span>Launch Site:</span> &nbsp; <span class="launches_text">' + data[randomIndex].launch_site + '</span>' +
            '</p>' +
          '</div>'
      }
    }, false);
