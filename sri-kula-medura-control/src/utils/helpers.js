import SockJS from "sockjs-client";
import {WEBSOCKET_URL} from "./constants";
import Stomp from "stompjs";

const firtsLetterTOUppercase = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1)
}

const handleWebSocketConnOnClickChatLink = (stompClient, isChatLink, setIsClickOnChatName, setStompClient, loggedUserId, senderMessages, setSenderMessages) => {
	if (isChatLink) {
		setIsClickOnChatName(true)
		const Sock = new SockJS(WEBSOCKET_URL);
		stompClient = Stomp.over(Sock)
		setStompClient(stompClient)
		stompClient.connect({}, () => {
			stompClient.unsubscribe()
			stompClient.subscribe('/user/' + loggedUserId + '/private', (payload) => {
				const payloadData = JSON.parse(payload.body)
				const senderIdOfReceivedMsg = parseInt(payloadData.senderId)
				if (senderMessages.get("chatId" + senderIdOfReceivedMsg)) {
					senderMessages.get("chatId" + senderIdOfReceivedMsg).push(payloadData)
					setSenderMessages(new Map(senderMessages))
				} else {
					const list = []
					list.push(payloadData)
					senderMessages.set("chatId" + senderIdOfReceivedMsg, list)
					setSenderMessages(new Map(senderMessages))
				}
			});
		}, () => {
			console.log("Server Error")
		})
	}
}

function highlightOrRemoveHighlightActiveLink(linkRef) {
	const parentUlChildren = linkRef.current?.parentElement.parentElement.childNodes
	parentUlChildren.forEach((child) => {
		if (child.tagName === "LI") {
			child.firstChild.className = ""
		}
	})
	linkRef.current.className = "text-info"
}

function convertNumberToPriceFormat (number) {
	return number.toLocaleString('en', {
		minimumFractionDigits: 2
	})
}

export {
	firtsLetterTOUppercase,
	handleWebSocketConnOnClickChatLink,
	highlightOrRemoveHighlightActiveLink,
	convertNumberToPriceFormat,
}