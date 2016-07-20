$(document).ready(function()
{	
	var socket = io("http://localhost:3000");

	$("#chat_start").click(function(){
		$.ajax({
			url: "http://localhost:3000/get_archive",
			success: function(data){
				for(var i = 0; i < data.length; i++)
				{
					var msg = data[i];
					if(msg.username == $("#chat_name").val())
					{
						$("#chat_log ul").append("<li class = 'me_line'><b>" +msg.username+ "</b>: " +msg.text+ "</li>"); // li means list item, so append that message into the <ul>
					} else {
						$("#chat_log ul").append("<li class = 'them_line'><b>" +msg.username+ "</b>: " +msg.text+ "</li>");	
					}
				}
			}
		});
	});


	$("#chat_form").submit(function(e){ // when we click the button or hit enter, run these functions
		e.preventDefault();

		var messageObject = {};
		messageObject.username = $("#chat_name").val();
		messageObject.text = $("#chat_input").val();

		var originalMessage = messageObject.text;
		var originalArray = originalMessage.split(" ");
		var originalWord = originalArray[0];

		$.ajax({
			url: "https://wordsapiv1.p.mashape.com/words/" +originalWord+ "/synonyms?accessToken=[yourToken]",
			success: inputNewWord
		});




		socket.emit("chat message", messageObject); // emit a message called "chat message", and attach the object to it
		$("#chat_input").val(""); // empty the text box now that you hit send
		return false;


		

		// this is to indicate who said what
		socket.on("chat message", function(msg){ // when socket gets a message called chat message, do this function
			if(msg.username == $("#chat_name").val())
			{
				$("#chat_log ul").append("<li class = 'me_line'><b>" +msg.username+ "</b>: " +msg.text+ "</li>"); // li means list item, so append that message into the <ul>
			} else {
				$("#chat_log ul").append("<li class = 'them_line'><b>" +msg.username+ "</b>: " +msg.text+ "</li>");	
			}
		});
	});
});