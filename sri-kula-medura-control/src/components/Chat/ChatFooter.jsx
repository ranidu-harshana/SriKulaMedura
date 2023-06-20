import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import {useContext} from "react";
import {controlActivity} from "../../context/ControlActivity";

const ChatFooter = (props) => {
	const {sideNavVisibility, matchesMedia768} = useContext(controlActivity)
	console.log(sideNavVisibility, matchesMedia768)

	if (matchesMedia768) {
		return (<>
			<div className="row">
				<div className="chat-footer" style={{padding: "10px"}}>
					<div className="d-flex inner-footer" style={{marginRight: `${!sideNavVisibility ? "230px" : "0"}`}}>
						<TextareaAutosize className={"form-control"}/>
						<span className="input-group-append">
						<Button variant="contained" sx={{height: "100%", border: "none"}}>
							<SendIcon/>
						</Button>
					</span>
					</div>
				</div>
			</div>
		</>);
	}
	return (<>
		<div className="row">
			<div className="chat-footer" style={{padding: "10px"}}>
				<div className="d-flex inner-footer" style={{marginRight: "230px"}}>
					<TextareaAutosize className={"form-control"}/>
					<span className="input-group-append">
						<Button variant="contained" sx={{height: "100%", border: "none"}}>
							<SendIcon/>
						</Button>
					</span>
				</div>
			</div>
		</div>
	</>);
}

export default ChatFooter;