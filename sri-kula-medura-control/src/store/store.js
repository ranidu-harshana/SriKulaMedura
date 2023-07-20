import {configureStore} from "@reduxjs/toolkit";
import reservationSlice from './slices/reservationSlice'
import itemSlice from "./slices/itemSlice";
import itemCategorySlice from "./slices/itemCategorySlice";

const store = configureStore({
	reducer: {
		reservation: reservationSlice,
		item: itemSlice,
		item_category: itemCategorySlice
	}
})

export default store