// This is for the "Surprise! All the facts are true!" popping out of middle
$(document).ready(function()
{
	$("#answer").hide();

	$("#form-submit").click(function(e){
		e.preventDefault();

		$("#answer").fadeIn().animate({fontSize: "40px"}, 200).animate({fontSize: "36px"}, 400);
	});
});