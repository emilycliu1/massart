
$(document).ready(function()
{



	// hover over words to cause words to blink
	$("#twinkle_B").mouseenter(function()
		{
			$(this).fadeTo(400, 0.1).fadeTo(400, 1.0);
		}).mouseleave(function()
		{
			$(this).fadeTo(400, 1.0);
		});

	$("#how_B").mouseenter(function()
		{
			$(this).fadeTo(400, 0.1).fadeTo(400, 1.0);
		}).mouseleave(function()
		{
			$(this).fadeTo(400, 1.0);
		});




	// click twinkle_B to fade in last line
	$("#twinkle_B").click(function()
	{
		$("#how_B").fadeIn()
			{
				$("#how_B").text("How I wonder what you are");
			};
	});










});