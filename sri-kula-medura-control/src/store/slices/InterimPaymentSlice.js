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
        updateInterimPayments: {
            reducer: (state, action) => {
                const {id, reservation_id, interim_payment} = action.payload;
                interimPaymentState.upsertOne(state, {
                    id:id,
                    interim_payment: interim_payment,
                    reservation_id: reservation_id
                })
            }
        },

        saveInterimPayment: interimPaymentState.addOne,
        deleteInterimPayments:interimPaymentState.removeOne,
        clearInterimPaymentState: interimPaymentState.removeAll
    }
})

export const {addInterimPayments, saveInterimPayment, clearInterimPaymentState,deleteInterimPayments,updateInterimPayments} = interimPaymentSlice.actions
export const { selectAll: selectAllInterimPayment } = interimPaymentState.getSelectors(store => store.interim_payment);
export default interimPaymentSlice.reducer