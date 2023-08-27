import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";

const noteState = createEntityAdapter({selectId: (note)=>note.id})

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
        saveNote: noteState.addOne,
        clearNoteState:noteState.removeAll
    }
})

export const {addNotes, saveNote,clearNoteState} = noteSlice.actions
export const {selectAll :selectAllNotes} = noteState.getSelectors(store => store.note)
export default noteSlice.reducer