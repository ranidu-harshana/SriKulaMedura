import Header from "../components/Header/Header";
import SideNav from "../components/SideNav/SideNav";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";

const MainLayout = (props) => {
	return (
		<>
			<div className="flex flex-row">
				<Header />
			</div>
			<div className="flex flex-row">
				<div className="basis-1/4"><SideNav /></div>
				<div className="basis-3/4"><Outlet /></div>
			</div>
			<div className="flex flex-row">
				<Footer />
			</div>
		</>
	);
}

export default MainLayout;