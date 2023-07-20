import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const itemState = createEntityAdapter({selectId: (item)=>item.id})

const initialState = itemState.getInitialState({
	status: "",
	single_item: {
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

const itemSlice = createSlice({
	name: "item",
	initialState,
	reducers: {
		addItems: {
			reducer: (state, action) => {
				itemState.addMany(state, action.payload)
			}
		},

		addSingleItem: {
			reducer: (state, action) => {
				if (action.payload.length > 0) {
					itemState.addMany(state, action.payload)
				}
			},
			prepare: ({
				          id,
				          created_at,
				          item_code,
				          item_image_url,
				          item_name,
				          item_type,
				          rented_status,
				          updated_at,
				          item_category_id
			}) => ({
				id,
				created_at,
				item_code,
				item_image_url,
				item_name,
				item_type,
				rented_status,
				updated_at,
				item_category_id
			})
		}
	}
})

export const {
	selectIds: selectIdsItem,
	selectById: selectByIdItem,
	selectAll: selectAllItem,
	selectEntities: selectEntitiesItem,
	selectTotal: selectTotalItem} = itemState.getSelectors(store => store.item)
export const {addItems, addSingleItem} = itemSlice.actions
const itemSel = (store) => store.item.single_item
export const itemSelector = createSelector([itemSel], (item)=>(item))
export default itemSlice.reducer