package com.skm.skmserver.controller;

import com.skm.skmserver.dto.UserDTO;
import com.skm.skmserver.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/v1/employee")
@CrossOrigin
@RequiredArgsConstructor
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping("/")
    public UserDTO saveEmployee(@RequestBody UserDTO userDTO){
        return employeeService.saveEmployee(userDTO);
    }

    @GetMapping("/{id}")
    public UserDTO getEmployeeById(@PathVariable int id){
        return employeeService.getEmployee(id);
    }

    @PutMapping("/{id}")
    public UserDTO update(@RequestBody UserDTO userDTO, @PathVariable int id){
        return employeeService.updateEmployee(userDTO, id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(employeeService.deleteEmployee(id)){
            return "User deleted successfully";
        }
        return "User delete failed";
    }

}
