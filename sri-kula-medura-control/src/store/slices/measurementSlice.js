import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const measurementState = createEntityAdapter({selectId: measurement => measurement.id})

const initialState = measurementState.getInitialState()

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