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

				fadeTo(400, 0.3).
				fadeTo(400, 1.0).

				fadeTo(400, 0.3).
				fadeTo(400, 1.0).

				fadeTo(400, 0.3).
				fadeTo(400, 1.0).
				
				fadeTo(400, 0.3).
				fadeTo(400, 1.0);
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


	
	// This is for the answer at the bottom
	$("#form-submit").click(function(e){
		e.preventDefault();
		$("#answer").fadeIn(50).animate({fontSize: "72px"}, 200).animate({fontSize: "45px"}, 300);
	});
	
	/*
	// This is for the optioned answers at the bottom???
	$("#form-submit").click(function(e){
		e.preventDefault();

		var guessVal = $("#guess").val();
		var selected = $("#guess option[value= "+guessVal+"]")
	
		for (selected = guessVal[identical]);
		{
			$("#answer").fadeIn(100).text("blah").fadeIn(100).animate({fontSize: "60px"}, 200).animate({fontSize: "37px"}, 400);
		}

		for ($("#guess") = $("#3"));
		{
			$("#answer").fadeIn(100).text("blah blah").fadeIn(100).animate({fontSize: "60px"}, 200).animate({fontSize: "37px"}, 400);
		}

		for ($("#guess") = $("#4"));
		{
			$("#answer").fadeIn(100).text("blah blah blah").fadeIn(100).animate({fontSize: "60px"}, 200).animate({fontSize: "37px"}, 400);
		}
	});
	*/
});