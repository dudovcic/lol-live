$("#submit").click( // Click handler to call Ajax
	function(e) {
		e.preventDefault();
		$("#rgapi").children("h2, div.loader").remove();
		var xhr =

		   $.ajax({
		        url: '/',
		        type:'POST',
		        data:
		        {
		            name: $("#input-7").val()
		            // Region select - region: ( Value selected from input )
		        },

		        beforeSend: function() {

		        	$("#rgapi").children("h2").remove();
		        	$("#rgapi").append('<div class="loader"></div>');
		        },
		        error: function(){
		        	$("#rgapi").children("h2").remove();
		        	$("#rgapi").append("<h2>Something went wrong</h2>");
		        	$("#rgapi").children("div.loader").remove();
		        },

		        success: function(info)
		        {

		        	$("#rgapi").children("div.loader").remove();
		        	if ( info.error ) {

		        		if ( info.info ) {
		        			$("#rgapi").append("<h2 id='thisis'>" + JSON.stringify(info.info) + "</h2>");
		        		}

		        		$("#rgapi").append("<h2>" + info.error + "</h2>");
		        		console.log(info.error);

		        	} else {

		            	$("#rgapi").append("<h2>" + info + "</h2>");
		        	
		            }

		        }               
		    }); 




	}
);


