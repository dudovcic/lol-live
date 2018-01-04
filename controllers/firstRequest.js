var secondRequest = require("./secondRequest.js");

module.exports = function(request, Summoner, APIKEY, req, res, callback ) {

request(
			{
				url: `https://euw1.api.riotgames.com/lol/summoner/v3/summoners/by-name/${Summoner}?api_key=${APIKEY}`,
				json: true
			}

			, function (error, response, body) {

				if ( error || response.statusCode !== 200 ) {
					console.log("error", error, response.statusCode);
					res.send( { error: "Please enter valid Summoner name" } );

				}

				if (!error && response.statusCode == 200) {
					  console.log("body", body, response.statusCode);
				  	secondRequest(request, body.id, APIKEY, body, req, res, callback);
				}
		});
}
