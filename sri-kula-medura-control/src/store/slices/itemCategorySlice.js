import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const item_categoryState = createEntityAdapter({selectId: (item_category)=>item_category.id})

const initialState = item_categoryState.getInitialState({
	status: "",
	single_item_category: {
		id: null,
		created_at: null,
		category_name: null,
		updated_at: null,
	}
})

const item_categorySlice = createSlice({
	name: "item_category",
	initialState,
	reducers: {
		addItemCats: {
			reducer: (state, action) => {
				item_categoryState.addMany(state, action.payload)
			}
		},

		addSingleItemCat: {
			reducer: (state, action) => {
				if (action.payload.length > 0) {
					item_categoryState.addMany(state, action.payload)
				}
			},
			prepare: ({
				          id,
				          created_at,
				          category_name,
				          updated_at,
			          }) => ({
				id,
				created_at,
				category_name,
				updated_at,
			})
		}
	}
})

export const {
	selectIds: selectIdsItemCategory,
	selectById: selectByIdItemCategory,
	selectAll: selectAllItemCategory,
	selectEntities: selectEntitiesItemCategory,
	selectTotal: selectTotalItemCategory} = item_categoryState.getSelectors(store => store.item_category)
export const {addItemCats, addSingleItemCat} = item_categorySlice.actions
const item_categorySel = (store) => store.item_category.single_item_category
export const item_categorySelector = createSelector([item_categorySel], (item_category)=>(item_category))
export default item_categorySlice.reducer