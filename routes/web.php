<?php


Route::get('/', 'Auth\PostController@showTopPage')->name('top');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/drafts/new', "Auth\PostController@index")->name("drafts.new");
Route::post('/drafts/new', 'Auth\PostController@postArticle')->name('drafts.new.posts');
Route::get("/drafts/{id}", "Auth\PostController@showArticle")->name("item");
