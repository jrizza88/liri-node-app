// Listing required variables to make the application work 

var twitterKeys = require('./keys').twitterKeys;

var Twitter = require('twitter');

var spotify = require('spotify');

var request = require('request');

var fs = require('fs');

var getTwitter = new Twitter(twitterKeys);

// variables to call the process in node

var userRequests = process.argv[2];
var param = process.argv.slice(3).join['+'];

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

// using callback function to display the latest tweets

function twitter() {

// sets count to 20 tweets for my username
  var params = {screen_name: '@jamartorres',
              tweetCount: 20
  };  

  getTwitter.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      var numTweets = tweets.length;
        for (var j = 0; j < tweets.length; j++) {
          // used j + 1 so that the counter starts at 1 instead of 0
        console.log("Tweet #: " + [j + 1] + " " + tweets[j]['text'] + ". tweeted on " + 
                    tweets[j]['created_at'] + '.' + '\n===============================================');
        }
      numTweets--;
    }
  });
   
};

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
        console.log('Artists: '+ songVar[j].artists.length);
          var songInfo = {
            "Artist(s)": songVar[j] ["artists"][0]["name"],
            "Song Name": songVar[j] ["name"],
            "Preview Link": songVar[j] ['preview_url'],
            "Album": songVar[j] ['album']['name']
          };
          for (var genre in songInfo) {
          // using console.log to see if it worked.. 
            console.log(genre + ': ' + songInfo[genre]);
  
          }
      
      };
    
    // Do something with 'data' 
});

}

// checks user's requests for movies 

function getMovies (movieName) {
  var movieSummary = 'http://www.omdbapi.com/?t=' + movieName +'&y=&plot=short&tomatoes=true&r=json';
       request (movieSummary, function (error,response, body) {
          if (!error && response.statusCode === 200) {
               var movieObject = JSON.parse(body);
                    var movieInfo = {
                      "Movie Title": movieObject.Title,
                      "Year": movieObject.Year,
                      "IMDB rating of movie": movieObject.imdbRating,
                      "Country Origin": movieObject.Country,
                      "Langauge": movieObject.Language,
                      "Actors": movieObject.Actors,
                      "Rotten Tomatoes Rating": movieObject.tomatoRating,
                      "Rotten Tomatoes Link": movieObject.tomatoURL  
                    };
                    // setting this variable to loop into the object to pull out data from omdb
            for (var movie in movieInfo) {
              // using console.log to see if the movieInfo variable displays correctly
              console.log(movie + ': ' + movieInfo[movie]);
            }

  }
  // if the user requests something
  // then do something
  // to check if title is true. If not, Mr. Nobody will be displayed
            if (movieName) {
             var titleParam = movieName;
             console.log("Your search worked!");
            } else {
              var titleParm = "Mr. Nobody";
              console.log(" Mr. Nobody");
            }        
    });
};

function doWhatItSays() {
  if (userRequests === 'do-what-it-says') {
  fs.readFile('./random.txt', 'utf8', function read(err, data){
        if (err) {
        console.error ("Error occured!");
        } 
        // made a new variable to split data up, used this from in class assignments
        var newInfo = data.split(',');
        /*------------------------------------------------------------------------------------
        set theRequest variable to connect the newInfo var, and then set the userRequests 
         to connect to 0 and 1 of the parameters
        ------------------------------------------------------------------------------------*/
        var theRequest = newInfo[0];
        userRequests = theRequest;
        param = newInfo[1];
        console.log(userRequests, param);

    });
  }
}

