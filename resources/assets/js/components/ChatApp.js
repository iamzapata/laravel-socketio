import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';

class ChatApp extends React.Component {

    render() {
        return (
            <div>
                <ChatMessages />
                <ChatInput />
            </div>
        );
    }

}
export default ChatApp