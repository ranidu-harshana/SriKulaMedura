import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const reservationState = createEntityAdapter({
	selectId: (reservation) => reservation.id
})

const initialState = reservationState.getInitialState({
	status: "",
	single_reservation: {
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
		before_postpone_date: null,
		created_at: null,
		updated_at: null,
		date: null,
		customer_id: null,
		customer: {},
		user_id: null,
		branch_id: null,
		branch_name: null,
		amount_payable: null
	},
	 reservationsByDate: [],
})

const reservationSlice = createSlice({
	name: "reservation",
	initialState,
	reducers: {
		addReservations: {
			reducer: (state, action) => {
				if (action.payload.length > 0) {
					reservationState.upsertMany(state, action.payload)
				}
			},
		},
		addSingleReservation: {
			reducer: (state, {type, payload}) => {
				state.single_reservation = payload
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
						  before_postpone_date,
				          created_at,
				          updated_at,
				          date,
				          customer_id,
						  customer,
				          user_id,
				          branch_id,
				          branch_name,
				          amount_payable}) => ({
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
					before_postpone_date,
					created_at,
					updated_at,
					date,
					customer_id,
					customer,
					user_id,
					branch_id,
					branch_name,
					amount_payable
				}
			})
		},
		addReservationsByDate: {
			reducer: (state, action) => {
				state.reservationsByDate.push(action.payload)
			}
		},
		clearReservationsByDate: {
			reducer: state => {
				state.reservationsByDate = []
			}
		},
		saveReservation: reservationState.addOne,
		updateReservation: reservationState.updateOne
	}
})

export const {
	selectIds: selectIdsReservation,
	selectById: selectByIdReservation,
	selectAll: selectAllReservation,
	selectEntities: selectEntitiesReservation,
	selectTotal: selectTotalReservation} = reservationState.getSelectors(store => store.reservation)
export const {
	addReservations,
	addSingleReservation,
	saveReservation,
	updateReservation,
	addReservationsByDate,
	clearReservationsByDate,
} = reservationSlice.actions
const reservationSel = (store) => store.reservation.single_reservation
const reservationsByDateSel = (store) => store.reservation.reservationsByDate
export const reservationSelector = createSelector([reservationSel], (reservation) => reservation)
export const reservationsByDateSelector = createSelector([reservationsByDateSel], (reservation) => reservation)
export default reservationSlice.reducer