$(document).ready(function(){

<<<<<<< HEAD
	$("#set-price-submit").click(function(e){
		e.preventDefault();

        $.ajax({
            url: "http://localhost:3000/set_price",
            type: "GET",
            data: {
                price: $('#car-price').val()
            }
          });
=======
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
>>>>>>> 5c971d9c10381ba82022510e83c59437c43d89cf
    });
});