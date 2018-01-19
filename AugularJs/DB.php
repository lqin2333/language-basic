<?php

class DB{

	private $servername = "localhost";
	private $username = "root";
	private $password = "";
	private $dbname = "test";
	private $conn = null;

	function __construct()
	{
		// Create connection
		$this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
		// Check connection
		if ($this->conn->connect_error) {
			echo json_encode("Connection failed: " . $this->conn->connect_error);
		    die();
		} 
		
	}


	function getCommentById($id)
	{
		$sqlQuery = "SELECT * FROM message_board WHERE id=".$id;
		$result = $this->conn->query($sqlQuery)->fetch_assoc();
		return $result; 
	}

	function getComments()
	{
		$sqlQuery = "SELECT * FROM message_board";
		$result = $this->conn->query($sqlQuery);

		return mysqli_fetch_all($result); 
	}

}

?>