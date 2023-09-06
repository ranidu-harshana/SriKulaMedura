import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const otherCostState = createEntityAdapter({selectId: (other_cost)=>other_cost.id})

const initialState = otherCostState.getInitialState()

const otherCostSlice = createSlice({
    name: 'other_cost',
    initialState,
    reducers: {
        addOtherCost: {
            reducer: (state, action) => {
                otherCostState.upsertMany(state, action.payload)
            }
        },
        saveOtherCost: otherCostState.upsertOne,
        clearOtherCostState: otherCostState.removeAll
    }
})

export const {addOtherCost, saveOtherCost, clearOtherCostState} = otherCostSlice.actions
export const { selectAll: selectAllOtherCosts } = otherCostState.getSelectors(store => store.other_cost);
export default otherCostSlice.reducer