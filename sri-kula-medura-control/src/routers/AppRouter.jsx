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
import ChatLayout from "../layouts/ChatLayout";
import Chat from "../components/Chat/Chat";
import CreateReservation from "../pages/Reservation/CreateReservation";
import AllReservations from "../pages/Reservation/AllReservations";
import ReservationProfile from "../pages/Reservation/ReservationProfile";

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
				path: "reservation",
				element: <CreateReservation />
			},
			{
				path: "allreservations",
				element: <AllReservations />
			},
			{
				path: "reservation/:id",
				element: <ReservationProfile />
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
		],
	},
	{
		path: "adminlogin",
		element: <AdminLogin />
	},
	{
		path: "userlogin",
		element: <UserLogin />
	},
	{
		path: "chat",
		element: <ChatLayout/>,
		children: [
			{
				index: true,
				element: <Chat />
			}
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