$(document).ready(

	  function() { 
		"use strict";
		
		
	  $( ".boxblue" )
	  .mouseenter(function() {
		  $(".boxblue").css("background-color","lightgrey"); 
	  })
	  .mouseleave(function() {
		 $( ".boxblue" ).css("background-color",""); 
	  }); 
});
 
