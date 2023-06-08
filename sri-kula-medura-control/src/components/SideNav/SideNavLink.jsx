import {useState} from "react";
import {Link} from "react-router-dom";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import * as React from "react";

const SideNavLink = ({children, title, link, submenu, icon, subMenuLinks, chatCount}) => {
	const [subMenuVisibility, setSubMenuVisibility] = useState(false);
	const handleVisibilityOfSubMenu = () => {
		setSubMenuVisibility(prevState => !prevState)
	}

	return (
		<>
			<li>
				<Link to={link} onClick={handleVisibilityOfSubMenu}>
					{icon} <span className={`ms-2 me-1`}>{title}</span>
					{submenu?<span className={!subMenuVisibility?"menu-arrow":"menu-arrow-down"}><span><KeyboardArrowRightIcon/></span></span>:null}
					{chatCount?<span className="badge badge-pill bg-primary float-right"> {chatCount} </span>:null}
				</Link>
				<ul className={subMenuVisibility?"sub-menu-visibility-block":"sub-menu-visibility-none"}>
					{subMenuLinks?.map((link, index) =>(
						<li key={index}>
							<Link to={link.link}>{link.title}</Link>
						</li>
					))}
				</ul>
			</li>
		</>
	)
}

export default SideNavLink