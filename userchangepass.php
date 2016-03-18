<?php
session_start();
$username=$_SESSION["username"];
$passold=md5($_POST["passwordold"]);
$passnew1=md5($_POST["passwordnew1"]);
$passnew2=md5($_POST["passwordnew2"]);
$end=false;
$end1=false;
$passcheck = false;
$success=false;

if((isset($_POST["passwordnew1"]))&&(isset($_POST["passwordnew2"]))){
	 
		if($password2===$password2){
				$passcheck=true;
	 	}
}

if(isset($_POST["passwordold"])&&$passcheck){
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
	//check if password is vlaid
	$sql1 = "SELECT password FROM userdata WHERE password='$passold'";
	$result1 = $conn->query($sql1);
	if(($result1->num_rows)>0){
		/*password exists*/
		 
		$sql="UPDATE userdata SET password='$passnew1' WHERE username='$username'" ;
		 /*	if ($conn->query($sql) === TRUE) {
				echo "Record updated successfully";
			} */ 
		$conn->query($sql); 
		$conn->close();
		$end=true;
			 
	} else {
		$conn->close();
		$end1=true;
	}
}
if($end){header("Location:http://www.kontakt.christianpetri.ch/userloggedin.php?"."userpasschange="."1");}
if($end1){header("Location:http://www.kontakt.christianpetri.ch/userloggedin.php?"."userpasschange="."2");}
?>