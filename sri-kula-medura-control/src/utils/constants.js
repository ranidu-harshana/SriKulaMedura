const constants = {
	BASE_URL: "http://localhost:8080/api/v1",
	// BASE_URL: "https://skmapi.agreeablebay-9c7abcb8.eastus.azurecontainerapps.io/api/v1",
	WEBSOCKET_URL: "http://localhost:8080/ws", //
	// WEBSOCKET_URL: "https://skmapi.agreeablebay-9c7abcb8.eastus.azurecontainerapps.io/ws",
	PAYHERE_RETURN_URL: "http://localhost:3000/skm/payment/success",
	ITEM_TYPES: {
		GROOM: {ALL_CAP: "GROOM", FIRSTCHAR_CAP: "Groom", ALL_SIM: "groom"},
		BESTMAN: {ALL_CAP: "BESTMAN", FIRSTCHAR_CAP: "Bestman", ALL_SIM: "bestman"},
		PAGEBOY: {ALL_CAP: "PAGEBOY", FIRSTCHAR_CAP: "Pageboy", ALL_SIM: "pageboy"},
	}
}

export const {
	BASE_URL,
	WEBSOCKET_URL,
	PAYHERE_RETURN_URL,
	ITEM_TYPES
} = constants