<?php session_start(); ?>
<?php include ("php/header.php");
printHead("User");
printNavigation("fixedtopnav");
printNavigation("fixedbottomnav");
?>
<script>
    
	$(document).ready(function() {
	
		$("#firstpass").keyup(checkPasswordMatch);
		$('#secondpass').keyup(checkPasswordMatch);
		$("#ckeckPass").html('<input type="submit" disabled="disabled" value="Passwort &auml;ndern"/>');	 
	});
	 function checkPasswordMatch(){
		var firstpass=$("#firstpass").val();
		var secondpass=$("#secondpass").val();
		
		if(firstpass===secondpass){
		
			 	$("#checkTwoValues").html("&#10004");
			    $("#ckeckPass").html('<input type="submit" value="Passwort &auml;ndern"/>');
		} else {
			if((firstpass.length>0)&&(secondpass.length>0)){
			 	$("#checkTwoValues").html("&#10008");
				$("#ckeckPass").html('<input type="submit" disabled="disabled" value="Passwort &auml;ndern"/>');
			}
		} 
	}
</script>
<h1>Eingeloggt</h1>

<form action="userchange.php" method="post">
    Benutzername:<?php echo " ".$_SESSION["username"];?>
    </br>
	<div style="width:500px; height:100px ;position:relative;  ">
        <div style= "position:absolute; top:4px;left:0px; width:80px;  ">
        Vorname:
        </div>
        <div style= "position:absolute; top:30px;left:0px; width:80px;  ">
        Nachname:
        </div>
            <div style= "position:absolute; left:80px; width:400px;  ">
                <input name="fname"type="text" placholder="Vorname" value="<?php echo $_SESSION["fname"];?>">
                 
               
                </br>
                <input name="lname"type="text" placholder="Nachname" value="<?php echo $_SESSION["lname"];?>">
                </br>
                <input type="submit" value="Name &auml;ndern"></input>
            </div>
	</div>
</form>
<form action="userchangepass.php" method="post"> 
    Passwort aktuell :
    </br>
    <input name="passwordold" type="password" required/>  
    </br>
    Neu :
    </br>
    <input id="firstpass" name="passwordnew1" type="password" required/> 
    </br>
    Neu wiederholt :
    </br>
    <input id="secondpass" name="passwordnew2" type="password" required/> <span id="checkTwoValues"></span>
    </br>
       <!--make chekmark or cross / make submit button -->
            
            <div id="ckeckPass"></div>
</form> 
</br>
<?php if(isset($_GET["userchange"])){echo "Erfolgreich! Neu: ".$_SESSION["fname"]." ".$_SESSION["lname"];} ?>
<?php 
if(isset($_GET["userpasschange"])){
	if(($_GET["userpasschange"])==1){echo "Erfolgreich! Neues Passwort";}
	if(($_GET["userpasschange"])==2){echo "Falsches aktuelles Passwort!";}
}
?>
 
<?php 

/*
$username	=htmlspecialchars($_POST["username"])	;
$password1	=md5($_POST["password1"])	;


if(isset($_POST["username"])&&isset($_POST["password1"])){
	//access database
	
		$servername = "mysql.kontakt.christianpetri.ch";
		$usernamesql = "kontaktchristian";
		$password = "!Asperger!6815";
		$dbname = "kontaktchristianpetri";
	
	 
	//connect to database
	$conn = new mysqli($servername, $usernamesql, $password, $dbname);
	// Check connection
	 if($conn->connect_errno){
		  die('Connect Error: ' . $conn->connect_errno);
	}
	//check if user and password exists$
	$sql = "SELECT username, password FROM userdata WHERE username='$username' and password='$password1'";
	$result = $conn->query($sql);
	if(($result->num_rows)>0){
		//header("Location:http://www.kontakt.christianpetri.ch/userloggedin.php?");
		$conn->close();
	} else{
	header("Location:http://www.kontakt.christianpetri.ch/user.php?"."username=".$username);
	$conn->close();
	
	
	}
} 
*/
?>






 



<?php footer();?>