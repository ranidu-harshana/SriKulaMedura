import * as React from "react";
import {useContext, useRef, useState} from "react";
import {Link} from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {controlActivity} from "../../context/ControlActivity";
import {useDispatch} from "react-redux";
import {setChatReceiverId} from "../../store/slices/chatSlice";
import {webSocketConnection} from "../../context/WebSocketConnection";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

let stompClient = null
const SideNavLink = ({children, title, link, submenu, icon, subMenuLinks, chatCount, chatStatus, userId, isChat, isChatLink}) => {
	const dispatcher = useDispatch()
	const linkRef = useRef()
	const [subMenuVisibility, setSubMenuVisibility] = useState(false);
	const {setSideNavVisibility, matchesMedia768} = useContext(controlActivity)
	const {senderMessages, setSenderMessages, setStompClient, setIsClickOnChatName} = useContext(webSocketConnection)
	const loggedUserId = localStorage.getItem("loggedUserId")

	const handleVisibilityOfSubMenu = () => {
		dispatcher(setChatReceiverId(linkRef.current?.dataset.userid))
		if(isChatLink) {
			setIsClickOnChatName(true)
			const Sock = new SockJS('http://localhost:8080/ws');
			stompClient = Stomp.over(Sock)
			setStompClient(stompClient)
			stompClient.connect({}, () => {
				stompClient.subscribe('/user/' + loggedUserId + '/private', (payload) => {
					const payloadData = JSON.parse(payload.body)
					const senderIdOfReceivedMsg = parseInt(payloadData.senderId)
					if (senderMessages.get("chatId"+senderIdOfReceivedMsg)) {
						senderMessages.get("chatId"+senderIdOfReceivedMsg).push(payloadData)
						setSenderMessages(new Map(senderMessages))
					} else {
						const list = []
						list.push(payloadData)
						senderMessages.set("chatId" + senderIdOfReceivedMsg, list)
						setSenderMessages(new Map(senderMessages))
					}
				});
			}, () => {
				console.log("Server Error")
			})
		}
		setSideNavVisibility(matchesMedia768 && !submenu)
		setSubMenuVisibility(prevState => !prevState)
	}

	return (<>
		<li>
			<Link to={link} onClick={handleVisibilityOfSubMenu} ref={linkRef} data-userid={userId}>
				{icon} <span className={`ms-2 me-1`}>{title.substring(0, 16)}</span>
				{submenu ? <span
					className={subMenuVisibility ? "menu-arrow-down" : "menu-arrow"}><span><KeyboardArrowRightIcon/></span></span> : null}
				{chatStatus ? <span className="rounded-5" style={{
					position: "absolute",
					marginLeft: "20px",
					backgroundColor: `${chatStatus === "online" ? "red" : "greenyellow"}`,
					width: "6px",
					height: "6px"
				}}></span> : null}
				{chatCount ? <span className="badge badge-pill bg-danger chat-count"> {chatCount} </span> : null}
			</Link>
			<ul className={subMenuVisibility ? "sub-menu-visibility-block" : "sub-menu-visibility-none"}>
				{subMenuLinks?.map((link, index) => (<li key={index} onClick={() => setSideNavVisibility(true)}>
					<Link to={link.link}>{link.title}</Link>
				</li>))}
			</ul>
		</li>
	</>)
}

export default SideNavLink