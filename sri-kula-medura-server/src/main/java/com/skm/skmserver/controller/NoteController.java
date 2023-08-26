package com.skm.skmserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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

    @GetMapping("/create")
    public String create(){
        return "";
    }

    @GetMapping("/{id}")
    public NoteDTO show(@PathVariable int id){
        return noteService.getNote(id);
    }

    @PutMapping("/{id}")
    public NoteDTO update(@RequestBody NoteDTO noteDTO,@PathVariable int id){
        return noteService.updateNote(noteDTO,id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(noteService.deleteNote(id))
            return "Note Deleted Successfully";
        return "Note Delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
