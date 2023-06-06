import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Header/Header";
import {Login} from "@mui/icons-material";
import UserProtected from "./UserProtected";
import User from "../Pages/User/User";
import Category from "../Pages/Category/Category";

const router = createBrowserRouter([
	// {
	// 	path:"/",
	// 	element: <MainLayout />,
	// 	children: [
	// 		{
	// 			index: true,
	// 			element: <Home />
	// 		},
	// 		{
	// 			path: 'category',
	// 			element: <Category />
	// 		},
	// 		{
	// 			path: "login",
	// 			element: <Login />
	// 		},
	// 		{
	// 			element: <UserProtected />,
	// 			children: [
	// 				{
	// 					path: "user",
	// 					element: <User />
	// 				}
	// 			]
	// 		}
	// 	]
	// }
])
const AppRouter = (props) => {
	return (
		<RouterProvider router={router}/>
	);
}

export default AppRouter;