import {Outlet} from "react-router-dom";
import './Layout.css'
import Footer from "../components/Footer/Footer";
import TopNav from "../components/TopNav/TopNav";

const MainLayout = (props) => {
	return (<>
		<TopNav/>
		<Outlet/>
		<Footer/>
	</>);
}

export default MainLayout;