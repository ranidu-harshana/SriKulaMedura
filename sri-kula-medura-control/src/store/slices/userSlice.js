import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const userState = createEntityAdapter({selectId: (user) => user.id})

const initialState = userState.getInitialState({
	loggedUser: {
		name: null,
		email: null,
		token: null
	}
})

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addAllUsers: userState.addMany
	}
})

export const {addAllUsers} = userSlice.actions
export default userSlice.reducer