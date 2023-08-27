import * as React from "react";
import {useContext, useRef, useState} from "react";
import {Link} from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {controlActivity} from "../../context/ControlActivity";
import {useDispatch} from "react-redux";
import {setChatReceiverId} from "../../store/slices/chatSlice";
import {webSocketConnection} from "../../context/WebSocketConnection";
import './SideNav.css'
import {handleWebSocketConnOnClickChatLink, highlightOrRemoveHighlightActiveLink} from "../../utils/helpers";
import {getUserById} from "../../repository/userRepository";
import {addOneUser} from "../../store/slices/userSlice";

let stompClient = null
const SideNavLink = ({title, link, submenu, icon, subMenuLinks, chatCount, chatStatus, userId, isChatLink}) => {
	const dispatcher = useDispatch()
	const linkRef = useRef()
	const [subMenuVisibility, setSubMenuVisibility] = useState(false);
	const {setSideNavVisibility, matchesMedia768} = useContext(controlActivity)
	const {senderMessages, setSenderMessages, setStompClient, setIsClickOnChatName} = useContext(webSocketConnection)
	const loggedUserId = localStorage.getItem("loggedUserId")

	const handleVisibilityOfSubMenu = () => {
		dispatcher(setChatReceiverId(linkRef.current?.dataset.userid))
		if (isChatLink) {
			getUserById(linkRef.current?.dataset.userid)
				.then((res) => {
					dispatcher(addOneUser({...res.data}))
				})
		}

		// for highlighting of removing highlight of active link
		highlightOrRemoveHighlightActiveLink(linkRef);

		// if it is a chat make the connection when clicked
		handleWebSocketConnOnClickChatLink(stompClient, isChatLink, setIsClickOnChatName, setStompClient, loggedUserId, senderMessages, setSenderMessages);

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