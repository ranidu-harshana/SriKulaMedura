package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Note.NoteDTO;
import com.skm.skmserver.dto.Note.UpdateNoteDTO;
import com.skm.skmserver.service.NoteService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class NoteServiceImpl implements NoteService {

    @Override
    public List<NoteDTO> allNotes() {
        return null;
    }

    @Override
    public NoteDTO saveNote(NoteDTO noteDTO) {
        return null;
    }

    @Override
    public NoteDTO getNote(int id) {
        return null;
    }

    @Override
    public NoteDTO updateNote(UpdateNoteDTO noteDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteNote(int id) {
        return false;
    }
}
