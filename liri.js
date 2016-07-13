// Listing required variables to make the application work 

var twitterKeys = require('./keys');

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

// variables to call the process in node

var tweets = process.argv.[2];
var parameter = process.argv[3];

// function that calls user's request

userRequestsFunc(userRequests, paramaters);

// calling the user's requests

function userRequestsFunc(userRequests, parameters){

  request.prompt([

  // my-tweets

  // spotify-this-song

  // movie-this

  // do-what-it-says
])
}


tweets.get(path, params, callback);
tweets.post(path, params, callback);

// checks the user's requests for Twitter

// using callback function to call the twitter tweets 



var params = {screen_name: '@jrizza88'};
params.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    console.log(tweets);
  }
});


client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response){
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});

// checks user's requests for Spotify
 
spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }

    // Do something with 'data' 
});


