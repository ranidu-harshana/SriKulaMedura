import { Navigate, Outlet } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoute = (props) => {
	const accessToken = localStorage.getItem("accessToken");

	if (accessToken) {
		try {
			const decoded = jwt_decode(accessToken);
			if (Date.now() > (decoded.exp * 1000)) {
				localStorage.removeItem("accessToken");
			}
		} catch (error) {
			localStorage.removeItem("accessToken");
		}
	}

	const user = accessToken != null;

	return (
		user ? <Outlet /> : <Navigate to="/adminlogin" />
	);
}

export default ProtectedRoute;
