package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.dto.NoteDTO;
import com.skm.skmserver.entity.Note;
import com.skm.skmserver.repo.NoteRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.NoteService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class NoteServiceImpl implements NoteService, MainService<NoteDTO,Note> {
    private final NoteRepository noteRepository;
    private final ReservationRepository reservationRepository;

    private final MapAll<Note ,NoteDTO> mapAll;

    @Override
    public List<NoteDTO> allNotes() {
        return mapAll.mapAllAttributesToDTO(noteRepository.findAll(),this);
    }

    @Override
    public NoteDTO getNote(int id) {
        Note note = noteRepository.findById(id);
        return set(note);
    }

    public List<NoteDTO> allNotesOfReservation(int reservation) {
        return mapAll.mapAllAttributesToDTO(noteRepository.findAllByReservationId(reservation),this);
    }

    @Override
    public NoteDTO updateNote(NoteDTO noteDTO, int id) {
        Note note = noteRepository.findById(id);
        return set(noteRepository.save(Note.builder()
                        .id(note.getId())
                        .note(noteDTO.getNote())
                        .status(noteDTO.isStatus())
                        .updated_at(note.getUpdated_at())
                        .created_at(note.getCreated_at())
                        .reservation(reservationRepository.findById(note.getReservation().getId()))
                .build()));
    }

    @Override
    public boolean deleteNote(int id) {
        if(noteRepository.findById(id) == null)
            return false;
        noteRepository.deleteById(id);
        return true;
    }

    @Override
    public NoteDTO getNoteDTOWithValues(Note note) {
        return null;
    }

    public NoteDTO saveNote(NoteDTO noteDTO){
        Note note = noteRepository.save(Note.builder()
                .note(noteDTO.getNote())
                .status(noteDTO.isStatus())
                .reservation(reservationRepository.findById(noteDTO.getReservation_id()))
                .build());
                return set(note);
    }

    public NoteDTO set(Note note) {
        return NoteDTO.builder()
                .id(note.getId())
                .note(note.getNote())
                .status(note.isStatus())
                .created_at(note.getCreated_at())
                .updated_at(note.getUpdated_at())
                .reservation_id(note.getReservation().getId())
                .build();
    }
}
