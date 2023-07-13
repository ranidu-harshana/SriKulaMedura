import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = (props) => {
	const user = true
	return (
		user?<Outlet />:<Navigate to="/adminlogin" />
	);
}

export default ProtectedRoute;