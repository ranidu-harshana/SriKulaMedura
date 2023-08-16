import {createContext, useState} from "react";

export const webSocketConnection = createContext({})
const WebSocketConnection = ({children}) => {
	const [senderMessages, setSenderMessages] = useState(new Map())
	const [stompClient, setStompClient] = useState(new Map())
	const [isClickOnChatName, setIsClickOnChatName] = useState(false)

	return (
		<webSocketConnection.Provider
			value={{senderMessages, setSenderMessages, stompClient, setStompClient, isClickOnChatName, setIsClickOnChatName}}>
			{children}
		</webSocketConnection.Provider>
	);
}

export default WebSocketConnection;