package com.skm.skmserver.controller;

import com.skm.skmserver.dto.NoteDTO;
import com.skm.skmserver.service.NoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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


}
