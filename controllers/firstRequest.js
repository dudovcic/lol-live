var secondRequest = require("./secondRequest.js");

module.exports = function(request, Summoner, APIKEY, req, res, callback ) {

request(
			{
				url: `https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/${Summoner}?api_key=${APIKEY}`,
				json: true
			}

			, function (error, response, body) {

				if ( error || response.statusCode !== 200 ) {
					res.send( { error: "Please enter valid Summoner name" } );

				}

				if (!error && response.statusCode == 200) {
				  	secondRequest(request, body[Summoner].id, APIKEY, body, req, res, callback);
				}
		});
}
