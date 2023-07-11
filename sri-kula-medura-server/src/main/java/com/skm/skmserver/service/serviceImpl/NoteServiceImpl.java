package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.NoteDTO;
import com.skm.skmserver.entity.Note;
import com.skm.skmserver.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
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
    public NoteDTO updateNote(NoteDTO noteDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteNote(int id) {
        return false;
    }

    @Override
    public NoteDTO getNoteDTOWithValues(Note note) {
        return null;
    }
}
