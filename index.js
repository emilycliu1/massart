$(document).ready(function()
{
	// Hide all the extra stuff
	$(".fact").hide();
	$("#how_B").hide();
	$("#form").hide();
	$("#answer").hide();

	/*
	// first text will glow upon hover
	$("#container_1").mouseenter(function()
		{
			$("#twinkle_A").
			fadeTo(400, 0.3).
			fadeTo(400, 1.0).

			fadeTo(400, 0.3).
			fadeTo(400, 1.0).

			fadeTo(400, 0.3).
			fadeTo(400, 1.0).

			fadeTo(400, 0.3).
			fadeTo(400, 1.0).
		});
	*/

	// hover over text to expand, leave to go back to normal size
	$(".text").mouseenter(function()
		{
			$(this).animate(
				{fontSize: '32px'}, 300);
		}). mouseleave(function()
		{
			$(this).animate(
				{fontSize: '30px'}, 300);
		});

	// click sign expands then goes normal
	$("#container_1").mouseenter(function()
		{
			$("#click").
				animate({fontSize: "20px"}, 400).
				animate({fontSize: "18px"}, 400).
				animate({fontSize: "20px"}, 400).
				animate({fontSize: "18px"}, 400);
		});

	// click text to cause it to blink
	$(".text").click(function()
		{
			$(this).fadeTo(200, 0.3).fadeTo(200, 1.0);
		});

	// click twinkle_A to fade in fact_1 and get rid of click sign
	$("#twinkle_A").click(function()
	{
		$("#fact_1").fadeIn(400)
		$("#click").fadeOut(200)
	});

	// click how_A to fade in fact_2
	$("#how_A").click(function()
	{
		$("#fact_2").fadeIn(400)
	});

	// click up to fade in fact_3
	$("#up").click(function()
	{
		$("#fact_3").fadeIn(400)
	});

	// click like to fade in fact_4
	$("#like").click(function()
	{
		$("#fact_4").fadeIn(400)
	});

	// click twinkle_B to fade in how_B
	$("#twinkle_B").click(function()
	{
		$("#how_B").fadeIn(400)
	});

	// click how_B to fade in form
	$("#how_B").click(function()
	{
		$("#form").fadeIn(400)
	});
	

	// Different answers for the form
	// Shoutout to Charlie for teaching me how to do this I love you dad

	$("#submit").click(function(e) {
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

		$("#answer").text(answerAppear).fadeIn(100).animate({fontSize: "60px"}, 200).animate({fontSize: "37px"}, 400); // this is the function, put it after the if/else because there has to be in input for answerAppear before the animations happen	
	});
});