import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const branchState = createEntityAdapter({selectId: (branch)=>branch.id})

const initialState = branchState.getInitialState()

const branchSlice = createSlice({
	name: 'branch',
	initialState,
	reducers: {
		addBranches: {
			reducer: (state, action) => {
				branchState.addMany(state, action.payload)
			}
		},
		saveBranch: branchState.addOne
	}
})

export const {addBranches, addSingleBranch, saveBranch} = branchSlice.actions
export const {selectAll: selectAllBranch} = branchState.getSelectors(store => store.branch)
export default branchSlice.reducer