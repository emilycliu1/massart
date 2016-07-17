$(document).ready(function()
{
	// Hide all the extra stuff
	$(".fact").hide();
	$("#how_B").hide();
	$("#form").hide();
	$("#answer").hide();

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

		$("#answer").text(answerAppear).fadeIn(50).animate({fontSize: "60px"}, 200).animate({fontSize: "37px"}, 400); // this is the function, put it after the if/else because there has to be in input for answerAppear before the animations happen	
	});





	// 	ALL THIS STUFF IS FOR THE SCROLL TO TOP BUTTON

	if ($("#back-to-top").length)
	{

		// This stuff concerns whether we see the arrow or not

	    	var scrollTrigger = 700, // trigger is at 700 pixels aka almost the first picture size
	        backToTop = function() // this is us defining the backToTop function
	        {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) // if the distance from the top is greater than the trigger distance
				{
				    $("#back-to-top").addClass('show'); // show the arrow
				}else{
				    $("#back-to-top").removeClass('show'); // if we're within 800 px of the top, don't show the arrow
				}
	        };

			backToTop(); // this is that function we just defined above
			// basically saying HEY! DO THIS FUNCTION! if you just refreshed, there should be no arrow

			$(window).scroll(function() // when we scroll on the window, that function above will happen
				{
					backToTop();
				});
			// SCROLLING TRIGGERS THIS FUNCTION! after scrolling, arrow should show up

		// This stuff concerns how the arrow functions upon clicking -- this is the real deal
			$("#back-to-top").click(function (e){
				e.preventDefault(); // prevents refreshing, as you will. literally who ever wants it to refresh??

				$("html,body").animate(  // the body of the document animates
					{
					scrollTop: 0 // takes you to 0px on the document, aka the top
					}, 600); // takes 600 milliseconds to do this
			});
	}
});

// la di da javascript is mean it never tells you exactly what's wrong
// if you're going to have monospaced font you might as well have columns
// help to identify which "unexpected identifier" or "token (" you're talking about
// but it does cool shit and looks really pretty




