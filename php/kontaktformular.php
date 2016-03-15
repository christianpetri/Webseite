<?php
function kontakt(){
	echo " 
		<form action='php/empfangen.php' method='POST' target='_blank'>
		<p>Vorname: <input name='name' type='text'></input></p>
		<p>Mail: <input name='email' type='text'></input></p>
		<input type='Submit' value='Versenden'></input>
		</form>
	 	";
}
?>
 