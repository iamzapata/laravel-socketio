import ChatText from './ChatText';
import ChatSend from './ChatSend';

class ChatInput extends React.Component {

    render() {
        return (
            <div>
                <ChatText/>
                <ChatSend/>
            </div>
        );
    }

}
export default  ChatInput