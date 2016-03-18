<?php
session_start();
$username=$_SESSION["username"];
$passold=md5($_POST["passwordold"]);
$passnew1=md5($_POST["passwordnew1"]);
$passnew2=md5($_POST["passwordnew2"]);
$end=false;
$passcheck = false;
$success=false;

if((isset($_POST["password1"]))&&(isset($_POST["password2"]))){
	 
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
	$sql="UPDATE userdata SET password='$passnew1' WHERE username='$username'" ;
 if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
	}  
 
	$conn->close();
	$end=true;
	 
}
if($end){header("Location:http://www.kontakt.christianpetri.ch/userloggedin.php?"."userchange="."1");}
?>