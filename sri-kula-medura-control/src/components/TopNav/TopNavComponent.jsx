import * as React from "react";
import { Divider, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import {Notifications} from "@mui/icons-material";

const TopNavLinks = [
    {
        type: "Notification",
        title: "Notification",
        Date: "",
        link: "/",
        icon: <Notifications />,
    },
];

function ImageIcon() {
    return null;
}

const TopNavComponent = () => {
    return (
        <div>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {TopNavLinks.map((navLink, index) => {
                    if (navLink.type === "Notification") {
                        return (
                            <React.Fragment key={index}>
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
                            </React.Fragment>
                        );
                    } else if (navLink.type === "Inbox") {
                        return (
                            <React.Fragment key={index}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <ImageIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={navLink.title} secondary={navLink.Date} />
                                </ListItem>
                                <Divider variant="inset" component="li" />
                            </React.Fragment>
                        );
                    } else {
                        return null;
                    }
                })}
            </List>
        </div>
    );
};

export default TopNavComponent;
