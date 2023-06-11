<?php

use App\Http\Controllers\Admin\AdminController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\ReactController;


Auth::routes();

Route::middleware('role:admin')->get('/admin', [AdminController::class, 'index']);

/**
 * Redirect all routes to ReactController that renders react
 */
Route::get('/{path?}', [ReactController::class, 'index'])
    ->where('path', '.*')
    ->name('home')
;




