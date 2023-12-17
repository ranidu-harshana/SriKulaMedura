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
        updatePayments: {
            reducer: (state, action) => {
                const {id, reservation_id, payment,reason} = action.payload;
                console.log(action.payload)
                additionalPaymentState.upsertOne(state, {
                    id:id,
                    payment:payment,
                    reason: reason,
                    reservation_id: reservation_id
                })
            }
        },
        saveAdditionalPayment: additionalPaymentState.addOne,
        deletePayments:additionalPaymentState.removeOne,
        clearAdditionalPaymentState: additionalPaymentState.removeAll
    }
})

export const {addAdditionalPayments, saveAdditionalPayment, clearAdditionalPaymentState,updatePayments,deletePayments} = additionalPaymentSlice.actions
export const { selectAll: selectAllAdditionalPayments } = additionalPaymentState.getSelectors(store => store.additional_payment);
export default additionalPaymentSlice.reducer