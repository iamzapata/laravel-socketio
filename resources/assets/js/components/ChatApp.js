import ChatSendForm from './ChatSendForm';
import ChatMessages from './ChatMessages';
import SocketChannel from '../SocketChannel';

class ChatApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: []
        }

        this.socket = new SocketChannel(this);

        this.sendMessage = this.sendMessage.bind(this);
    }

    receiveMessage(message) {
        let msg = message.data.message;
        let datetime = moment(message.data.datetime.date).format('MM/DD/YYYY h:m:s A');

        this.setState({
            messages: [... this.state.messages, {message:msg , time: datetime} ]
        });
    }

    sendMessage(message) {
        let url = "messages";
        new Promise(function(resolve, reject) {
            $.ajax({
                url,
                type: "POST",
                data: {message},
                success:function(response) {
                    resolve(response);
                },
                error: function(error) {
                    reject(error);
                }
            });
        }).then(function(response) {

        }.bind(this), function(error) {
            console.log("Error:", error);
        });
    }

    render() {
        return (
            <div>
                <ChatMessages messages={this.state.messages}/>
                <ChatSendForm  onSendMessage={this.sendMessage} />
            </div>
        );
    }

}
export default ChatApp