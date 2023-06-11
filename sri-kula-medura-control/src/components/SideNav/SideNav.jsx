import "./SideNav.css";
import * as React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import DomainIcon from '@mui/icons-material/Domain';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import SideNavLink from "./SideNavLink";

const SideNav = () => {
	const navLinks = [
		{title: "Dashboard", link: "/", submenu: false, icon: <DashboardIcon/>},
		{title: "Branch", link: "branch", submenu: false, icon: <DomainIcon/>},
		{title: "Customers", submenu: false, icon: <PeopleIcon/>},
		{
			title: "Reservations",
			submenu: true,
			icon: <DomainIcon/>,
			subMenuLinks: [{title: "Reservations List"}, {title: "Add Reservation"}]
		},
		{
			title: "Item",
			submenu: true,
			icon: <InventoryIcon/>,
			subMenuLinks: [{title: "Inventory", link: "inventory"}, {
				title: "Create Item",
				link: "createitem"
			}, {title: "Item Category", link: "itemcategory"}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},
		{
			title: "Employees",
			submenu: true,
			icon: <AccountCircleIcon/>,
			subMenuLinks: [{title: "Employees List", link: "employeelist"}, {
				title: "Create Employee",
				link: "createemployee"
			}]
		},

		{title: "Chat", submenu: false, icon: <QuestionAnswerIcon/>, chatCount: 5}
	]

	return (
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
	);
}

export default SideNav