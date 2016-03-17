<?php include ("php/header.php");
printHead("Kontaktseite für Beruf X");
printNavigation("fixedtopnav");
printNavigation("fixedbottomnav");
?>

<h1>Kontaktformular</h1>
<form method='post' action='empfangen.php'>
        	<input   class="nachricht" name="fname" placeholder="Vorname" type="text" required/> 
         	<input   class="nachricht" name="lname" placeholder="Nachname" type="text" required/> 
             <br/>   
           	<input class="webseite" name="website" placeholder="Ihre Webseite" type="url"/> 
            <br/>
         	<textarea class="nachrichtext"  placeholder="Ihr Kommentar..." name="nachricht" type="text" required></textarea> 
            <br/> 
       		<input   type="Submit" value="Versenden"/> 
        	 
</form>
 
<p>Komnmentare zu dem Kommentar-Formular!!</p>
<?php getComments(); ?>
<br/>
<p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
  quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.<br/>
</p>

<p>Hover <span class="tipso" data-tipso-title="Hello!" data-tipso="I am the content">over me</span> to see tipso in action</p>
<p><span class="tipso_animate" data-tipso-title="HELLO!" data-tipso="Me love cats">Hover over me TOO</span></p>
<p>Hinterlassen Sie einen Kommentar</p>
<br/>



<div class="list"></div>
<p>Christan</p>
<i>italic </i><b>fett </b><u>unterstrichen</u> <i><b><u> alles zusammen</u></b></i> <span class="textlinen">CSS: Text mit Linen-Hintergrund</span>
<div class="boxblue">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 		nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
</div>

</body>
</html>
