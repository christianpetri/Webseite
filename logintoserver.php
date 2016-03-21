
<?php 
function cleanBeforeInput($data){
	$data=trim($data);
	
	
	
	return $data; 
	
}	
	
class foo
{
	public $name="Public";
	public $firstname;
	public $lastname;
	public $age;
	public $conn;

	private function connectToDatabase(){
		
		$servername="localhost";
		$usernamesql = "root";
		$password = "";
		$dbname = "test";
	
	 
		//check if connection is there
		$this->conn = new mysqli($servername, $usernamesql, $password, $dbname);
		if($this->conn->connect_errno){
		  die('Connect Error: ' . $this->conn->connect_errno);
		   
		} else {
			echo "Connection established"."</br>";
		}
	}
	private function sendToDatabaseAndClose($sql){
		
		$this->conn->query($sql);
		$this->conn->close();
		}
		
	
	public function Insert($a,$b,$c,$d){
			echo "before ".$a."</br>";
			$this->connectToDatabase();
			$aclean= mysqli_real_escape_string($this->conn,$a);
			$bclean= mysqli_real_escape_string($this->conn,$b);
			$cclean= mysqli_real_escape_string($this->conn,$c);
			$dclean= mysqli_real_escape_string($this->conn,$d);
			
			echo "mysqli_real_escape_string= ".$aclean."</br>";
			echo "cleanBeforeInput= ".cleanBeforeInput($a);
			
			
			// $this->sendToDatabaseAndClose("INSERT INTO user(a,b,c,d) VALUES ('$aclean','$bclean','$cclean','$dclean')");
			
			$stmt = $this->conn->prepare("INSERT INTO user (a,b,c,d) 
			VALUES (?, ?, ?, ?)");
			$stmt->bind_param("ssss",cleanBeforeInput($a),cleanBeforeInput($b),cleanBeforeInput($c),cleanBeforeInput($d));
			$stmt->execute();
			
			
			
			
		
		}
	public function __construct($firstname,$lastname,$age){
             $this->firstname   = $firstname;
             $this->lastname    = $lastname;
             $this->age         = $age;
            }
	
	
}

$bar= new foo("bar","la",15);
$foo= new foo("laa","mau",5);
 
echo "</br>".$bar->firstname."</br>"." ";

 //preg_replace( "/\r|\n/", "", $yourString );
echo $bar->Insert("Hellohfgdhgfdch bin text und <sript> (' '); "," tt ","sup      333er",32);



?>
