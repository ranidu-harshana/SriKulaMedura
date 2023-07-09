import useravatar from "../../assets/chat/patient-thumb-02.jpg";
import {Link} from "react-router-dom";
import RoundedImage from "../RoundedImage/RoundedImage";

const ChatHeader = (props) => {
	return (<>
		<div className="d-flex p-2 chat-header">
			<div style={{width: "45px"}} className={`my-1 ms-3`}>
				<RoundedImage width={100} userAvatar={useravatar}/>
			</div>
			<div className="mx-2 my-1">
				<Link to={``} className={`text-decoration-none`}>
					<span className="font-bold text-uppercase chat-user-name">Sachini Deepashika</span>
					<i className="typing-text ms-1">Typing...</i>
				</Link>
				<span className="last-seen">Last seen today at 7:50 AM</span>
			</div>
		</div>
	</>);
}

export default ChatHeader;