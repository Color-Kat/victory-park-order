<?php

use App\Http\Controllers\Admin\AdminController;
use App\Http\Controllers\Admin\RentOfficeController;
use App\Http\Controllers\Admin\SellOfficeController;
use App\Http\Controllers\ReactController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::middleware('role:admin')->as('admin.')->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('index');

    Route::post('/admin/update-settings', [AdminController::class, 'updateSettings'])->name('update-settings');

    Route::resource('/admin/rent-office', RentOfficeController::class)->names('rent-office');

    Route::resource('/admin/sell-office', SellOfficeController::class)->names('sell-office');
});

/**
 * Redirect all routes to ReactController that renders react
 */
Route::get('/{path?}', [ReactController::class, 'index'])
    ->where('path', '.*')
    ->name('home')
;




