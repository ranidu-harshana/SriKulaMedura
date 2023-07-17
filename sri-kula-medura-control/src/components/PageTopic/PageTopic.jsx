import './PageTopic.css'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const PageTopic = ({topic, breadcrumbs}) => {
	return (<div className={'topic'}>
			{topic}
			<Breadcrumb className={'breadcrumb'}>
				{breadcrumbs.map((breadcrumb, index) => !breadcrumb.active ?
					<Breadcrumb.Item href={`${breadcrumb.link}`} key={index}>{breadcrumb.title}</Breadcrumb.Item> :
					<Breadcrumb.Item active key={index}>{breadcrumb.title}</Breadcrumb.Item>)}
			</Breadcrumb>
		</div>);
}

export default PageTopic;