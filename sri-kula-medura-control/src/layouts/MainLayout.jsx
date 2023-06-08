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
				<div className={`side-nav ${sideNavVisibility?"d-block":"d-none d-sm-none d-md-block"}`}>
					<SideNav/>
				</div>
				<div className={sideNavVisibility?"content-wrapper-open-side-nav":"content-wrapper"}>
					<div className="content">
						<Outlet/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MainLayout;