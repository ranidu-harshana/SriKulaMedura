import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const noteState = createEntityAdapter({selectId: (note) => note.id})

const initialState = noteState.getInitialState()

const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        addNotes: {
            reducer: (state, action) => {
                noteState.upsertMany(state, action.payload)
            }
        },
        updateNotes: {
            reducer: (state, action) => {
                const {id, reservation_id, text} = action.payload;
                console.log("ssss",action.payload)
                noteState.upsertOne(state, {
                    id:id,
                    note: text,
                    reservation_id: reservation_id
                })
            }
        },
        saveNote: noteState.addOne,
        deleteNotes: noteState.removeOne,
        clearNoteState: noteState.removeAll,
        // updateNotes:noteState.updateOne
    }
})

export const {addNotes, saveNote, clearNoteState, deleteNotes, updateNotes} = noteSlice.actions
export const {selectAll: selectAllNotes} = noteState.getSelectors(store => store.note)
export default noteSlice.reducer