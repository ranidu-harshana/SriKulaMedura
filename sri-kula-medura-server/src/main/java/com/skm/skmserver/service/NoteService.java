package com.skm.skmserver.service;


import com.skm.skmserver.dto.NoteDTO;
import com.skm.skmserver.entity.Note;

import java.util.List;

public interface NoteService {

    List<NoteDTO> allNotes();
    NoteDTO saveNote(NoteDTO noteDTO);
    NoteDTO getNote (int id);
    NoteDTO updateNote(NoteDTO noteDTO, int id);
    boolean deleteNote(int id);
    NoteDTO getNoteDTOWithValues(Note note);
    List<NoteDTO> allNotesOfReservation(int reservation_id);
}
