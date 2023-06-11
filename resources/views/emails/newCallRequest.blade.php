<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Новая заявка Victory Park</title>
</head>
<body>
<h1>Новая заявка Victory Park (<a href="http://minskayaplaza.ru/">Перейти на сайт</a>)</h1>
<h2>Имя: {{$data['name']}}</h2>
<span>Тел.: <a href="tel:{{$data['phone']}}">{{$data['phone']}}</a></span>

@if($data['email'])
    <span>E-mail: <a href="mailto:{{$data['email']}}">{{$data['email']}}</a></span>
@endif

<p>
    @if($data['message'])
        Сообщение: <br> {{$data['message']}} <br>
    @endif

    @if($data['officeCrmId'])
        crmId офиса: {{$data['officeCrmId']}} <br>
        Площадь офиса: {{$data['officeSpace']}} <br>
    @endif
</p>
</body>
</html>