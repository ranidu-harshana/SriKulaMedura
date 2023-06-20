import './Chat.css'
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";

const Chat = (props) => {
	return (
		<>
			<div className={'col-12'}>
				<ChatHeader/>
				<ChatBody/>
				<ChatFooter/>
			</div>
		</>

	);
}

export default Chat;