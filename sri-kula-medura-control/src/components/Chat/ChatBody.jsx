import useravatar from "../../assets/chat/patient-thumb-02.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './Chat.css'
import ChatUserDetails from "./ChatUserDetails";
import RoundedImage from "../RoundedImage/RoundedImage";
import {SelectChatMessages, SelectChatReceiverId} from "../../store/slices/chatSlice";
import {useSelector} from "react-redux";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useMemo, useState} from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient = null
const ChatBody = () => {
	const wHeight = window.innerHeight;
	const chatMessages = useSelector(SelectChatMessages)
	const userId = localStorage.getItem("loggedUserId")
	const [connected, setConnected] = useState(false)
	const [senderMessages, setSenderMessages] = useState(new Map())
	const [message, setMessage] = useState('')
	const chatReceiverId = useSelector(SelectChatReceiverId)

	console.log(senderMessages)
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

	useMemo(() => {
		if (stompClient !== null && connected) {
			stompClient.subscribe('/user/' + userId + '/private', (payload) => {
				const payloadData = JSON.parse(payload.body)
				const senderIdOfReceivedMsg = parseInt(payloadData.senderId)
				if (senderMessages.get("chatId"+senderIdOfReceivedMsg)) {
					senderMessages.get("chatId"+senderIdOfReceivedMsg).push(payloadData)
					setSenderMessages(new Map(senderMessages))
				} else {
					const list = []
					list.push(payloadData)
					senderMessages.set("chatId"+senderIdOfReceivedMsg, list)
					setSenderMessages(new Map(senderMessages))
				}
			});
		} else {
			const Sock = new SockJS('http://localhost:8080/ws');
			stompClient = Stomp.over(Sock)
			stompClient.connect({}, () => {
				setConnected(true)
			}, () => {
				console.log("Server Error")
			});
		}
	}, [connected])

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

			<div className="row">
				<div className="chat-footer" style={{padding: "10px"}}>
					<div className="d-flex inner-footer" style={{marginRight: "230px"}}>
						<TextareaAutosize className={"form-control"} value={message} onChange={(e)=>setMessage(e.target.value)}/>
						<span className="input-group-append">
							<Button variant="contained" sx={{height: "100%", border: "none"}} onClick={sendMessage}>
								<SendIcon/>
							</Button>
						</span>
					</div>
				</div>
			</div>
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