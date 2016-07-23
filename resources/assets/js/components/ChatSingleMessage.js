
class ChatSingleMessage extends React.Component {

    render() {
        return (
            <li>
                <span>{this.props.message}</span>
                <span>{this.props.time}</span>
            </li>
        );
    }
}
export default  ChatSingleMessage