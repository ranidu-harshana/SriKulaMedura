import "./SideNav.css";
import * as React from "react";
import SideNavLink from "./SideNavLink";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import {Divider} from "@mui/material";

const ChatSideNav = () => {
	let chats = null
	if (localStorage.getItem("loggedUserRole") === "ADMIN") {
		chats = [{
			title: "Danilka", link: "#", submenu: false, icon: <AccountCircleIcon/>, chatCount: 5, chatStatus: "online", userId: 17
		}, {
			title: "Harshana", link: "#", submenu: false, icon: <AccountCircleIcon/>, chatStatus: "online", userId: 19
		}, {
			title: "Sunil", link: "#", submenu: false, icon: <AccountCircleIcon/>, chatCount: 9, chatStatus: "offline", userId: 20
		}]
	} else {
		chats = [{
			title: "Admin", link: "#", submenu: false, icon: <AccountCircleIcon/>, chatCount: 5, chatStatus: "online", userId: 1
		}]
	}


	return (<>
		<div>
			<div className="sidebar-menu">
				<ul>
					<center><li className={'mt-3 mb-4'}><Link to={'/'}><HomeIcon/> <span className={`ms-2 me-1`}>Back to Home</span></Link></li></center>
					<Divider/><br/>
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