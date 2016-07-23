import ChatSingleMessage from './ChatSingleMessage';

class ChatMessages extends React.Component {

    render() {
        return(
            <div>
                <h1>Messages display here.</h1>
                <ul>
                    { this.props.messages.map(function(data, index) {
                        return <ChatSingleMessage key={index} message={data.message} time={data.time}/>
                    }) }
                </ul>
            </div>
        )
    }

}
export default  ChatMessages