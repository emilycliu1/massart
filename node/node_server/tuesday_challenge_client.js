$(document).ready(function()
{
  
  var carPrice = 12000;


	$("#price_up").click(function(e)
	{
		e.preventDefault();
		$("#api_result").text(""); // when clicking, the previous text goes away

		$.ajax({ // calling out an ajax request to do the below stuff

	  	url: "http://localhost:3000/add",
	  	type: "GET",
	  	success: ajaxHandler // success handler is a function that takes the data and does SOMETHING with it
		});
	});


	$("#price_down").click(function(e)
	{
		e.preventDefault();
		$("#api_result").text(""); // when clicking, the previous text goes away

		$.ajax({ // calling out an ajax request to do the below stuff

	  	url: "http://localhost:3000/subtract",
	  	type: "GET",
	  	success: ajaxHandler // success handler is a function that takes the data and does SOMETHING with it
		});
	});


	function ajaxHandler(data) // this is the SOMETHING it does with it
		{ $("#current_price").text(data) }; // print these names -- if i were to write id instead, it would show me their numbers
});