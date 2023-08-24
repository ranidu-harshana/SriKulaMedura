import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const additionalPaymentState = createEntityAdapter({selectId: (additionalPayment)=>additionalPayment.id})

const initialState = additionalPaymentState.getInitialState()

const additionalPaymentSlice = createSlice({
    name: 'additionalPayment',
    initialState,
    reducers: {
        addAdditionalPayments: {
            reducer: (state, action) => {
                additionalPaymentState.upsertMany(state, action.payload)
            }
        },
        saveAdditionalPayment: additionalPaymentState.addOne
    }
})

export const {addAdditionalPayments, saveAdditionalPayment} = additionalPaymentSlice.actions
export const { selectAll: selectAllAdditionalPayments } = additionalPaymentState.getSelectors(state => state.additional_payment);
export default additionalPaymentSlice.reducer