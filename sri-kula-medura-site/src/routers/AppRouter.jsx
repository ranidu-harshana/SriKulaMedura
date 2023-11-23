import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs/AboutUs";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import FaqPage from "../pages/Faq/FaqPage";
import ProductPage from "../pages/Product/ProductPage";
import Profile from "../pages/Profile/Profile";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";

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
		path:"payment-success",
		element: <PaymentSuccess />
	},
	{
		path:"skm",
		element: <MainLayout />,
		children: [
			{
				path:"aboutus",
				element: <AboutUs />
			},
			{
				path:"faq",
				element: <FaqPage />
			},
			{
				path:"product",
				element: <ProductPage />
			},
			{
				path:"profile/:billNo",
				element: <Profile />
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