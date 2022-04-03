<?php

use Illuminate\Support\Facades\Route;


Route::view('/{path?}', 'layouts.app');
Route::view('/{path?}/{path2?}', 'layouts.app');
Route::view('/{path?}/{path2?}/{path3?}', 'layouts.app');