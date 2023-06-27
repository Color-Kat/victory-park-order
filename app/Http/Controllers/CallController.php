<?php

namespace App\Http\Controllers;

use App\Mail\NewCallRequestMail;
use App\Mail\NewWhatsappRequestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class CallController extends Controller
{
    private function sendRoistat($data)
    {
//        https://cloud.roistat.com/integration/webhook?key=8fbb4bb921aa2a01544fff95303eb43e

        $site = env('APP_URL');

        $typeDealRus = $data['typeDeal']
            ? match ($data['typeDeal']) {
                'sell' => 'Продажа',
                'rent' => 'Аренда'
            }
            : null;

        $roistatData = [
            "title" => $data['title'] . " - $site",
            "name" => $data['name'],
            "email" => $data['email'] ?? null,
            "phone" => $data['phone'],
            "comment" => isset($data['message']) ? "Сообщение:\n " . $data['message'] : null,
            "roistat_visit" => $_COOKIE["roistat_visit"],
            "fields" => [
                "Сaйт" => $site,
                'ID в CRM' => $data['officeCrmId'],
                'Площадь' => $data['officeSpace'],
                'Тип сделки' => $typeDealRus,
            ]
        ];

        $response = $this->httpPost(
            'https://cloud.roistat.com/integration/webhook?key=8fbb4bb921aa2a01544fff95303eb43e',
            json_encode($roistatData)
        );
    }

    private function httpPost($url, $data)
    {
        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($curl);
        curl_close($curl);
        return $response;
    }

    public function requestCall(Request $request)
    {
        $name = $request->get('name');
        $phone = '+' . preg_replace('/[^0-9]/', '', $request->get('phone'));
        $email = $request->get('email') ?? '';
        $message = $request->get('message') ?? '';
        $officeSpace = $request->get('officeSpace') ?? '';
        $officeCrmId = $request->get('officeCrmId') ?? '';
        $typeDeal = $request->get('typeDeal') ?? '';

        $data = [
            'title' => "Заявка Обратный звонок",
            'name' => $name,
            'phone' => $phone,
            'email' => $email,
            'message' => $message,
            'officeCrmId' => $officeCrmId,
            'officeSpace' => $officeSpace,
            'typeDeal' => $typeDeal,
        ];

        $this->sendRoistat($data);

        Mail::to('office@of.ru')->send(new NewCallRequestMail($data));
    }

    public function requestWhatsapp(Request $request)
    {
        $name = $request->get('name');
        $phone = '+' . preg_replace('/[^0-9]/', '', $request->get('phone'));
        $officeSpace = $request->get('officeSpace') ?? '';
        $officeCrmId = $request->get('officeCrmId') ?? '';
        $typeDeal = $request->get('typeDeal') ?? '';

        $data = [
            'title' => "Презентация Whatsapp",
            'name' => $name,
            'phone' => $phone,
            'officeCrmId' => $officeCrmId,
            'officeSpace' => $officeSpace,
            'typeDeal' => $typeDeal,
        ];

        $this->sendRoistat($data);

        Mail::to('office@of.ru')->send(new NewWhatsappRequestMail($data));
    }
}
