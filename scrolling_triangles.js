// 	ALL THIS STUFF IS FOR THE SCROLL TO TOP BUTTON

	if ($(".returns").length)
	{
		// This stuff concerns how the arrow functions upon clicking -- this is the real deal

		
		$("#back_to_one").click(function (e){
			e.preventDefault(); // prevents refreshing, as you will. literally who ever wants it to refresh??

			$("html,body").animate(  // the body of the document animates
				{
				scrollTop: 0 // takes you to 0px on the document, aka the top of the first picture
				}, 600); // takes 600 milliseconds to do this
		});


		$("#back_to_two").click(function (e){
			e.preventDefault(); // prevents refreshing, as you will. literally who ever wants it to refresh??

			$("html,body").animate(  // the body of the document animates
				{
				scrollTop: 860 // takes you to 860px on the document, aka the top of second picture
				}, 600); // takes 600 milliseconds to do this
		});


		$("#back_to_three").click(function (e){
			e.preventDefault(); // prevents refreshing, as you will. literally who ever wants it to refresh??

			$("html,body").animate(  // the body of the document animates
				{
				scrollTop: 1880 // takes you to 1880px on the document, aka top of third picture
				}, 600); // takes 600 milliseconds to do this
		});


		$("#back_to_four").click(function (e){
			e.preventDefault(); // prevents refreshing, as you will. literally who ever wants it to refresh??

			$("html,body").animate(  // the body of the document animates
				{
				scrollTop: 2760 // takes you to 2760px on the document, aka top of fourth picture
				}, 600); // takes 600 milliseconds to do this
		});


		$("#back_to_five").click(function (e){
			e.preventDefault(); // prevents refreshing, as you will. literally who ever wants it to refresh??

			$("html,body").animate(  // the body of the document animates
				{
				scrollTop: 3800 // takes you to 3835px on the document, aka almost bottom
				}, 600); // takes 600 milliseconds to do this
		});
	}