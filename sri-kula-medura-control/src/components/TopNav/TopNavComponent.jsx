import DashboardIcon from "@mui/icons-material/Dashboard";
import DomainIcon from "@mui/icons-material/Domain";
import PeopleIcon from "@mui/icons-material/People";
import * as React from "react";
import {Notifications} from "@mui/icons-material";

const TopNavLinks = [
    {title: "Notification", Date:"", link: "/", icon: <Notifications/>},
    {title: "Inbox", link: "branch", Date:"", icon: <DomainIcon/>},
    {title: "Profile", icon: <PeopleIcon/>},
]

const TopNavComponent = () =>{

    return (
        <>
        <ul>
            {}
            <li></li>
        </ul>
        </>
    )
}

export default TopNavComponent;