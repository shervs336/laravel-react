<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'auth', 'namespace' => 'API'], function() {
  Route::post('register', 'AuthController@register');
  Route::post('login', 'AuthController@login');

  Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout', 'AuthController@logout');
    Route::get('user', 'AuthController@user');
  });
});

Route::group(['middleware' => 'auth:api'], function() {
  Route::get('projects', 'ProjectController@index');
  Route::post('projects', 'ProjectController@store');
  Route::get('projects/{id}', 'ProjectController@show');
  Route::put('projects/{project}', 'ProjectController@markAsCompleted');
  Route::post('tasks', 'TaskController@store');
  Route::put('tasks/{task}', 'TaskController@markAsCompleted');
});
