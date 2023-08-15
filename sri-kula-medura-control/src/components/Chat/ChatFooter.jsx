const ChatFooter = ({stompClient, userId, setSenderMessages}) => {
	// const {sideNavVisibility, matchesMedia768} = useContext(controlActivity)
	//
	//
	// if (matchesMedia768) {
	// 	return (<>
	// 		<div className="row">
	// 			<div className="chat-footer" style={{padding: "10px"}}>
	// 				<div className="d-flex inner-footer" style={{marginRight: `${!sideNavVisibility ? "230px" : "0"}`}}>
	// 					<TextareaAutosize className={"form-control"} value={message} onChange={(e)=>setMessage(e.target.value)}/>
	// 					<span className="input-group-append">
	// 					<Button variant="contained" sx={{height: "100%", border: "none"}} onClick={sendMessage}>
	// 						<SendIcon/>
	// 					</Button>
	// 				</span>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</>);
	// }
	// return (<>
	// 	<div className="row">
	// 		<div className="chat-footer" style={{padding: "10px"}}>
	// 			<div className="d-flex inner-footer" style={{marginRight: "230px"}}>
	// 				<TextareaAutosize className={"form-control"} value={message} onChange={(e)=>setMessage(e.target.value)}/>
	// 				<span className="input-group-append">
	// 					<Button variant="contained" sx={{height: "100%", border: "none"}} onClick={sendMessage}>
	// 						<SendIcon/>
	// 					</Button>
	// 				</span>
	// 			</div>
	// 		</div>
	// 	</div>
	// </>);
}

export default ChatFooter;