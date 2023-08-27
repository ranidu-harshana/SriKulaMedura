import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const otherCostState = createEntityAdapter({selectId: (cost)=>cost.id})

const initialState = otherCostState.getInitialState()

const otherCostSlice = createSlice({
    name: 'cost',
    initialState,
    reducers: {
        cost: {
            reducer: (state, action) => {
                otherCostState.upsertMany(state, action.payload)
            }
        },
        saveOtherCost: otherCostState.addOne,
        clearOtherCost: otherCostState.removeAll
    }
})

export const {addOtherCost, saveOtherCost, clearOtherCost} = otherCostSlice.actions
export const { selectAll: selectAllOtherCost } = otherCostState.getSelectors(store => store.cost);
export default otherCostSlice.reducer