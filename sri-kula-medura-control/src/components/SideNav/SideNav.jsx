import "./SideNav.css";
import * as React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DomainIcon from '@mui/icons-material/Domain';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import FlagIcon from '@mui/icons-material/Flag';
import SideNavLink from "./SideNavLink";

const SideNav = () => {
	const navLinks = [
		{title: "Dashboard", link: "/", submenu: false, icon: <DashboardIcon/>},
		{title: "Branch", link: "branch", submenu: false, icon: <DomainIcon/>},
		{title: "Customers", link: "#", submenu: false, icon: <PeopleIcon/>},
		{title: "Reservations", link: "#", submenu: true, icon: <DomainIcon/>, subMenuLinks: [
				{title: "Reservations List", link: "allreservations"}, {title: "Add Reservation", link: "createreservation"}
			]
		},
		{title: "Item", link: "#", submenu: true, icon: <InventoryIcon/>, subMenuLinks: [
				{title: "Inventory", link: "inventory"},
				{title: "Create Item", link: "createitem"},
				{title: "Item Category", link: "itemcategory"}
			]
		},
		{title: "Employees", link: "#", submenu: true, icon: <AccountCircleIcon/>, subMenuLinks: [
				{title: "Employees List", link: "employeelist"},
				{title: "Create Employee", link: "createemployee"}
			]
		},
		{title: "Chat", link: "chat", submenu: false, icon: <QuestionAnswerIcon/>, chatCount: 5, isChat: true},
		{title: "Reports", link: "#", submenu: true, icon: <FlagIcon/>, subMenuLinks: [
				{title: "Wedding Reservation"},
				{title: "Reserved Items"},
				{title: "Dress Frequency"},
				{title: "Measurement Report"},
				{title: "Account Summary"},
				{title: "Cost Summary"}
			]
		},
	]

	return (<>
		<div>
			<div className="sidebar-menu">
				<ul>
					{navLinks.map((navLink, index) => {
						if (navLink.submenu) {
							return (<SideNavLink {...navLink} key={index}/>)
						} else {
							return (<SideNavLink {...navLink} key={index}/>)
						}
					})}
				</ul>
			</div>
		</div>
	</>);
}

export default SideNav