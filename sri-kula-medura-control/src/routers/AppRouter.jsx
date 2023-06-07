import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Inventory from "../pages/Item/Inventory";
import ItemCategory from "../pages/Item/ItemCategory";
import CreateItem from "../pages/Item/CreateItem";
import Branch from "../pages/Branch/Branch";
import CreateEmployee from "../pages/Employee/CreateEmployee";
import EmployeesList from "../pages/Employee/EmployeesList";

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
		<RouterProvider router={router}/>
	);
}

export default AppRouter;