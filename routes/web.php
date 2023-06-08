<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ReactController;


Auth::routes();


/**
 * Redirect all routes to ReactController that renders react
 */
Route::get('/{path?}', [ReactController::class, 'index'])
    ->name('react')
    ->where('path', '.*')
;


