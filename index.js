
$(document).ready(function()
{

	// click text to cause words to blink
	$(".text").click(function()
		{
			$(this).fadeTo(300, 0.3).fadeTo(300, 1.0);
		});

	
	// hover over text to change size
	$(".text").mouseenter(function()
	{
		$(this).animate(
			{fontSize: '30px'}, 400);
	}). mouseleave(function()
	{
		$(this).animate(
			{fontSize: '28px'}, 400);
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