<!DOCTYPE html>
<html lang="ru">
<head>

    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

    <!-- Title -->
    <title>Бизнес-центр Лотте Плаза - аренда офисов и торговых площадей</title>

    <!-- KeyWords -->
    <meta name="keywords" content="бц Лотте Плаза, офис на Новом Арбате">

    <!--  Description  -->
    <meta name="description" content="Лотте Плаза (Lotte Plaza) – многофункциональный комплекс, состоящий из бизнес-центра класса премиум, торгового комплекса и пятизвёздочного отеля." data-react-helmet="true">

    <!--  Favicon  -->
    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">

    <!--  Webmanifest  -->
    <!--    <link rel="manifest" href="/manifest.webmanifest">-->

    <!--  Icons  -->
    <!--    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png">-->
    <!--    <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png">-->
    <!--    <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png">-->
    <!--    <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#2b2b2b">-->
    <!--    <meta name="msapplication-TileColor" content="#2b2b2b">-->
    <!--    <meta name="theme-color" content="#2b2b2b">-->

    <!-- Open Graph -->
    <!--    <meta property="og:title" content=""/>-->
    <!--    <meta property="og:type" content="website"/>-->
    <!--    <meta property="og:image" content=""/>-->
    <!--    <meta property="og:description"-->
    <!--          content=""/>-->

    <!-- CSRF -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;1,600&family=Oswald:wght@300;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">

    <!-- Roistat Counter Start -->
    <script>
        (function(w, d, s, h, id) {
            w.roistatProjectId = id; w.roistatHost = h;
            var p = d.location.protocol == "https:" ? "https://" : "http://";
            var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
            var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
        })(window, document, 'script', 'cloud.roistat.com', {{env('ROISTAT_SCRIPT_KEY')}});
    </script>
    <!-- Roistat Counter End -->


    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/js/index.tsx'])

</head>
<body class="">

<div id="app">

</div>

<div id="settings" data-settings="{{json_encode($settings->all())}}"></div>

</body>
</html>
