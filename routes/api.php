<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post('signin', 'AuthController@signin');
    Route::post('signup', 'AuthController@signup');

    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('signout', 'AuthController@signout');
        Route::get('user', 'AuthController@user');
    });
});

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/book', 'BookController@all');
Route::get('/book/{id}', 'BookController@find');
Route::post('/book', 'BookController@create');
Route::put('/book/{id}', 'BookController@update');
Route::delete('/book/{id}', 'BookController@delete');
