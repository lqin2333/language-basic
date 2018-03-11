<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () {
    return "hello worldd";
});

$router->get('user/centerr', [ 'as' => 'newNameOfThisRoute', function () use ($router) {
    return route('newNameOfThisRoute');
}]);

$router->group(['prefix' => 'member'], function () {
    Route::get('user/center', ['as' => 'wtf', function () {
        return route('wtf');
    }]);
    
    Route::get('mmmm2', function () {
        return 'mmmm2';
    });
});

$router->get('mmmm1', function () {
    return 'mmmm1';
});


$router->get('this/is/test', 'MemberController@test');
$router->get('id/is/{id:[0-9]+}', 'MemberController@id');