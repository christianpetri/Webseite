<?php include ("php/header.php");
printHead("Kontaktseite für Beruf X");
printNavigation("fixedtopnav");
printNavigation("fixedbottomnav");
?>

<h1>Kontaktformular</h1>
<p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
  quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.<br/>
</p>

<p>Hover <span class="tipso" data-tipso-title="Hello!" data-tipso="I am the content">over me</span> to see tipso in action</p>
<p><span class="tipso_animate" data-tipso-title="HELLO!" data-tipso="Me love cats">Hover over me TOO</span></p>

<br/>
<?php kontakt();?>
</br>
<p>Bei Intresse melden Sie sich bitte mit dem Formular</p>

<!-- Nachricht Formular -->
<div class="nachricht"> Vorname: <br/>
  <input placeholder="Vorname" type="text" name="fname" required>
  <br/>
  Nachname: <br/>
  <input placeholder="Nachname" type="text" name="lname" required>
  <br/>
  Nachricht: <br/>
  <textarea rows="5" cols="40" placeholder="Nachricht" name="nachricht" required></textarea>
  <br/>
  <!--Abschicken Knopf-->
  <input class="button" type="submit" value="Abschicken" />
</div>
<!-- Nachricht Formular Ende -->

<div class="list"></div>
<p>Christan</p>
<i>italic </i><b>fett </b><u>unterstrichen</u> <i><b><u> alles zusammen</u></b></i> <span class="textlinen">CSS: Text mit Linen-Hintergrund</span>
<div class="boxblue">
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, 		nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
</div>

</body>
</html>
