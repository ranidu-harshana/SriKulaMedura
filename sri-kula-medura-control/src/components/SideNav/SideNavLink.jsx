import * as React from "react";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {controlActivity} from "../../context/ControlActivity";

const SideNavLink = ({children, title, link, submenu, icon, subMenuLinks, chatCount, chatStatus}) => {
	const [subMenuVisibility, setSubMenuVisibility] = useState(false);
	const {setSideNavVisibility, matchesMedia768} = useContext(controlActivity)
	const handleVisibilityOfSubMenu = () => {
		setSideNavVisibility(matchesMedia768 && !submenu)
		setSubMenuVisibility(prevState => !prevState)
	}

	return (
		<>
			<li>
				<Link to={link} onClick={handleVisibilityOfSubMenu}>
					{icon} <span className={`ms-2 me-1`}>{title.substring(0, 16)}</span>
					{submenu ? <span className={subMenuVisibility ? "menu-arrow-down" : "menu-arrow"}><span><KeyboardArrowRightIcon/></span></span> : null}
					{chatStatus ? <span className="rounded-5" style={{position: "absolute", marginLeft: "20px", backgroundColor: `${chatStatus==="online"?"red":"greenyellow"}`, width: "6px", height: "6px"}}></span> : null}
					{chatCount ? <span className="badge badge-pill bg-danger chat-count"> {chatCount} </span> : null}
				</Link>
				<ul className={subMenuVisibility ? "sub-menu-visibility-block" : "sub-menu-visibility-none"}>
					{subMenuLinks?.map((link, index) => (
						<li key={index} onClick={() =>
							setSideNavVisibility(true)
						}>
							<Link to={link.link}>{link.title}</Link>
						</li>
					))}
				</ul>
			</li>
		</>
	)
}

export default SideNavLink