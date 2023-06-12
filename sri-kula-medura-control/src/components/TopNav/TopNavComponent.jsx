import DashboardIcon from "@mui/icons-material/Dashboard";
import DomainIcon from "@mui/icons-material/Domain";
import PeopleIcon from "@mui/icons-material/People";
import * as React from "react";
import {Notifications} from "@mui/icons-material";
import {Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Typography from "@mui/material/Typography";



const TopNavComponent = () =>{
    const NavComponentDetails = [
        {title: "Notification", Date:"", link: "/", icon: <Notifications/>},
        {title: "Inbox", link: "branch", Date:"", icon: <DomainIcon/>},
        {title: "Profile", icon: <PeopleIcon/>},
    ]
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    Ali Connors
                                </Typography>
                                {" — I'll be in your neighborhood doing errands this…"}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </>
    )
}

export default TopNavComponent;