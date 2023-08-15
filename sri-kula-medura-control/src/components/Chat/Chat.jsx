import './Chat.css'
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

const Chat = (props) => {
	return (<>
			<ChatHeader/>
			<ChatBody/>
			{/*<ChatFooter stompClient={stompClient} userId={userId} setSenderMessages={setSenderMessages}/>*/}
		</>);
}

export default Chat;