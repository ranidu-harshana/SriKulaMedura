import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const interimPaymentState = createEntityAdapter({selectId: (interimPayment)=>interimPayment.id})

const initialState = interimPaymentState.getInitialState()

const interimPaymentSlice = createSlice({
    name: 'interimPayment',
    initialState,
    reducers: {
        addInterimPayments: {
            reducer: (state, action) => {
                interimPaymentState.upsertMany(state, action.payload)
            }
        },
        saveInterimPayment: interimPaymentState.addOne,
        deleteInterimPayment: interimPaymentState.removeOne,
        clearInterimPaymentState: interimPaymentState.removeAll
    }

})

export const {addInterimPayments, saveInterimPayment,deleteInterimPayment, clearInterimPaymentState} = interimPaymentSlice.actions
export const { selectAll: selectAllInterimPayment } = interimPaymentState.getSelectors(store => store.interim_payment);
export default interimPaymentSlice.reducer