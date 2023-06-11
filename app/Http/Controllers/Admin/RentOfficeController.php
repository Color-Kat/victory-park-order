<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\RentOffice;
use Illuminate\Http\Request;

class RentOfficeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function create()
    {
        return view('admin/rent-office/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        RentOffice::query()->create($request->all());

        return redirect()->route('admin.index')->with('success', 'Офис для аренды успешно добавлен.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\RentOffice  $rentOffice
     * @return \Illuminate\Http\Response
     */
    public function show(RentOffice $rentOffice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\RentOffice  $rentOffice
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(RentOffice $rentOffice)
    {
        return view('admin/rent-office/edit', compact('rentOffice'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\RentOffice  $rentOffice
     * @return \Illuminate\Http\RedirectResponse
     */
    public function update(Request $request, RentOffice $rentOffice)
    {
        RentOffice::query()->where('id', $rentOffice->id)->update($request->except(['_token', '_method' ]));

        return redirect()->route('admin.index')->with('success', 'Офис для аренды успешно обновлён.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RentOffice  $rentOffice
     * @return \Illuminate\Http\Response
     */
    public function destroy(RentOffice $rentOffice)
    {
        //
    }
}
