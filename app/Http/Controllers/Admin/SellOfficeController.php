<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOfficeRequest;
use App\Http\Requests\UpdateOfficeRequest;
use App\Models\SellOffice;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SellOfficeController extends Controller
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
        return view('admin/sell-office/create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreOfficeRequest $request
     * @return RedirectResponse
     */
    public function store(StoreOfficeRequest $request)
    {
        SellOffice::storePhotos($request, 'sell');

        $data = $request->all();
        if(empty($data['areaMax'])) $data['areaMax'] = $data['areaMin'];

        SellOffice::query()->create($data);

        return redirect()->route('admin.index')->with('success', 'Офис для продажи успешно добавлен.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\SellOffice  $sellOffice
     * @return \Illuminate\Http\Response
     */
    public function show(SellOffice $sellOffice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\SellOffice  $sellOffice
     * @return \Illuminate\Contracts\Foundation\Application|\Illuminate\Contracts\View\Factory|\Illuminate\Contracts\View\View
     */
    public function edit(SellOffice $sellOffice)
    {
        return view('admin/sell-office/edit', compact('sellOffice'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateOfficeRequest $request
     * @param SellOffice $sellOffice
     * @return Response
     */
    public function update(UpdateOfficeRequest $request, SellOffice $sellOffice)
    {
        SellOffice::storePhotos($request, 'sell');

        $data = $request->except(['_token', '_method', 'photos' ]);
        if(empty($data['areaMax'])) $data['areaMax'] = $data['areaMin'];

        SellOffice::query()->where('id', $sellOffice->id)->update($data);

        return redirect()->route('admin.index')->with('success', 'Офис для продажи успешно обновлён.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\SellOffice  $sellOffice
     * @return \Illuminate\Http\Response
     */
    public function destroy(SellOffice $sellOffice)
    {
        $sellOffice->delete();

        return redirect()->route('admin.index')->with('success', 'Офис для продажи успешно удалён');
    }
}
