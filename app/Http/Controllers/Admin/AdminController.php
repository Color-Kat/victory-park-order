<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RentOffice;
use App\Models\SellOffice;
use Illuminate\Http\Request;
use Spatie\Valuestore\Valuestore;

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
        $sellOffices = SellOffice::all();

        $settings = Valuestore::make(storage_path('app/settings.json'));
//        $settings->put('is_rent_active', true);
//        $settings->put('is_sell_active', true);

        return view('Admin/Index', compact('rentOffices', 'sellOffices', 'settings'));
    }

    public function updateSettings(Request $request) {
        $settings = Valuestore::make(storage_path('app/settings.json'));

        $settings->put('is_rent_active', $request->has('is_rent_active'));
        $settings->put('is_sell_active', $request->has('is_sell_active'));

        return redirect()->route('admin.index')->with('success', 'Настройки обновлены.');
    }
}
