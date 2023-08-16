import useravatar from "../../assets/chat/patient-thumb-02.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './Chat.css'
import ChatUserDetails from "./ChatUserDetails";
import RoundedImage from "../RoundedImage/RoundedImage";
import {SelectChatReceiverId} from "../../store/slices/chatSlice";
import {useSelector} from "react-redux";
import {useContext, useEffect, useState} from "react";
import {webSocketConnection} from "../../context/WebSocketConnection";
import ChatFooter from "./ChatFooter";
import {getAllMessagesBySenderReceiver} from "../../repository/chatRepository";

const ChatBody = () => {
	const wHeight = window.innerHeight;
	const userId = localStorage.getItem("loggedUserId")
	const {stompClient, senderMessages, setSenderMessages, isClickOnChatName, setIsClickOnChatName} = useContext(webSocketConnection)
	const [message, setMessage] = useState('')
	const chatReceiverId = useSelector(SelectChatReceiverId)
	
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
	}, [chatReceiverId, isClickOnChatName, senderMessages, setIsClickOnChatName, setSenderMessages, userId])

	const sendMessage = () => {
		if (stompClient) {
			const chatMessage = {
				message,
				senderId: userId,
				receiverId: chatReceiverId
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
					<h4 className={'mt-2'}>Sachini Deepashika</h4>
				</div>

				<div className="text-center">
					<FacebookIcon/> <TwitterIcon/> <GoogleIcon/>
				</div>

				<div className={'mt-4'}>
					<ChatUserDetails topic="Mobile No" value={"0776006495"}/>
					<ChatUserDetails topic="Email" value={"harshanaranidum@gmail.com"}/>
					<ChatUserDetails topic="Address" value={"172/1, Anikat Rd, Kinigama, Buthpitya"}/>
					<ChatUserDetails topic="Branches" value={"Colombo, Gampaha"}/>
				</div>
			</div>

			<ChatFooter message={message} setMessage={setMessage} sendMessage={sendMessage}/>
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
			<span className="chat-time small">8:30 am</span>
		</div>
	</div>
)