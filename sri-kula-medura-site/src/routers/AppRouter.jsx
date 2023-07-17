import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import LoginPage from "../pages/Login/LoginPage";

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
		path:"/skm/login",
		element: <LoginPage />,
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