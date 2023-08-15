import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useContext, useEffect, useState} from "react";
import {controlActivity} from "../../context/ControlActivity";
import {useSelector} from "react-redux";
import {SelectChatReceiverId} from "../../store/slices/chatSlice";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient = null
const ChatFooter = (props) => {
	const {sideNavVisibility, matchesMedia768} = useContext(controlActivity)
	const [message, setMessage] = useState('')
	const chatReceiverId = useSelector(SelectChatReceiverId)
	const userId = localStorage.getItem("loggedUserId")

	useEffect(()=>connect(), [])

	const connect =()=>{
		const Sock = new SockJS('http://localhost:8080/ws');
		stompClient = Stomp.over(Sock)
		stompClient.connect({},onConnected, onError);
	}

	const onConnected = () => {
		console.log("Connected")
	}

	const onMessageReceived = (payload) => {
		const payloadData = JSON.parse(payload.body);
		console.log(payloadData)
	}

	const onError = () => {

	}

	const sendMessage = () => {
		console.log(stompClient)
		if (stompClient) {
			const chatMessage = {
				message,
				senderId: userId,
				receiverId: chatReceiverId
			};
			stompClient.subscribe('/user/'+userId+'/private', onMessageReceived);
			stompClient.send("/app/message", {}, JSON.stringify(chatMessage));
		}
	}

	if (matchesMedia768) {
		return (<>
			<div className="row">
				<div className="chat-footer" style={{padding: "10px"}}>
					<div className="d-flex inner-footer" style={{marginRight: `${!sideNavVisibility ? "230px" : "0"}`}}>
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
	return (<>
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

export default ChatFooter;