<?php

namespace App\Http\Controllers;

use App\Mail\NewCallRequestMail;
use App\Mail\NewWhatsappRequestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CallController extends Controller
{
    public function requestCall(Request $request) {

        $name = $request->get('name');
        $phone = '+' . preg_replace('/[^0-9]/', '', $request->get('phone'));
        $email = $request->get('email') ?? '';
        $message = $request->get('message') ?? '';
        $officeSpace = $request->get('officeSpace') ?? '';
        $officeCrmId = $request->get('officeCrmId') ?? '';

        Mail::to('office@of.ru')->send(new NewCallRequestMail([
            'name' => $name,
            'phone' => $phone,
            'email' => $email,
            'message' => $message,
            'officeCrmId' => $officeCrmId,
            'officeSpace' => $officeSpace,
        ]));

    }

    public function requestWhatsapp(Request $request) {

        $name = $request->get('name');
        $phone = '+' . preg_replace('/[^0-9]/', '', $request->get('phone'));
        $officeSpace = $request->get('officeSpace') ?? '';
        $officeCrmId = $request->get('officeCrmId') ?? '';

        Mail::to('office@of.ru')->send(new NewWhatsappRequestMail([
            'name' => $name,
            'phone' => $phone,
            'officeCrmId' => $officeCrmId,
            'officeSpace' => $officeSpace,
        ]));

    }
}
