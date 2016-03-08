	

$(document).ready(function() {
	"use strict";

	 
	/**NavMenu item Anfang*/
	$("#menu").append(	'<a href="index.html">'+'Home'+'</a>'+' '+
						'<a href="galerie.html">'+'Galerie'+'</a>'+' '+
						'<a href="jump.html">'+'Jump'+'</a>'+
						'<div class="fixedbottom">'+'<a href="#top">'+"Zum Seiten-Anfang"+'</a>'+'</div>'
	
	);
	/**NavMenu item Ende*/
	
	
	/**Nachrichten Fromular Start*/
	$(".button").click(function(){
  		var fname = $('input[name=fname]').val();
  		var lname = $('input[name=lname]').val();
  		var nachricht = $('textarea[name=nachricht]').val();
		$(".list").empty();
  		$(".list").append('<div class="item">'+"<br/>" +"Nachricht von "+ fname +" "+ lname + "<br/>" + " Nachricht: " + nachricht + "<br/>"+ '</div>');
		$(".list").append('<div>' + '<input class="button2" type="submit" value="Nachricht &Auml;ndern" />' + '</div>');
		$(".nachricht").hide();
		
			$(".button2").click(function(){
		
				$(".nachricht").show();
	
			});
		/**Nachrichten Fromular Ende*/
		
	});
	
	

});
