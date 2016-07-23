
class ChatSendForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.onChange = this.onChange.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    onChange(event) {
        this.setState({ text: event.target.value });
    }

    sendMessage(event) {
        event.preventDefault();
        this.props.onSendMessage(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        let text = this.state.text;

        return (
            <form onSubmit={this.sendMessage}>
                <input value={text} onChange={this.onChange} placeholder="Write something..."/>
                <button>Send</button>
            </form>
        );
    }

}
export default  ChatSendForm