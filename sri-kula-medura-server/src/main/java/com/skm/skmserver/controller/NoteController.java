package com.skm.skmserver.controller;

import com.skm.skmserver.dto.NoteDTO;
import com.skm.skmserver.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/note")
@CrossOrigin
@RequiredArgsConstructor
public class NoteController {
    private final NoteService noteService;

    @GetMapping("/")
    public List<NoteDTO> index(){
        return noteService.allNotes();
    }

    @PostMapping("/")
    public NoteDTO store(@RequestBody NoteDTO noteDTO){
        return noteService.saveNote(noteDTO);
    }

    @GetMapping("/{id}")
    public String create(){
        return "";
    }
}
