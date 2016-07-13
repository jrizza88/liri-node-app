// Listing required variables to make the application work 

var twitterKeys = require('./keys').twitterKeys;

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var twitter = new Twitter(twitterKeys);

// variables to call the process in node

var userRequests = process.argv[2];
var param = process.argv[3];

// function that calls user's request

userRequestsFunc(userRequests, param);

// calling the user's requests

function userRequestsFunc(userRequests, param){
// using switch and case to call the individual functions
          switch (userRequests) {

          case "my-tweets" :
                            twitter();
                            break;

          case "spotify-this-song" :
                            spotifyRequest();
                            break;

          case "movie-this" :
                            getMovies();
                            break;

          case "do-what-it-says" :
                            doWhatItSays();
                            break;
          default: 
  console.log("Choices displayed: \nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says\n");
        }
}


//tweets.get(path, params, callback);
//tweets.post(path, params, callback);

// checks the user's requests for Twitter

// using callback function to call the twitter tweets 

function twitter() {

var params = {screen_name: '@jrizza88'};
params.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});

// checks user's requests for Spotify

function spotifyRequest(music) {

 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    // Do something with 'data' 
});
}
// checks user's requests for movies 

function getMovies (movies) {

}

// do what is says function

function doWhatItSays() {

}

