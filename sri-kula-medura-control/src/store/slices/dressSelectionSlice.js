import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const dressSelectionState = createEntityAdapter({selectId: dressSelection => dressSelection.id})

const initialState = dressSelectionState.getInitialState({
	selectedDressesByUser: []
})

const dressSelectionSlice = createSlice({
	name: 'dressSelection',
	initialState,
	reducers: {
		addDressSelections: dressSelectionState.upsertMany,
		addSelectedDressByUser: {
			reducer: (state, {payload}) => {
				const filtered = state.selectedDressesByUser.filter((dress) => dress.item_id === payload.item_id)
				const changeSelectedDressFiltered = state.selectedDressesByUser.findIndex((dress) => dress.typeWithIndex === payload.typeWithIndex)
				// if user click on the same value again if already value in the text box ignore it
				if (!filtered.length > 0) {
					// if user click on another value if a value already in the text box replace the item_id without adding new item
					if(changeSelectedDressFiltered === -1) {
						state.selectedDressesByUser.push(payload)
					} else {
						state.selectedDressesByUser[changeSelectedDressFiltered].item_id = payload.item_id
					}
				}
			},
			prepare: (typeWithIndex, item_id, reservation_id, item_description) => {
				return	{
					payload: {
						typeWithIndex, item_id, reservation_id, item_description
					}
				}
			}
		},
		resetAddSelectedDressByUser: {
			reducer: (state, {payload}) => {
				state.selectedDressesByUser = []
			}
		},
		clearDressSelectionState: dressSelectionState.removeAll
	}
})

export const {
	selectAll: selectAllDressSelection,
	selectById: selectByIdDressSelection,
} = dressSelectionState.getSelectors(store => store.dressSelection)
export const {addDressSelections, addSelectedDressByUser, clearDressSelectionState} = dressSelectionSlice.actions
const selectedDressesByUserSel = (store) => store.dressSelection.selectedDressesByUser
export const selectedDressesByUserSelector = createSelector([selectedDressesByUserSel], (selectedDressesByUser) => selectedDressesByUser)
export default dressSelectionSlice.reducer