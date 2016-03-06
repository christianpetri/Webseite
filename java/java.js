$(document).ready(function() {
	
	"use strict";
	$(".button").click(function(){
  		var fname = $('input[name=fname]').val();
  		var lname = $('input[name=lname]').val();
  		var nachricht = $('textarea[name=nachricht]').val();
		$(".list").empty();
  		$(".list").append('<div class="item">'+"<br/>" +"Nachricht von "+ fname +" "+ lname + "<br/>" + " Nachricht: " + nachricht + "<br/>"+ '</div>');
		$(".list").append('<div>' + '<input class="button2" type="submit" value="&Auml;ndern" />' + '</div>');
		$(".nachricht").hide();
		
			$(".button2").click(function(){
		
				$(".nachricht").show();
	
			});
		
	});
	
	

});
