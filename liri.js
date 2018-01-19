// Require dotenv
require("dotenv").config();

// Require Twitter 
var Twitter = require('twitter');

// Require Spotify 
var Spotify = require('node-spotify-api');

// Require request: * You'll use Request to grab data from the [OMDB API](http://www.omdbapi.com)

var Request = require('request');

// Make an authentication
var keys = require("./keys");

// Access keys
var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

// Run Commands
    // * `my-tweets`

    // * `spotify-this-song`

    // * `movie-this`

    // * `do-what-it-says`

 // ### What Each Command Should Do

// 1. `node liri.js my-tweets`

//    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

// 2. `node liri.js spotify-this-song '<song name here>'`

//    * This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

// 3. `node liri.js movie-this '<movie name here>'`

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

// 4. `node liri.js do-what-it-says`
   
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
//      * Feel free to change the text in that document to test out the feature for other commands.

// If else statement vs switch
// var input = "";
// if(input === "my-tweets") {
// 	myTweets();
// } else if(input === "spotify-this-song") {

// } else {
// 	console.log("Error: invalid command");
// }

// switch(input) {
// 	case "my-tweets":
// 		myTweets();
// 		break;
// 	case "spotify-this-song":
// 		break;
// 	default:
// 		console.log("Error: invalid command");
// }

function myTweets() {
	// Make a get request
	client.get('statuses/user_timeline', gotData);

	// Handle the get request
	function gotData(err, data, response) {
		// console.log("Got Data!\n",data);
		var tweets = data;
		for (var i = 0; i < tweets.length; i++) {
			console.log(tweets[i].text);
		}
	}
}

myTweets();