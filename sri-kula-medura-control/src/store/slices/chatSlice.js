import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const chatState = createEntityAdapter()

const initialState = chatState.getInitialState({
	chatReceiverId: null
})

const chatSlice = createSlice({
	name: 'chat',
	initialState,
	reducers: {
		setChatReceiverId: {
			reducer: (state, {payload}) => {
				state.chatReceiverId = payload.receiverId
			},
			prepare: (receiverId) => ({
				payload: {
					receiverId
				}
			})
		}
	}
})

const selChatReceiverId = (store) => store.chat.chatReceiverId
export const SelectChatReceiverId = createSelector([selChatReceiverId], (chatReceiverId)=>chatReceiverId)
export const {setChatReceiverId} = chatSlice.actions
export default chatSlice.reducer