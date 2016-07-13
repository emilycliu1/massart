$(document).ready(function()     // when the document is ready, I want this function to happen
{
	$("#twinkle_B").click(function()    // when someone clicks on twinkle_B
		{
			$(this).fadeOut();     // twinkle_B will fade out

			setTimeout(function()
			{
				$("#how_B").text("How I wonder what you are");    // this text is put into how_B
			}, 450);        // it will take 450 milliseconds

			$("#how_B").fadeIn();     // how_B will fade in
		
		});

});

/*
$(document).ready(function()
	{
		$("#twinkle_B").click(function()
		 	{
		 		setTimeout(function()
				{
					$("#how_B").text("How I wonder what you are");
				}, 450);

			$("#how_B").fadeIn();
	}
);
*/
