// Possible answers for the form
	// Shoutout to Charlie Liu for showing me what I was getting wrong with this I love you dad

	$("#submit").click(function(e){
		e.preventDefault(); // prevents page from refreshing, which is what usually happens with a button

		var guessVal = $("#guess").val(); // guessVal is an easy way to say the option value of the guess
		var answerAppear = ""; // right now this is empty, but this is the text that will fill in
		// these two variables above need to go in here, because reading the guess value has to happen after the click, otherwise the default guess (identical) will be put in and won't be forgotten

		if (guessVal == "identical") // if the option value is "identical"
		{
			answerAppear = "Incorrect! The two elements are Hydrogen and Helium."; // then the text in the answer div will be ""
		} else if (guessVal == "proxima") // if it's not identical but is proxima...
		{
			answerAppear = "Incorrect! The star is Proxima Centauri.";
		} else // no need to write "if (guessVal) == "flicker" because it's the only option left anyways
		{
			answerAppear = 'Correct! "Twinkling" is actually caused by light bending in the atmosphere.'; // diff quotes bc of the quotes in the text
		}

		$("#answer").text(answerAppear).fadeIn(50).animate({fontSize: "60px"}, 200).animate({fontSize: "37px"}, 400); // this is the function, put it after the if/else because there has to be in input for answerAppear before the animations happen	
	});




	back to one: 0
	back to two: 860
	back to three: 1880
	back to four: 2760
	back to five: 3800