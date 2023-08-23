import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const interimPaymentState = createEntityAdapter({selectId: (interimPayment)=>interimPayment.id})

const initialState = interimPaymentState.getInitialState()

const interimPaymentSlice = createSlice({
    name: 'interimPayment',
    initialState,
    reducers: {
        addInterimPayment: {
            reducer: (state, action) => {
                interimPaymentState.addMany(state, action.payload)
            }
        },
        saveInterimPayment: interimPaymentState.addOne
    }
})

export const {addInterimPayment, saveInterimPayment} = interimPaymentSlice.actions
export const { selectAll: selectAllInterimPayment } = interimPaymentState.getSelectors(store => store.interimPayment);
export default interimPaymentSlice.reducer