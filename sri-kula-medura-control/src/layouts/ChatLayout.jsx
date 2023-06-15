import TopNav from "../components/TopNav/TopNav";
import {Outlet} from "react-router-dom";
import {useContext} from "react";
import {controlActivity} from "../context/ControlActivity";

const ChatLayout = (props) => {
	const {sideNavVisibility, setSideNavVisibility, matchesMedia768} = useContext(controlActivity)

	return (
		<div >
			<TopNav/>
			<div >
				<div className={sideNavVisibility?"open-side-nav":"closed-side-nav"} style={{boxShadow: "none", borderRight: "1px solid #eee"}}>

				</div>
				<div className={sideNavVisibility?"chat-content-wrapper":"chat-content-wrapper-open-side-nav"} style={{borderLeft: "1px solid #eeee"}} onClick={() => setSideNavVisibility(matchesMedia768)}>
					<div>
						<Outlet/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChatLayout;