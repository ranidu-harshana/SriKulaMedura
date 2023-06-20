import "./SideNav.css";
import * as React from "react";
import SideNavLink from "./SideNavLink";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const ChatSideNav = () => {
	const chats = [{
		title: "Ranidu Harshana", submenu: false, icon: <AccountCircleIcon/>, chatCount: 5, chatStatus: "online"
	}, {
		title: "Danilka Shalinda", submenu: false, icon: <AccountCircleIcon/>, chatStatus: "online"
	}, {
		title: "Sachindu Malshan", submenu: false, icon: <AccountCircleIcon/>, chatCount: 9, chatStatus: "offline"
	}, {title: "Sachini Deepashika", submenu: false, icon: <AccountCircleIcon/>, chatCount: 3, chatStatus: "online"},]

	return (<>
		<div>
			<div className="sidebar-menu">
				<ul>
					{chats.map((chat, index) => {
						if (chat.submenu) {
							return (<SideNavLink {...chat} key={index}/>)
						} else {
							return (<SideNavLink {...chat} key={index}/>)
						}
					})}
				</ul>
			</div>
		</div>
	</>);
}

export default ChatSideNav