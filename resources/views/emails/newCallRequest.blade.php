<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{$data['title']}}</title>
</head>
<body>
<h1>{{$data['title']}} (<a href={{$data['site']}}>Перейти на сайт</a>)</h1>
<h2>Имя: {{$data['name']}}</h2>
<p>Тел.: <a href="tel:{{$data['phone']}}">{{$data['phone']}}</a></p>

@if($data['email'])
    <p>E-mail: <a href="mailto:{{$data['email']}}">{{$data['email']}}</a></p>
@endif

<p>
    @if($data['message'])
        Сообщение: <br> {{$data['message']}} <br/><br/>
    @endif

    @if($data['officeCrmId'])
        crmId офиса: {{$data['officeCrmId']}} <br/>
        Площадь офиса: {{$data['officeSpace']}} <br/>
    @endif

    Сайт: {{$data['site']}} <br/>
</p>
</body>
</html>