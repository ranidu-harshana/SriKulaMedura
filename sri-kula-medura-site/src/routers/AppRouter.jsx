import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

const router = createBrowserRouter([
	{
		path:"/",
		element: <Home />,
	},
	{
		path:"/skm",
		element: <Home />,
	},
	{
		path:"/login",
		element: <LoginPage />,
	},
	{
		path:"/register",
		element: <RegisterPage />,
	},
	{
		path:"skm",
		element: <MainLayout />,
		children: [
			{
				path:"aboutus",
				element: <AboutUs />
			},
		],
	}
])
const AppRouter = (props) => {
	return (
		<RouterProvider router={router}/>
	);
}

export default AppRouter;