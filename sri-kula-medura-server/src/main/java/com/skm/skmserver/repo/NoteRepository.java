package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Cost;
import com.skm.skmserver.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {
    Note findById(int id);
    List<Note> findAllByReservationId(int reservation_id);
}
