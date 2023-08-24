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
        saveAdditionalPayment: additionalPaymentState.addOne,
        clearAdditionalPaymentState: additionalPaymentState.removeAll
    }
})

export const {addAdditionalPayments, saveAdditionalPayment, clearAdditionalPaymentState} = additionalPaymentSlice.actions
export const { selectAll: selectAllAdditionalPayments } = additionalPaymentState.getSelectors(store => store.additional_payment);
export default additionalPaymentSlice.reducer