$(document).ready(function(){

	// array of movie titles
	var movies = ["spirited away", "howl's moving castle", "princess mononoke"]

	// array of all available ghibli movies
	var allMovies = ["castle in the sky", "grave of the fireflies", "my neighbor totoro", "kiki's delivery service", "only yesterday", "porco rosso", "pom poko", "whisper of the heart", "princess mononoke", "my neighbors the yamadas", "spirited away", "the cat returns", "howl's moving castle", "tales from earthsea", "ponyo", "arrietty", "from up on poppy hill", "the wind rises", "the tale of the princess kaguya", "when marnie was there"];

	var apiKey = "dc6zaTOxFJmzC";

	function renderButtons(){
	// function to dynamically create buttons

		$('#btnArea').empty();

		for (var i = 0; i < movies.length; i++){

			var btn = $("<button>");

			btn.addClass("movieBTN");

			btn.attr("data-title", movies[i]);

			btn.text(movies[i]);

			$("#btnArea").append(btn);

		}
	}

	$('#addBTN').on('click', function(event){
	// on click, add new movie buttons

		event.preventDefault();

		// get the movie title from input box
		var movieTitle = $("#searchTerm").val().trim().toLowerCase();

		// if the movie is a ghibli movie, add to movie array
		// prevents adding non-ghibli movies
		// prevents adding movies that are already buttons
		if (allMovies.indexOf(movieTitle) > -1 & movies.indexOf(movieTitle)== -1) {
			movies.push(movieTitle);
		}

		renderButtons();

		// resets input field
		$("#searchTerm").val('');

	});

	function getGhibliGif() {
	// function to get the specific movie's gifs

		var ghibliMovie = $(this).attr("data-title");

		var queryURL ="http://api.giphy.com/v1/gifs/search?q=" + ghibliMovie + "&api_key=" + apiKey + "&limit=10";

		$.ajax({
			url:queryURL,
			method:"GET"
		}).done(function(response){
			// only run after the ajax call is finished

			// store response object in results
			var results = response.data;
			console.log(results);

			for (var i = 0; i < results.length; i++) {

				// create new div to store gifs
				var gifDiv = $("<div>");

				// grab the gif's rating
				var rating = results[i].rating;

				// display gif rating
				var p = $("<p>").text("Rating: " + rating);

				// create img element to store gif
				var ghibliGif = $("<img>");

				// store still gif
				var gifStill = results[i].images.original.url;

				// store animated gif
				var gifAnimate = results[i].images.original_still.url;

				// add attribute for gif state
				$(ghibliGif).attr("data-state", "still");

				// add attribute for still gif (default)
				$(ghibliGif).attr("data-still", gifStill);
				
				// add attribute for animated gif
				$(ghibliGif).attr("data-animate", gifAnimate);

				// put still gif as default src
				$(ghibliGif).attr("src", gifStill);

				gifDiv.append(p);
				gifDiv.append(ghibliGif);

				$('#gifArea').prepend(gifDiv);

			}

		});

	}

	$(document).on('click', '.movieBTN', getGhibliGif);

	renderButtons();

});

