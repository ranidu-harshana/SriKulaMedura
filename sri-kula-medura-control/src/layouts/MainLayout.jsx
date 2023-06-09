import TopNav from "../components/TopNav/TopNav";
import SideNav from "../components/SideNav/SideNav";
import {Outlet} from "react-router-dom";
import './MainLayout.css'
import {controlActivity} from "../context/ControlActivity";
import {useContext} from "react";

const MainLayout = (props) => {
	const {sideNavVisibility} = useContext(controlActivity)

	return (
		<div>
			<TopNav/>
			<div>
				<div className={sideNavVisibility?"open-side-nav":"closed-side-nav"}>
					<SideNav/>
				</div>
				<div className={sideNavVisibility?"content-wrapper":"content-wrapper-open-side-nav"}>
					<div className="content">
						<Outlet/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainLayout;