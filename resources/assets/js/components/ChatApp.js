import ChatSendForm from './ChatSendForm';
import ChatMessages from './ChatMessages';

class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [{message: 'Hello World', time: '11:10PM'}, {message: 'Hello React', time: '11:12PM'}]
        }

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(message) {

        new Promise(function(resolve, reject) {
            $.post('messages').success(function (a, b, c) {
                console.log(a,b,c);
            }).error(function (a, b, c) {
                console.log(a,b,c);
            });
        }).then(function(response) {
            console.log(this);
            this.setState({
                messages: [... this.state.messages, {message, time: "10:00PM"}]
            });

        }, function(error) {
            console.log(error);
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