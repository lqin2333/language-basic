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

	function addComment($comment)
	{
		$sqlQuery = "INSERT INTO message_board (comment, created_time, like_it, dislike_it) VALUES ('".$comment."', '".date("Y-m-d")."', 0, 0)";
		if ($this->conn->query($sqlQuery) === True) {
		    return "successful";
		} else {
		    return "Error: " . $sqlQuery . "<br>" . $this->conn->error;
		}
	}

}

?>