<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOfficeRequest;
use App\Http\Requests\UpdateOfficeRequest;
use App\Models\RentOffice;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

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
     * @param StoreOfficeRequest $request
     * @return RedirectResponse
     */
    public function store(StoreOfficeRequest $request)
    {
        RentOffice::storePhotos($request);

        $data = $request->all();
        if(empty($data['areaMax'])) $data['areaMax'] = $data['areaMin'];

        RentOffice::query()->create($data);

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
     * @param UpdateOfficeRequest $request
     * @param RentOffice $rentOffice
     * @return RedirectResponse
     */
    public function update(UpdateOfficeRequest $request, RentOffice $rentOffice)
    {
        RentOffice::storePhotos($request);

        $data = $request->except(['_token', '_method', 'photos' ]);
        if(empty($data['areaMax'])) $data['areaMax'] = $data['areaMin'];

        RentOffice::query()->where('id', $rentOffice->id)->update($data);

        return redirect()->route('admin.index')->with('success', 'Офис для аренды успешно обновлён.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\RentOffice  $rentOffice
     * @return \Illuminate\Http\RedirectResponse
     */
    public function destroy(RentOffice $rentOffice)
    {
        $rentOffice->delete();

        return redirect()->route('admin.index')->with('success', 'Офис для аренды успешно удалён');
    }
}
