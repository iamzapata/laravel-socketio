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
        let url = "messages";

        new Promise(function(resolve, reject) {
            $.ajax({
                url,
                type: "POST",
                data: message,
                success:function(a,b,c) {
                    console.log(a,b,c);
                    resolve(a);
                },
                error: function(a, b, c) {
                    reject(a);
                    console.log(a,b,c);
                }
            });
        }).then(function(response) {

            console.log(this);
            this.setState({
                messages: [... this.state.messages, {message, time: "10:00PM"}]
            });

        }.bind(this), function(error) {

            console.log("errorskskssk", error);

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