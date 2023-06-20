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
     * @return \Illuminate\Http\JsonResponse
     */
    public function getRentOffices()
    {
        $office = RentOffice::query()
            ->where('isActive', 1)
            ->orderBy('areaMax')
            ->get();

        if(!$office) abort(404);

        return response()->json($office, 200);
    }

    /**
     * Return all offices for sell
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function getSellOffices()
    {
        $office = SellOffice::query()
            ->where('isActive', 1)
            ->orderBy('areaMax')
            ->get();

        if(!$office) abort(404);

        return response()->json($office, 200);
    }

    public function getOffice(Request $request)
    {
        $typeDeal = $request->route('typeDeal');
        $crmId = $request->route('crmId');

        $office = null;

        if ($typeDeal == 'rent')
            $office = RentOffice::query()->where('crmId', $crmId)->first();
        if ($typeDeal == 'sell')
            $office = SellOffice::query()->where('crmId', $crmId)->first();

        if (!$office) return response()->json(null, 404);

        return $office;
    }
}
