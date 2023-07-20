import './PageTopic.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {Link} from "react-router-dom";

const PageTopic = ({topic, breadcrumbs}) => {
	return (<div className={'topic'}>
			{topic}
			<Breadcrumb className={'breadcrumb'}>
				{breadcrumbs.map((breadcrumb, index) => !breadcrumb.active ?
					<Breadcrumb.Item key={index}>
						<Link to={`${breadcrumb.link}`}>{breadcrumb.title}</Link></Breadcrumb.Item> :
					<Breadcrumb.Item active key={index}>{breadcrumb.title}</Breadcrumb.Item>)}
			</Breadcrumb>
		</div>);
}

export default PageTopic;