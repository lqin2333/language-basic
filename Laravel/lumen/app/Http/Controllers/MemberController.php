<?php

namespace App\Http\Controllers;

class MemberController extends Controller{
    public function test(){
        return "TEST CONTROLLER";
    }

    public function id($id){
        return "The id is " . $id;
    }
}