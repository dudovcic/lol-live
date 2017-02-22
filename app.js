	const request   	= require("request");
	const express   	= require("express");
	const app    		= express();
	const bodyParser 	= require("body-parser");
	const APIKEY 		= "YOUR API KEY";
	const APIRequests = require("./controllers/firstRequest.js");
	const port = process.env.PORT || 3000;


	app.set("view engine", "ejs");
	app.use(bodyParser.urlencoded({ extended: true}));
	app.use('/static', express.static('public'))

	app.get("/", function(req, res) {

		res.render("index", { name: "Enter Summoner name here", fbody: "Profile info", sbody: "Live game info" }); // EJS for fun

	});

	app.post("/", function(req, res) {

		// RegEx = No spaces; All lowercase
		const Summoner = req.body.name = req.body.name.replace(/\s+/g, '').toLowerCase(); 

		APIRequests(request, Summoner, APIKEY, req, res, (fbody, sbody) => {

			res.send(fbody + sbody);

		} );

	});

	app.get("/summoner/:id", (req, res) => {

		// Custom method to call 2 requests with RGAPI
		APIRequests(request, req.params.id, APIKEY, req, res, (fbody, sbody) => {

			res.render("index", { name: "Enter Summoner name here", fbody: fbody, sbody: sbody });

		} );

	});

	app.listen(port, () => console.log(`Listening on port: ${port}`));
