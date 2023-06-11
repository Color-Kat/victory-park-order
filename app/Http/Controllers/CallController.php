<?php

namespace App\Http\Controllers;

use App\Mail\NewCallRequestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CallController extends Controller
{
    public function requestCall(Request $request) {

        $name = $request->get('name');
        $phone = $request->get('phone');

        Mail::to('katik7979@gmail.com')->send(new NewCallRequestMail([
            'name' => $name,
            'phone' => $phone
        ]));

    }
}
