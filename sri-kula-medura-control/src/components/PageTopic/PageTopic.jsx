import './PageTopic.css'
import {Link} from "react-router-dom";
import {Breadcrumbs} from "@mui/material";
import Typography from "@mui/material/Typography";

const PageTopic = ({topic, breadcrumbs}) => {
	return (<div className={'topic'}>
		{topic}
		<Breadcrumbs aria-label="breadcrumb">
			{breadcrumbs.map((breadcrumb, index) => !breadcrumb.active ?
				<Link key={index} to={`${breadcrumb.link}`} underline="hover"
				      color="inherit">{breadcrumb.title}</Link> :
				<Typography key={index} color="text.primary">{breadcrumb.title}</Typography>)}
		</Breadcrumbs>
	</div>);
}

export default PageTopic;