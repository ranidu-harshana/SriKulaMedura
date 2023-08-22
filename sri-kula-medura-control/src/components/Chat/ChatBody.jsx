import useravatar from "../../assets/chat/patient-thumb-02.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './Chat.css'
import ChatUserDetails from "./ChatUserDetails";
import RoundedImage from "../RoundedImage/RoundedImage";
import {SelectChatReceiverId} from "../../store/slices/chatSlice";
import {useSelector} from "react-redux";
import {useContext, useEffect, useRef, useState} from "react";
import {webSocketConnection} from "../../context/WebSocketConnection";
import ChatFooter from "./ChatFooter";
import {getAllMessagesBySenderReceiver} from "../../repository/chatRepository";
import {selectByIdUser} from "../../store/slices/userSlice";

const ChatBody = () => {
	const wHeight = window.innerHeight - 100;
	const userId = localStorage.getItem("loggedUserId")
	const {stompClient, senderMessages, setSenderMessages, isClickOnChatName, setIsClickOnChatName} = useContext(webSocketConnection)
	const [message, setMessage] = useState('')
	const chatReceiverId = useSelector(SelectChatReceiverId)
	const user = useSelector((store)=>selectByIdUser(store, chatReceiverId))
	const bottomEl = useRef(null);

	useEffect(()=>{
		const getMessageFromDb = () => {
			getAllMessagesBySenderReceiver(userId, chatReceiverId)
				.then((response) => {
					const payloadData = response.data;
					if (senderMessages.get("chatId"+chatReceiverId)) {
						payloadData.forEach((data) => senderMessages.get("chatId"+chatReceiverId).push(data))
						setSenderMessages(new Map(senderMessages))
					} else {
						senderMessages.set("chatId" + chatReceiverId, payloadData)
						setSenderMessages(new Map(senderMessages))
					}
					setIsClickOnChatName(false)
				})
		}
		if (isClickOnChatName) {
			if (!senderMessages.get("chatId"+chatReceiverId)) {
				getMessageFromDb()
			}
		}
		scrollToBottom()
	}, [chatReceiverId, isClickOnChatName, senderMessages, setIsClickOnChatName, setSenderMessages, userId])

	const sendMessage = () => {
		setMessage("")
		if (stompClient) {
			const time = new Date();
			const chatMessage = {
				message,
				senderId: userId,
				receiverId: chatReceiverId,
				time: time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
			};
			if (senderMessages.get("chatId"+chatReceiverId)) {
				senderMessages.get("chatId"+chatReceiverId).push(chatMessage)
				setSenderMessages(new Map(senderMessages))
			} else {
				const list = []
				list.push(chatMessage)
				senderMessages.set("chatId"+chatReceiverId, list)
				setSenderMessages(new Map(senderMessages))
			}
			stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
		}
	}
	const scrollToBottom = () => {
		bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (<>
			<div className={"chat-body-container"} style={{minHeight: `${wHeight}px`}}>
				<div className="col-8 chat-content-wrap">
					<div className="chat-wrap-inner">
						<div className="chat-box">
							<div className="chats">
								{<ChatBubbleGenerator messages={senderMessages?.get("chatId"+chatReceiverId)} userId={userId}/>}
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={'chat-user-details'}>
				<div className="text-center">
					<RoundedImage userAvatar={useravatar}/>
					<h4 className={'mt-2'}>{user?.name}</h4>
				</div>

				<div className="text-center">
					<FacebookIcon/> <TwitterIcon/> <GoogleIcon/>
				</div>

				<div className={'mt-4'}>
					<ChatUserDetails topic="Mobile No" value={user?.name}/>
					<ChatUserDetails topic="Email" value={user?.email}/>
					<ChatUserDetails topic="Address" value={user?.address}/>
					<ChatUserDetails topic="Branches" value={''}/>
				</div>
			</div>

			<ChatFooter message={message} setMessage={setMessage} sendMessage={sendMessage}/>
			<div ref={bottomEl}></div>
		</>);
}

export default ChatBody;

const ChatBubbleGenerator = ({messages, userId}) => {
	if (messages) {
		return messages.map((message, index) => <ChatBubble message={message} userId={userId} key={index}/>)
	}
}

const ChatBubble = ({message, userId}) => (
	<div className={`chat-bubble chat-${'chatId'+message.senderId === 'chatId'+userId?'right':'left'}`}>
		<div className="chat-content">
			<p className={''}>{message.message}</p>
			<span className="chat-time small">{message.time}</span>
		</div>
	</div>
)