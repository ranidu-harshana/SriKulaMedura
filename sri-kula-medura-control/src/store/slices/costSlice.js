import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const costState = createEntityAdapter({selectId: (cost)=>cost.id})

const initialState = costState.getInitialState()

const costSlice = createSlice({
    name: 'cost',
    initialState,
    reducers: {
        cost: {
            reducer: (state, action) => {
                costState.upsertMany(state, action.payload)
            }
        },
        saveCost: costState.addOne,
        clearCost: costState.removeAll
    }
})

export const {addCost, saveCost, clearCost} = costSlice.actions
export const { selectAll: SelectAllCosts } = costState.getSelectors(store => store.cost);
export default costSlice.reducer