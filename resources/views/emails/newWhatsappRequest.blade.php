<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Получить презентацию Victory Park</title>
</head>
<body>
<h1>Получить презентацию Victory Park (<a href="http://minskayaplaza.ru/">Перейти на сайт</a>)</h1>
<h2>Имя: {{$data['name']}}</h2>
<p>Тел.: <a href="tel:{{$data['phone']}}">{{$data['phone']}}</a></p>

<p>
    @if($data['officeCrmId'])
        crmId офиса: {{$data['officeCrmId']}} <br/>
        Площадь офиса: {{$data['officeSpace']}} <br/>
    @endif
</p>
</body>
</html>