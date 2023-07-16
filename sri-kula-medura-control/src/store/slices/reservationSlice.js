import {createAsyncThunk, createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const reservationState = createEntityAdapter({
	selectId: (reservation) => reservation.id
})

const initialState = reservationState.getInitialState({
	status: "",
})

export const getReservations = createAsyncThunk("getReservations", async () => {
	const reservations = await axios.get('http://localhost:8080/api/v1/reservation/');

	if (reservations) {
		console.log(reservations)
		return reservations
	}
})

const reservationSlice = createSlice({
	name: "reservations",
	initialState,
	reducers: {
		addReservations: {
			reducer: (state, action) => {
				if (action.payload.length > 0) {
					reservationState.addMany(state, action.payload)
				}
			},
		}
	},
	extraReducers: (builder) =>{
		builder.addCase(getReservations.pending, (state, action) => {
			state.status = "Pending"
		})

		builder.addCase(getReservations.fulfilled, (state, action) => {
			state.status = "Success"
			reservationState.addMany(state, action.payload)
		})
	}
})

export const {selectIds, selectById, selectAll, selectEntities, selectTotal} = reservationState.getSelectors(store => store.reservation)
export const {addReservations} = reservationSlice.actions
export default reservationSlice.reducer