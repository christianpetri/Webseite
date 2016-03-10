$(document).ready(

	  function() { 
		"use strict";
		$("html").niceScroll();
		
	  $( ".boxblue" )
	  .mouseenter(function() {
		  $(".boxblue").css("background-color","lightgrey"); 
	  })
	  .mouseleave(function() {
		 $( ".boxblue" ).css("background-color",""); 
	  }); 
});
 
