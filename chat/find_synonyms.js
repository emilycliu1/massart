$("#send").click(function(e){ // when we click the button or hit enter, run these functions
		e.preventDefault();

		var messageObject = {};
			messageObject.username = $("#chat_name").val();
			messageObject.text = "";

		var originalMessage = $("#chat_input").val(); // just another way to say the message
		var originalArray = originalMessage.split(" "); // create an array from the inputted text
		var punctuated = originalArray[originalArray.length - 1]; // pick the last word from the array, including its punctuation
		var originalWord = punctuated.replace(/[.,\/#@!?$%-+\|^&\*"<>;:{}=\-_`~()]/g,"");

		console.log(originalWord); // this is the word that we picked!!! snaaapppp let's boogie

		$.ajax({
			url: "http://words.bighugelabs.com/api/2/7a63887bd3d6f4e542ff5b845c80cc80/"+originalWord+"/json", // the key is 7a63887bd3d6f4e542ff5b845c80cc80
			datatype: "json",
			error: keepOldWord, // if there are no results -- typo or name?
			success: inputNewWord // this is the function that puts it back in the message
		});

		function keepOldWord() // if there's an error (no words)
		{
			messageObject.text = originalMessage + ' (No related term available for "' +punctuated+ '")'; // just do the original message
			// console.log(messageObject.text);
			sendItIn();
		}

		function inputNewWord(data) // if it works!! (available words)
		{
			var obj = JSON.parse(data);
			// console.log(obj); // logs all the data as an object

			var partOfSpeech = "";

			if (obj.noun !== undefined){
				partOfSpeech = obj.noun;
			} else if (obj.adjective !== undefined){
				partOfSpeech = obj.adjective;
			} else if (obj.verb !== undefined){
				partOfSpeech = obj.verb;
			} else if (obj.adverb !== undefined){
				partOfSpeech = obj.adverb;
			} else {
				keepOldWord();
			}
			// console.log(partOfSpeech);

			var synonymArray = "";

			if (partOfSpeech.syn !== undefined){
				synonymArray = partOfSpeech.syn;
			} else if (partOfSpeech.sim !== undefined){
				synonymArray = partOfSpeech.sim;
			} else {
				keepOldWord();
			}
			console.log(synonymArray);

			var newWord = synonymArray[Math.floor(Math.random() * synonymArray.length)];
			console.log(newWord); // this is the selected word

			messageObject.text = originalMessage.split(originalWord).join('"'+newWord+'"'); // get rid of old words and replace with new words and quotations
			// console.log(messageObject.text);
			sendItIn();
		}	

		function sendItIn()
		{
			socket.emit("chat message", messageObject); // emit a message called "chat message", and attach the object to it
			$("#chat_input").val(""); // empty the text box now that you hit send
			return false;
		}
	});


	x = 1;  // going up by ones in seconds
	 	var date = new Date(); // time value from milliseconds since midnight January 1, 1970
	 	var hrs = date.getHours(); // gives us the number of hours
	 	var min = date.getMinutes(); // minutes
	 	var sec = date.getSeconds(); // seconds

	 	var timeStamp = "[" +hrs+ ":" +min+ ":" +sec+ "]";

	socket.on("chat message", function(msg){ // receiving the message
		if(msg.username == $("#chat_name").val()){
			$("#chat_log ul").append("<li class = 'me_line'>" +timeStamp+ " -- <b>" +msg.username+ "</b>: " +msg.text+ "</li>"); // li means list item, so append that message into the <ul>
		} else {
			$("#chat_log ul").append("<li class = 'them_line'>" +timeStamp+ " -- <b>" +msg.username+ "</b>: " +msg.text+ "</li>");	
		}
	});