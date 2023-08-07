import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const item_categoryState = createEntityAdapter({selectId: (item_category)=>item_category.id})

const initialState = item_categoryState.getInitialState()

const item_categorySlice = createSlice({
	name: "item_category",
	initialState,
	reducers: {
		addItemCats: {
			reducer: (state, action) => {
				item_categoryState.addMany(state, action.payload)
			}
		},
	}
})

export const {
	selectById: selectByIdItemCategory,
	selectAll: selectAllItemCategory,
} = item_categoryState.getSelectors(store => store.item_category)
export const {addItemCats, addSingleItemCat} = item_categorySlice.actions
export default item_categorySlice.reducer