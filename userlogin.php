<?php 
// Start the session
session_start();
$username	=htmlspecialchars($_POST["username"])	;
$password1	=md5($_POST["password1"])	;
$optrionUserExistNOT=false;
$optionPassAndUserMatch=false;
$optionPassAndUserMatchNOT=false;

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
	//check if user exist
	$sql1 = "SELECT username FROM userdata WHERE username='$username'";
	$result1 = $conn->query($sql1);
	if(($result1->num_rows)>0){
		/*userexists*/
		$_SESSION["username"] = $username;
	
		//check if user and password exists$
		$sql = "SELECT username, password FROM userdata WHERE username='$username' and password='$password1'";
		
		$result = $conn->query($sql);
		
		if(($result->num_rows)>0){
			
				$sql3 = "SELECT fname, lname FROM userdata WHERE username='$username'";
				$result3 = $conn->query($sql3);
				
				if ($result3->num_rows > 0) {
					 // output data of each row
					 while($row = $result3->fetch_assoc()) {
						 $_SESSION["fname"] = $row["fname"];
						 $_SESSION["lname"] = $row["lname"];
						 
					 }
				}
			
			
			$conn->close();
			$optionPassAndUserMatch=true;
					
		} else{
		
		$conn->close();
		$optionPassAndUserMatchNOT=true;
		
		}
	} else {
		$conn->close();
		$optrionUserExistNOT=true;
		
	}
} 
if($optionPassAndUserMatch){header("Location:http://www.kontakt.christianpetri.ch/userloggedin.php?");}
if($optionPassAndUserMatchNOT){header("Location:http://www.kontakt.christianpetri.ch/user.php?"."username1=".$username);}
if($optrionUserExistNOT){header("Location:http://www.kontakt.christianpetri.ch/user.php?"."username2=".$username);}
?>






 



 