import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const userState = createEntityAdapter({selectId: (user) => user.id})

const initialState = userState.getInitialState({
	loggedUser: {
		id: null,
		name: null,
		email: null,
		address: null,
		mobile_no: null,
		role: null
	}
})

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		addAllUsers: userState.addMany,
		addOneUser: userState.addOne,
		addLoggedUser: {
			reducer: (state, {payload}) => {
				if (payload) {
					state.loggedUser = payload
				}
			},
			prepare: (id, name, email, role, address, mobile_no) => ({
				payload: {
					id, name, email, role, address, mobile_no
				}
			})
		}
	}
})

export const {
	selectById: selectByIdUser,
	selectAll: selectAllUser
} = userState.getSelectors(store => store.user)
export const {addAllUsers, addLoggedUser, addOneUser} = userSlice.actions
const selLoggedUser = (store) => store.user.loggedUser
export const selectLoggedUser = createSelector([selLoggedUser], (user) => user)
export default userSlice.reducer