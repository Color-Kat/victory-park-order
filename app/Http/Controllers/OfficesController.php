<?php

namespace App\Http\Controllers;

use App\Models\RentOffice;
use App\Models\SellOffice;
use Illuminate\Http\Request;

class OfficesController extends Controller
{
    /**
     * Return all rent offices
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getRentOffices() {
        return RentOffice::all()->append('photos');
    }

    /**
     * Return all offices for sell
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getSellOffices() {
        return SellOffice::all()->append('photos');
    }
}
