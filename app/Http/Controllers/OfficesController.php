<?php

namespace App\Http\Controllers;

use App\Models\RentOffice;
use Illuminate\Http\Request;

class OfficesController extends Controller
{
    public function getRentOffices() {
        return RentOffice::all();
    }
}
