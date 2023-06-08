import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Inventory from "../pages/Item/Inventory";
import ItemCategory from "../pages/Item/ItemCategory";
import CreateItem from "../pages/Item/CreateItem";
import Branch from "../pages/Branch/Branch";
import CreateEmployee from "../pages/Employee/CreateEmployee";
import EmployeesList from "../pages/Employee/EmployeesList";
import ControlActivity from "../context/ControlActivity";
import AdminLogin from "../components/Login/AdminLogin";
import UserLogin from "../components/Login/UserLogin";

const router = createBrowserRouter([
	{
		path:"/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />
			},
			{
				path: 'inventory',
				element: <Inventory />
			},
			{
				path: "itemcategory",
				element: <ItemCategory />
			},
			{
				path: "createitem",
				element: <CreateItem />
			},
			{
				path: "branch",
				element: <Branch />
			},
			{
				path: "createemployee",
				element: <CreateEmployee />
			},
			{
				path: "employeelist",
				element: <EmployeesList />
			},
			{
				path: "adminlogin",
				element: <AdminLogin />
			},
			{
				path: "userlogin",
				element: <UserLogin />
			},
			// {
			// 	element: <UserProtected />,
			// 	children: [
			// 		{
			// 			path: "user",
			// 			element: <Employee />
			// 		}
			// 	]
			// }
		]
	}
])
const AppRouter = (props) => {
	return (
		<ControlActivity>
			<RouterProvider router={router}/>
		</ControlActivity>
	);
}

export default AppRouter;