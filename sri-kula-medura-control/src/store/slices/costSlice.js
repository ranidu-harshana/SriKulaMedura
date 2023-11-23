import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const costState = createEntityAdapter({selectId: (cost)=>cost.id})

const initialState = costState.getInitialState()

const costSlice = createSlice({
    name: 'cost',
    initialState,
    reducers: {
        addCost: {
            reducer: (state, action) => {
                costState.upsertMany(state, action.payload)
            }
        },
        saveCost: costState.addOne,
        clearCostState: costState.removeAll
    }
})

export const {addCost, saveCost, clearCostState} = costSlice.actions
export const { selectAll: selectAllCost } = costState.getSelectors(store => store.cost);
export default costSlice.reducer