import TopNav from "../components/TopNav/TopNav";
import {Outlet} from "react-router-dom";
import './Layout.css'
import Footer from "../components/Footer/Footer";

const MainLayout = (props) => {
	return (<>
		<TopNav/>
		<Outlet/>
		<Footer/>
	</>);
}

export default MainLayout;