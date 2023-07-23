import {createEntityAdapter, createSelector, createSlice} from "@reduxjs/toolkit";

const branchState = createEntityAdapter({selectId: (branch)=>branch.id})

const initialState = branchState.getInitialState({
	status: "",
	single_branch: {
		id: null,
		name: null,
		prefix: null,
		created_at: null,
		updated_at: null,
		status: null
	},
	b: {
		name: null
	}
})

const branchSlice = createSlice({
	name: 'branch',
	initialState,
	reducers: {
		addBranches: {
			reducer: (state, action) => {
				branchState.addMany(state, action.payload)
			}
		},

		addSingleBranch: {
			reducer: (state, {type, payload}) => {
				if (payload.length > 0) {
					state.single_branch = payload
				}
			},
			prepare: ({
				          id,
				          name,
				          prefix,
				          created_at,
				          updated_at,
				          status}) => ({
				id,
				name,
				prefix,
				created_at,
				updated_at,
				status
			})
		},

		saveBranch: branchState.addOne
	}
})

const branchSel = (store) => store.branch.single_branch
export const branchSelector = createSelector([branchSel], (branch) => branch)
export const {addBranches, addSingleBranch, saveBranch} = branchSlice.actions
export const {selectIds: selectIdsBranch, selectAll: selectAllBranch} = branchState.getSelectors(store => store.branch)
export default branchSlice.reducer