<?php

use App\Http\Controllers\CallController;
use App\Http\Controllers\OfficesController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/get-rent-offices', [OfficesController::class, 'getRentOffices'])->name('get-rent-offices');
Route::get('/get-sell-offices', [OfficesController::class, 'getSellOffices'])->name('get-sell-offices');
Route::get('/get-office/{typeDeal}/{crmId}', [OfficesController::class, 'getOffice'])->name('get-office');

Route::post('/request-call', [CallController::class, 'requestCall'])->name('request-call');
Route::post('/request-whatsapp', [CallController::class, 'requestWhatsapp'])->name('request-whatsapp');
