 <?php include ("php/header.php");
printHead("User");
printNavigation("fixedtopnav");
printNavigation("fixedbottomnav");
?>

<script>
    
	$(document).ready(function() {
	
		$("#firstpass").keyup(checkPasswordMatch);
		$('#secondpass').keyup(checkPasswordMatch);
		$("#ckeckPass").html('<input type="submit" disabled="disabled" placeholder="Abschicken"/>');	 
	});
	 function checkPasswordMatch(){
		var firstpass=$("#firstpass").val();
		var secondpass=$("#secondpass").val();
		
		if(firstpass===secondpass){
		
			 	$("#checkTwoValues").html("&#10004");
			    $("#ckeckPass").html('<input type="submit" placeholder="Abschicken"/>');
		} else {
			if((firstpass.length>0)&&(secondpass.length>0)){
			 	$("#checkTwoValues").html("&#10008");
				$("#ckeckPass").html('<input type="submit" disabled="disabled" placeholder="Abschicken"/>');
			}
		} 
	}
</script>

<h1>Login</h1>
<form 	action="userloggedin.php" method='post'>

	<input placeholder="Benutername" name="username" required/>
    <input 	placeholder="Passwort" name="password" type="password" required/>
    <input type="submit"/ value="Einloggen">
</form>

<h1>Registrieren</h1>

<form id="regnewuser" method='post' action="usernew.php">
		<input type="text" name="username" placeholder="Benutername" value="<?php echo htmlspecialchars($_GET["username"]); ?>" required/>
    </br>
		<input id="fname" type="text" name="fname" placeholder="Vorname" value="<?php echo htmlspecialchars($_GET["fname"]); ?>" required/>
		<input type="text" name="lname" placeholder="Nachname" value="<?php echo htmlspecialchars($_GET["lname"]); ?>" required/>
    </br> 
    
    	<input id="firstpass" type="password" name="password1" placeholder="Passwort" required/>
    	<input id="secondpass" type="password" name="password2" placeholder="Passwort wiederholen" required/>
        <!--make chekmark or cross / make submit button -->
    	<span id="checkTwoValues"></span>
    	<div id="ckeckPass"></div>
    </br>
</form>




<?php footer();?>