import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const dressSelectionState = createEntityAdapter({selectId: dressSelection => dressSelection.id})

const initialState = dressSelectionState.getInitialState({

})

const dressSelectionSlice = createSlice({
	name: 'dressSelection',
	initialState,
	reducers: {
		addDressSelections: dressSelectionState.addMany
	}
})

export const {
	selectAllDressSelection,
	selectByIdDressSelection,
} = dressSelectionState.getSelectors(store => store.dress_selection())
export const {addDressSelections} = dressSelectionSlice.actions
export default dressSelectionSlice.reducer