import TopNav from "../components/TopNav/TopNav";
import SideNav from "../components/SideNav/SideNav";
import {Outlet} from "react-router-dom";
import './MainLayout.css'

const MainLayout = (props) => {
	return (
		<>
			<TopNav/>
			<div>
				<div className={`side-nav`}>
					<SideNav/>
				</div>
				<div className={`content-wrapper`}>
					<div className="content">
						<Outlet/>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainLayout;