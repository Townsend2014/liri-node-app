
require("dotenv").config();

// Require the Twitter package
var Twitter = require('twitter');

// Make an authentication
var keys = require("./keys");

// Access keys
var client = new Twitter(keys.twitter);


// // Set paramaters
// var params = {screen_name: 'SaimaiCode'};
// // Make a get request

// // client.get(path, params, callback);
// client.get('user_timeline', params, gotData);
// // Handle the get request
// function gotData(err, data, response) {
//     var tweets = data.statuses;
//     for (var i = 0; i < tweets; i++) {
//         console.log(tweets[i].text);
//     }
// }

// Set paramaters
var params = {
	q: 'border collie mix',
	count: 5
}

// Make a get request
client.get('search/tweets', params, gotData);

// Handle the get request
function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets; i++) {
		console.log(tweets[i].text);
	}
}





// module.exports = {
// 	consumer_key: 			'Dmei1LWLfDLIaFmrpQOwgYbNh',
//   	consumer_secret: 		'YWTTcM4c5XDyBCcwLReiWksVkgEMbMZBRttyhKHvki2HcJiBQW',
//   	access_token_key: 		'953445312890155008-FMPhg3Xcy7HzOtYNBpFV41wspzgpLu1',
//   	access_token_secret: 	'jmCgsUZiWH16jwcOVzndmq3I94nNoWLh59JysMq6Zap8t'	
// }

