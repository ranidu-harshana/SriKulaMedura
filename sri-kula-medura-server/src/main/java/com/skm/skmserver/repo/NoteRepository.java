package com.skm.skmserver.repo;

import com.skm.skmserver.entity.Cost;
import com.skm.skmserver.entity.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {
    Note findById(int id);
}
