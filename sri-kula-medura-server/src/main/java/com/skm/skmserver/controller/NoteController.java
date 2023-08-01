package com.skm.skmserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "api/v1/notes")
@CrossOrigin
public class NoteController {
    @GetMapping("/")
    public String hello () {
        return "Hello";
    }
}
