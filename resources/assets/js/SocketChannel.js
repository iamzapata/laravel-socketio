
class SocketChannel {

    constructor(chatApp) {
        this.chatApp = chatApp;
        this.url = "http://192.168.10.10:4444/";
        this.socket = io(this.url);
        this.channel = 'app-messages-channel:App\\Events\\Message\\IncomingMessage';
        this.listen();
    }

    listen() {
        this.socket.on(this.channel, (message) => {
            this.chatApp.receiveMessage(message);
        });
    }


}
export default SocketChannel