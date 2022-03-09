<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">
    <title>@yield("title")</title>
</head>
<body>
    <div id="app">
        <header-component></header-component>

        @yield('body')
    </div>

</body>
<script src="{{ asset('js/app.js') }}"></script>
</html>