<?php

class MessageBoard{

    public $id, $content, $createdTime, $numOfLike, $numberOfUnlike;

    function __construct() {
        $this->id = 6;

    }

    function printInfo(){
        echo $this->id;

    }

}


$mb = new MessageBoard();
$mb->printInfo();
?>