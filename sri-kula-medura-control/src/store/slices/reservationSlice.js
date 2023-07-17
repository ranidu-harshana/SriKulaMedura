import {createAsyncThunk, createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const reservationState = createEntityAdapter({
	selectId: (reservation) => reservation.id
})

const initialState = reservationState.getInitialState({
	status: "",
	reservation: {
		id: null,
		bill_number: null,
		function_date: null,
		function_place: null,
		no_of_bestmen: null,
		no_of_pageboys: null,
		dressing_place: null,
		goingaway_change_place: null,
		status: null,
		measurement_date: null,
		created_at: null,
		updated_at: null,
		date: null,
		customer_id: null,
		user_id: null,
		branch_id: null,
		branch_name: null,
	}
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
		},
		addReservation: {
			reducer: (state, {type, payload}) => {
				state.reservation = payload
			},
			prepare: ({
				          id,
				          bill_number,
				          function_date,
				          function_place,
				          no_of_bestmen,
				          no_of_pageboys,
				          dressing_place,
				          goingaway_change_place,
				          status,
				          measurement_date,
				          created_at,
				          updated_at,
				          date,
				          customer_id,
				          user_id,
				          branch_id,
				          branch_name}) => ({
				payload: {
					id,
					bill_number,
					function_date,
					function_place,
					no_of_bestmen,
					no_of_pageboys,
					dressing_place,
					goingaway_change_place,
					status,
					measurement_date,
					created_at,
					updated_at,
					date,
					customer_id,
					user_id,
					branch_id,
					branch_name
				}
			})
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

export const {
	selectIds: selectIdsReservation,
	selectById: selectByIdReservation,
	selectAll: selectAllReservation,
	selectEntities: selectEntitiesReservation,
	selectTotal: selectTotalReservation} = reservationState.getSelectors(store => store.reservation)
export const {addReservations, addReservation} = reservationSlice.actions
const reservationSel = (store) => store.reservation.reservation
export const reservationSelector = createSelector([reservationSel], (reservation) => reservation)
export default reservationSlice.reducer