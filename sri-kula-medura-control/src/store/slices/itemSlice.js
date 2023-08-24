import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const itemState = createEntityAdapter({selectId: (item)=>item.id})

const initialState = itemState.getInitialState()

const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {
		addItems: {
			reducer: (state, action) => {
				itemState.upsertMany(state, action.payload)
			}
		},
		saveItem: itemState.addOne,
	}
})

export const {
	selectById: selectByIdItem,
	selectAll: selectAllItem
} = itemState.getSelectors(store => store.item)
export const {addItems, addSingleItem, saveItem} = itemSlice.actions
export default itemSlice.reducer