// Listing required variables to make the application work 

var twitterKeys = require('./keys').twitterKeys;

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var getTwitter = new Twitter(twitterKeys);

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
  console.log("Choice one of the following to get started: \nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says\n");
        }
}


//tweets.get(path, params, callback);
//tweets.post(path, params, callback);

// checks the user's requests for Twitter

// using callback function to call the twitter tweets 

function twitter() {

  console.log('most recent tweets: ' + params); 
  //outputString('\n checking to see if this works\n');
 // console.log(body);
// sets count to 20 tweets for my username

 
var params = {screen_name: '@jrizza88',
              tweetCount: 20

};  
getTwitter.get('statuses/user_timeline', params, function(error, tweets, response){
  if (!error) {
    var totalTweets = tweets.length;
    for (var j = 0; j <tweets.length; j++)
        console.log("Tweet #: "+ tweets.length + " " + "tweeted on" + tweets[j]);
    }
    console.log('THE recent tweets: ' + totalTweets); 
    console.log(tweets);
});

}

// checks user's requests for Spotify

function spotifyRequest(song) {

    if (song == 'spotify-this-song') {
      var songName = param;

      // invoke a spotify function
    spotify(songName);
    console.log("your song name is: " + songName);
} 
//else {
// song === undefined;
//  song = "The Sign";
// }


spotify.search({ 
                type: 'track', 
                query: song 
      }, function(err, data) {
      if ( err ) {
        console.log('Error occurred: ' + err);
        return;
      }
// this variable and for loop below goes into spotify and searches for the top 20 results
    var songVar = data['tracks']['items'];
      for (var j = 0; j < songVar.length; j++) {
        // as required by the homework, this displays the sing information
          var songInfo = {
            "Artist(s)": songVar[j] ["artists"]["name"],
            "Song Name": songVar[j] ["name"],
            "Preview Link": songVar[j] ['preview_url'],
            "Album": songVar[j] ['album']['name']
          }
          // using console.log to see if it worked.. 
            console.log(data);
            //console.log("here are the track results  + track.name");
      };
    
    // Do something with 'data' 
});

}

// checks user's requests for movies 

function getMovies (title) {
  // if the user requests something
  // then do something
  // to check if title is true. If not, Mr. Nobody will be displayed
  if (title) {
   var titleParam = title;
  } else {
    var titleParm = "Mr. Nobody";
  }
console.log(title + " Mr. Nobody");
}

// tomatoes = true
// &tomatoes=true&r=json;
// do what is says function

function doWhatItSays() {

}

