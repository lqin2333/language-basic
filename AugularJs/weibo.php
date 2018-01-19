<?php

include "MessageBoard.php";
if(isset($_GET['act'])){$act = $_GET['act'];}
if(isset($_GET['id'])){$id = $_GET['id'];}
$result = 121;

$mb = new MessageBoard();
if($act == "get_comment" && $id)
{
	$result = $mb->getCommentById($id);
}

if($act == "get_comments")
{
	$result = $mb->getComments();
}



echo json_encode($result);

?>