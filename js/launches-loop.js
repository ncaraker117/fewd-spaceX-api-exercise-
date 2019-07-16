//Need to set up If-Then for video section
var videoBlock = '';
var videoBlockSuccess =
'<span>Launch Video:</span> &nbsp; <span class="launches_text">' + '<a href="' +  data[randomIndex].links.video_link + '" target="_blank">' + data[randomIndex].links.video_link + '</span>';
var videoBlockFailure =
'<span>Launch Video:</span> &nbsp; <span class="launches_text">No Launch video available.<span>';
if (links.video_link === null) {
    videoBlock.innerHTML = videoBlockFailure;
 } else {
    videoBlock.innerHTML = videoBlockSuccess;
}
// Add markup to injected sections
