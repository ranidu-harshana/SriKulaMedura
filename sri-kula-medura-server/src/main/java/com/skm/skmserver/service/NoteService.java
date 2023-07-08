package com.skm.skmserver.service;


import com.skm.skmserver.dto.Note.NoteDTO;
import com.skm.skmserver.dto.Note.UpdateNoteDTO;

import java.util.List;

public interface NoteService {
    List<NoteDTO> allNotes();
    NoteDTO saveNote(NoteDTO noteDTO);
    NoteDTO getNote (int id);
    NoteDTO updateNote(UpdateNoteDTO noteDTO, int id);
    boolean deleteNote(int id);
}
