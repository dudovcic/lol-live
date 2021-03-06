

module.exports = function(request, ID, APIKEY, FirstRequestBody, req, res, callback) {

request(
					  	{ 																			// Summoner ID || API Key
					  		url:`https://euw1.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/${ ID }?api_key=${APIKEY}`,
					  		json: true
					  		//https://euw.api.pvp.net/api/lol/euw/v1.3/stats/by-summoner/${ body[nons].id }/summary?season=SEASON2017&api_key=${APIKEY}
					  	},

					  	function (error, response, body) {

							if ( error || response.statusCode !== 200 ) {
								consnole.log(error);
								res.send( {

									// Send this to the Ajax call if only second request made problem
									info: FirstRequestBody,
									error: "Can not get live game info."

								});

							}
						 	if (!error && response.statusCode == 200) {
									console.log(body);
						  		callback(JSON.stringify(FirstRequestBody), JSON.stringify(body));

						  	}
						}
					);
	}
