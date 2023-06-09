import * as React from "react";
import {useContext, useState} from "react";
import {Link} from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {controlActivity} from "../../context/ControlActivity";

const SideNavLink = ({children, title, link, submenu, icon, subMenuLinks, chatCount}) => {
	const [subMenuVisibility, setSubMenuVisibility] = useState(false);
	const {setSideNavVisibility, matchesMedia768} = useContext(controlActivity)
	const handleVisibilityOfSubMenu = () => {
		console.log(subMenuVisibility)
		setSideNavVisibility(matchesMedia768 && !submenu)
		setSubMenuVisibility(prevState => !prevState)
	}

	return (
		<>
			<li>
				<Link to={link} onClick={handleVisibilityOfSubMenu} onOu>
					{icon} <span className={`ms-2 me-1`}>{title}</span>
					{submenu ? <span className={subMenuVisibility ? "menu-arrow-down" : "menu-arrow"}><span><KeyboardArrowRightIcon/></span></span> : null}
					{chatCount ? <span className="badge badge-pill bg-primary float-right"> {chatCount} </span> : null}
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