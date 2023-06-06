import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
	{
		path:"/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			// {
			// 	path: 'category',
			// 	element: <Category />
			// },
			// {
			// 	path: "login",
			// 	element: <Login />
			// },
			// {
			// 	element: <UserProtected />,
			// 	children: [
			// 		{
			// 			path: "user",
			// 			element: <User />
			// 		}
			// 	]
			// }
		]
	}
])
const AppRouter = (props) => {
	return (
		<RouterProvider router={router}/>
	);
}

export default AppRouter;