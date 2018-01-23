<?php

class MessageBoard{

    public $id, $content, $createdTime, $numOfLike, $numberOfUnlike;
    private $db;

    function __construct() 
    {
    	include 'DB.php';
        $this->db = new DB();

    }

    function getCommentById($id)
    {
    	return $this->db->getCommentById($id);
    }

    function getComments()
    {
    	return $this->db->getComments();
    }

    function addComment($comment)
    {
    	return $this->db->addComment($comment);
    }

    function like()
    {

    }

    function dislike()
    {

    }


}




?>