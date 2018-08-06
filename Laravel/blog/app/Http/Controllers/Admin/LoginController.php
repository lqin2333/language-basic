<?php

namespace App\Http\Controllers\Admin;
use Illuminate\Support\Facades\Input;

class LoginController extends CommonController
{
    public function login()
    {

        if ($input = Input::all()) {
            dd($input);
        } else {
            return view('admin.login');
        }

    }
}
