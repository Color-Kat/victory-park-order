<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;

class StoreOfficeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'crmId' => 'unique:rent_offices|unique:sell_offices|required',
            'areaMin' => 'required',
            'areaMax' => 'required',
            'isActive' => 'boolean|required',
            'type' => 'required|string',
            'floor' => 'required',
            'price' => 'required',
            'priceCur' => 'required',
            'typeDeal' => 'required',
            'tax' => 'required',
            'isReady' => 'required',
            'readyData' => '',
            'explPrice' => 'required',
            'explCur' => 'required',
            'layout' => 'required',
        ];
    }

//    protected function failedValidation(Validator $validator)
//    {
//        return back()->withErrors($validator)->withInput();
//    }
}
