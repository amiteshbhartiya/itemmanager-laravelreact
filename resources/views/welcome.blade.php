<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

        <title>Item manage new</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- Styles -->
        <style>
        * {box-sizing: border-box;}

        body { 
        margin: 0;
        font-family: "Open Sans", sans-serif;
        background-color:#344038;
        color:#f8f9fa;
        background-image: url(../images/abstract-on-blue.jpg);
        
        }
       .btn-group-vertical > button{
            margin-bottom:10px;
            border-radius:10px !important;
        }
        .main-content{
            margin: 50px 0px;
        }
        .footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            line-height: 30px;
            background-color: #f5f5f5;
        }
        main{
             margin-top: 66px;
        }
        /*main{
         
            background-image: url(../images/abstract-on-blue.jpg);
             height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
             width: 100%;
            position: absolute;
            bottom: 80px;
            top: 80px;
            left: 0;
            right: 0;
        }
        */
        </style>
    </head>
    <body>
        <div id="item-maanger-app" >
        </div>    
    </body>
</html>
