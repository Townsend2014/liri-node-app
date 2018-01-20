// Coding is a bunch of objects communicating with each other. Objects communicate through referencing with the dot and action with a method. 

// Require dotenv - require in this situation is an inherent node function. Read and set environment variables

require("dotenv").config();

// Require Twitter: var twitter - importing twitter file code (npm) into this liri.js file
var Twitter = require('twitter');

// Require Spotify: var Spotify - importing twitter file code (npm) into this liri.js file
var Spotify = require('node-spotify-api');

// Require request: * You'll use Request to grab data from the [OMDB API](http://www.omdbapi.com)

var Request = require('request');

// Make an authentication. This code is importing API keys.js into this file. ./ is specifying that keys is in the same path file as liri. If ./ is not specified, then the code will automatically assume to go to the node module folder. 

var keys = require("./keys");

// Require FS. This code is importing the FS (File System)package. The following are common use for the file system module including syntax for the methods:

// 1. Read file: fs.readFile()
// 2. Create new files: 
	// a) fs.appendFile(); - appends the specified content at the end of the file 
	// b) fs.open() - if file does not exist, it's created
	// c) fs.writeFile() - Replaces the specified file and content
// 3. Update: fs.appendFile() fs.writeFile()
// 4. Delete: fs.unlink()
// 5: Rename: fs.rename()

var fs = require('fs');

// Access keys. The new Twitter/Spotify is creating an instance (copy)  of the twitter/spotify code. Everything inside of twitter code is now available on client/spotify. A constructor is never used on its own. 

var client = new Twitter(keys.twitter);
var spotify = new Spotify(keys.spotify);

// 1. `node liri.js my-tweets`
// * This will show your last 20 tweets and when they were created at in your terminal/bash window.

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

// 2. `node liri.js spotify-this-song '<song name here>'`


function spotifyIt(song){

  //    * If no song is provided then your program will default to "The Sign" by Ace of Base.

  if(!song === true){
    song = 'ace of base'
  }

  spotify.search({ type: 'track', query: song }, function(err, data) {
      if (err) {
       return console.log('Error occurred: ' + err);
      }

      //    * This will show the following information about the song in your terminal/bash window

      //      * Artist(s)
      console.log("artist: " + data.tracks.items[0].artists[0].name);

	  //      * The song's name
      console.log("album: " + data.tracks.items[0].album.name);

      //      * A preview link of the song from Spotify
      console.log("song: " + data.tracks.items[0].name);

      //      * The album that the song is from
      console.log("url: " + data.tracks.items[0].preview_url);
  });
};


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

// Function for running a command based on text file

//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
// Run Commands 
// - Function to choose which command to run

var choose = function (caseData, functionData) {

switch(caseData) {
	case "my-tweets":
		myTweets(); // Invoke the function
		break;
	case "spotify-this-song":
		spotifyIt(); // Invoke the function
		break;
	case "movie-this":
		myMovie(); // Invoke the function
		break;
	case "do-what-it-says":
		doWhatItSays(); // Invoke the function
		break;
	default:
		console.log("Error: invalid command");
	}
};

// Function that takes in command line arguments and runs the correct function

var runFunction = function (argOne, argTwo) {
	choose(argOne, argTwo);
};

runFunction(process.argv[2], process.argv [3]);





