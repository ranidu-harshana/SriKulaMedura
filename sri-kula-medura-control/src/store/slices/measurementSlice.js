import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const measurementState = createEntityAdapter({selectId: measurement => measurement.id})

const initialState = measurementState.getInitialState({
	status: "",
	single_measurement: {
		id: null,
		created_at: null,
		item_code: null,
		item_image_url: null,
		item_name: null,
		item_type: null,
		rented_status: null,
		updated_at: null,
		item_category_id: null
	}
})

const measurementSlice = createSlice({
	name: 'measurement',
	initialState,
	reducers: {
		addMeasurements: measurementState.addMany,
		updateMeasurement: measurementState.updateOne
	}
})

export const {addMeasurements} = measurementSlice.actions
export default measurementSlice.reducer