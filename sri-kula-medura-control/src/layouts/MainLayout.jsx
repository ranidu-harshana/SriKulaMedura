import Header from "../components/Header/Header";
import SideNav from "../components/SideNav/SideNav";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";

const MainLayout = (props) => {
	return (
		<>
			<Header />
			<SideNav />
			<Outlet />
			<Footer />
		</>
	);
}

export default MainLayout;