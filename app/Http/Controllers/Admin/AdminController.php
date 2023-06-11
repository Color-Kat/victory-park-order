<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RentOffice;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {

    }

    /**
     * Show the application for react rendering.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $rentOffices = RentOffice::all();

        return view('Admin/Index', compact('rentOffices'));
    }
}
