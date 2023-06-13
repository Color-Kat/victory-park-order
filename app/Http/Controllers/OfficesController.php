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
    public function getRentOffices()
    {
        return RentOffice::query()
            ->where('isActive', 1)
            ->orderBy('areaMax')
            ->get();
    }

    /**
     * Return all offices for sell
     *
     * @return \Illuminate\Database\Eloquent\Collection
     */
    public function getSellOffices()
    {
        return SellOffice::query()
            ->where('isActive', 1)
            ->orderBy('areaMax')
            ->get();
    }

    public function getOffice(Request $request)
    {
        $typeDeal = $request->route('typeDeal');
        $id = $request->route('id');

        $office = null;

        if ($typeDeal == 'rent')
            $office = RentOffice::query()->where('id', $id)->first();
        if ($typeDeal == 'sell')
            $office = SellOffice::query()->where('id', $id)->first();

        if (!$office) return response()->json(null, 404);

        return $office;
    }
}
