	

$(document).ready(function() {
	"use strict";
	 
	$('.tipso').tipso();
	$(".tipso_animate").tipso({
		animationIn:'hinge',
 	 	animationOut: 'hinge'
	});
	$('.tipso').tipso();
	$("html").niceScroll();
	 
	 
	
	
	/**Nachrichten Fromular Start
	$(".button").click(function(){
  		var fname2 = $('input[name=fname2]').val();
  		var lname2 = $('input[name=lname2]').val();
  		var nachricht2 = $('textarea[name=nachricht2]').val();
		$(".list").empty();
  		$(".list").append('<div class="item">'+"<br/>" +"Nachricht von "+ fname2 +" "+ lname2 + "<br/>" + " Nachricht: " + nachricht2 + "<br/>"+ '</div>');
		$(".list").append('<div>' + '<input class="button2" type="submit" value="Nachricht &Auml;ndern" />' + '</div>');
		$(".nachricht2").hide();
		
			$(".button2").click(function(){
		
				$(".nachricht2").show();
	
			});
		
		
	});
	/**Nachrichten Fromular Ende*/
	

});
