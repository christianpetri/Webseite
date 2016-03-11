 
$(document).ready(function(){
	"use strict";

	(function ( $ ) {
  
		$.fn.greenify = function() {
			this.css( "background-color", "lightgreen" );
			return this;
		};
 
	}( jQuery ));
});