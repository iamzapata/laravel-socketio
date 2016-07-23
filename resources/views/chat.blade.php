<!DOCTYPE html>
<html>
    <head>
        <title>Socket  Chat</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:100" rel="stylesheet" type="text/css">

        <style>
            html, body {
                height: 100%;
            }

            body {
                margin: 0;
                padding: 0;
                width: 100%;
                display: table;
                font-weight: 100;
                font-family: 'Lato';
            }

            .container {
                text-align: center;
                display: table-cell;
                vertical-align: middle;
            }

            .content {
                text-align: center;
                display: inline-block;
            }

            .title {
                font-size: 96px;
            }
        </style>
    </head>
    <body>
        <div id="chatContainer" class="container">
            <ChatApp>
                <ChatMessages></ChatMessages>
                <ChatInput>
                    <ChatSend></ChatSend>
                </ChatInput>
            </ChatApp>
        </div>
    </body>

    <script src="vendor/react/react.js"></script>
    <script src="vendor/react/react-dom.js"></script>
    <script src="vendor/socketio/socket.io-1.3.5.js"></script>
    <script src="js/app.js"></script>
</html>
