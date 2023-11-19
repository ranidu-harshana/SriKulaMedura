import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Inventory from "../pages/Item/Inventory";
import ItemCategory from "../pages/Item/ItemCategory";
import CreateItem from "../pages/Item/CreateItem";
import Branch from "../pages/Branch/Branch";
import CreateEmployee from "../pages/Employee/CreateEmployee";
import EmployeesList from "../pages/Employee/EmployeesList";
import Test from "../pages/Employee/Test";
import ControlActivity from "../context/ControlActivity";
import AdminLogin from "../components/Login/AdminLogin";
import UserLogin from "../components/Login/UserLogin";
import ChatLayout from "../layouts/ChatLayout";
import Chat from "../components/Chat/Chat";
import CreateReservation from "../pages/Reservation/CreateReservation";
import AllReservations from "../pages/Reservation/AllReservations";
import ReservationProfile from "../pages/Reservation/ReservationProfile";
import ProtectedRoute from "./ProtectedRoute";
import WebSocketConnection from "../context/WebSocketConnection";
import PaymentPage from "../pages/Payment/PaymentPage";
import WeddingReservationReport from "../pages/Reports/WeddingReservationReport";
import PaymentSuccessPage from "../pages/Payment/PaymentSuccessPage";
import PaymentCancelPage from "../components/Payment/PaymentCancelPage";

const router = createBrowserRouter([
	{
		path:"/",
		element: <MainLayout />,
		children: [
			{
				element: <ProtectedRoute />,
				children: [
					{
						index: true,
						element: <Home />
					},
					{
						path: 'fuck',
						element: <Test />
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
						path: "createreservation",
						element: <CreateReservation />
					},
					{
						path: "reservation/:id",
						element: <ReservationProfile />
					},
					{
						path: "report/",
						children: [
							{
								path: "reservations",
								element: <WeddingReservationReport />
							}
						]
					}
				]
			}
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
				element: <ProtectedRoute />,
				children: [
					{
						index: true,
						element: <Chat />
					}
				]
			}
		]
	},
	{
		path: "skm/payment/:id",
		element: <PaymentPage/>
	},
	{
		path: "skm/payment/success",
		element: <PaymentSuccessPage/>
	},
	{
		path: "skm/payment/cancel",
		element: <PaymentCancelPage/>
	}
])
const AppRouter = (props) => {
	return (
		<ControlActivity>
			<WebSocketConnection>
				<RouterProvider router={router}/>
			</WebSocketConnection>
		</ControlActivity>
	);
}

export default AppRouter;