<?php
include "MessageBoard.php";
if(isset($_GET['act'])){$act = $_GET['act'];}
if(isset($_GET['id'])){$id = $_GET['id'];}
if(isset($_GET['comment'])){$comment = $_GET['comment'];}

$result = [];


$mb = new MessageBoard();

if($act == "get_comment" && $id)
{
	$output = $mb->getCommentById($id);
	array_push($result, $output);
}

if($act == "get_comments")
{
	$outputs = $mb->getComments();

	foreach($outputs as $output)
	{
		$tempArray = array("id"=>$output[0],"comment"=>$output[1], "created_time"=>$output[2], 
			"like_it"=>$output[3], "dislike_it"=>$output[4]);
		array_push($result, $tempArray);
	}
}

if($act == "add" && $comment)
{
	array_push($result, $mb->addComment($comment));
}



echo json_encode($result);

?>