import useravatar from "../../assets/chat/patient-thumb-02.jpg";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import './Chat.css'
import ChatUserDetails from "./ChatUserDetails";
import RoundedImage from "../RoundedImage/RoundedImage";

const ChatBody = (props) => {
	const wHeight = window.innerHeight;

	return (<>
			<div className={"chat-body-container"} style={{minHeight: `${wHeight}px`}}>
				<div className="col-8 chat-content-wrap">
					<div className="chat-wrap-inner">
						<div className="chat-box">
							<div className="chats">
								<div className="chat chat-right">
									<div className="chat-body">
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>Hello. What can I do for you?</p>
												<span className="chat-time small">8:30 am</span>
											</div>
										</div>
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>Hello. What can I do for you?</p>
												<span className="chat-time">8:30 am</span>
											</div>
										</div>
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>Hello. What can I do for you?</p>
												<span className="chat-time">8:30 am</span>
											</div>
										</div>
									</div>
								</div>

								<div className="chat chat-left">
									<div className="chat-body">
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>I'm just looking around.</p>
												<p className={''}>Will you tell me something about yourself? Lorem ipsum
													dolor sit amet, consectetur adipisicing elit. Dolor dolorum ducimus
													eveniet excepturi hic, impedit incidunt inventore labore minus natus
													placeat quidem sequi tempora. Asperiores cumque nihil placeat vel
													voluptates.</p>
												<span className="chat-time">8:35 am</span>
											</div>
										</div>
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>Are you there? That time!</p>
												<span className="chat-time">8:40 am</span>
											</div>
										</div>
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>Are you there? That time!</p>
												<span className="chat-time">8:40 am</span>
											</div>
										</div>
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>Are you there? That time!</p>
												<span className="chat-time">8:40 am</span>
											</div>
										</div>
										<div className="chat-bubble">
											<div className="chat-content">
												<p className={''}>Are you there? That time!</p>
												<span className="chat-time">8:40 am</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={'chat-user-details'}>
				<div className="text-center">
					<RoundedImage userAvatar={useravatar}/>
					<h4 className={'mt-2'}>Sachini Deepashika</h4>
				</div>

				<div className="text-center">
					<FacebookIcon/> <TwitterIcon/> <GoogleIcon/>
				</div>

				<div className={'mt-4'}>
					<ChatUserDetails topic="Mobile No" value={"0776006495"}/>
					<ChatUserDetails topic="Email" value={"harshanaranidum@gmail.com"}/>
					<ChatUserDetails topic="Address" value={"172/1, Anikat Rd, Kinigama, Buthpitya"}/>
					<ChatUserDetails topic="Branches" value={"Colombo, Gampaha"}/>
				</div>
			</div>
		</>);
}

export default ChatBody;