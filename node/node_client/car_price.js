$(document).ready(function(){

	$("#set-price-submit").click(function(e){ // when i click submit on the page
		e.preventDefault(); // the page doesn't reload

        $.ajax(
        {
            url: "http://localhost:3000/set_car", // this url
            type: "GET", // will take that typed in value
            data: {
                price: $("#car-price").val() // price is whatever was typed in the form
                color: $("#car-color").val()
            }
        });
    });
});