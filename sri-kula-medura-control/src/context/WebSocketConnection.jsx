import {createContext, useState} from "react";

export const webSocketConnection = createContext({})
const WebSocketConnection = ({children}) => {
	const [stompClient, setStompClientTest] = useState(null)
	const [connected, setConnected] = useState(false)
	const [subscribe, setSubscribe] = useState(false)

	return (
		<webSocketConnection.Provider
			value={{stompClient, setStompClientTest, connected, setConnected, subscribe, setSubscribe}}>
			{children}
		</webSocketConnection.Provider>
	);
}

export default WebSocketConnection;