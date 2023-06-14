import useravatar from '../../assets/chat/patient-thumb-02.jpg'
import {Link} from "react-router-dom";

const Chat = (props) => {
	return (
		<div>
			<div className="d-flex p-2" style={{backgroundColor: "white", borderBottom: "1px solid #eeee"}}>
				<div style={{width: "45px"}} className={`my-1 ms-3`}>
					<img src={useravatar} width="100%" alt="" className="rounded-circle"/>
				</div>
				<div className="mx-2 my-1">
					<Link to={``} className={`text-decoration-none`}>
						<span className="font-bold text-uppercase chat-user-name">Sachini Deepashika</span>
						<i className="typing-text ms-1">Typing...</i>
					</Link>
					<span className="last-seen">Last seen today at 7:50 AM</span>
				</div>
			</div>

			<div className="chat-content-wrap ">
				<div className="chat-wrap-inner">
					<div className="chat-box">
						<div className="chats">
							<div className="chat chat-right">
								<div className="chat-body">
									<div className="chat-bubble">
										<div className="chat-content">
											<p>Hello. What can I do for you?</p>
											<span className="chat-time">8:30 am</span>
										</div>
									</div>
								</div>
							</div>
							<div className="chat chat-right">
								<div className="chat-body">
									<div className="chat-bubble">
										<div className="chat-content">
											<p>Hello. What can I do for you?</p>
											<span className="chat-time">8:30 am</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Chat;