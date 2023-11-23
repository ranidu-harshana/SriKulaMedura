package com.skm.skmserver.controller;

import com.skm.skmserver.dto.UserDTO;
import com.skm.skmserver.service.serviceImpl.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/user")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {
    private final UserServiceImpl reservationService;

    @GetMapping("/")
    public List<UserDTO> index(){
        return reservationService.allUsers();
    }

    @GetMapping("/employees")
    public List<UserDTO> allEmployees(){
        return reservationService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public UserDTO show(@PathVariable int id){
        return reservationService.getUser(id);
    }

    @GetMapping("/email/{email}")
    public UserDTO show(@PathVariable String email){
        return reservationService.getUser(email);
    }

    @PutMapping("/{id}")
    public UserDTO update(@RequestBody UserDTO reservationDTO, @PathVariable int id){
        return reservationService.updateUser(reservationDTO, id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(reservationService.deleteUser(id)){
            return "User deleted successfully";
        }
        return "User delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
