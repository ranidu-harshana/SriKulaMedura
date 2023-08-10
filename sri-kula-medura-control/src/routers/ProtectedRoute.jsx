import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = (props) => {
	const accessToken = localStorage.getItem("accessToken");
	const user = accessToken != null
	return (
		user?<Outlet />:<Navigate to="/adminlogin" />
	);
}

export default ProtectedRoute;