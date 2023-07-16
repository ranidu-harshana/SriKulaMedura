import {configureStore} from "@reduxjs/toolkit";
import reservationSlice from './slices/reservationSlice'

const store = configureStore({
	reducer: {
		reservation: reservationSlice
	}
})

export default store