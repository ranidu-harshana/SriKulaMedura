import {configureStore} from "@reduxjs/toolkit";
import reservationSlice from './slices/reservationSlice'
import itemSlice from "./slices/itemSlice";
import itemCategorySlice from "./slices/itemCategorySlice";
import branchSlice from "./slices/branchSlice";
import measurementSlice from "./slices/measurementSlice";
import dressSelectionSlice from "./slices/dressSelectionSlice";
import userSlice from "./slices/userSlice";
import additionalPaymentSlice from "./slices/additionalPaymentSlice";
import noteSlice from "./slices/noteSlice";
import chatSlice from "./slices/chatSlice";

const store = configureStore({
	reducer: {
		reservation: reservationSlice,
		item: itemSlice,
		item_category: itemCategorySlice,
		branch: branchSlice,
		measurement: measurementSlice,
		dressSelection: dressSelectionSlice,
		user: userSlice,
		additional_payment:additionalPaymentSlice,
		note:noteSlice,
		chat: chatSlice,
	}
})

export default store