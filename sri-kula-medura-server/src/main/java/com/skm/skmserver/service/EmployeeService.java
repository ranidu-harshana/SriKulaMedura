package com.skm.skmserver.service;

import com.skm.skmserver.dto.UserDTO;

public interface EmployeeService {
    UserDTO saveEmployee(UserDTO userDTO);
    UserDTO getEmployee (int id);
    boolean deleteEmployee(int id);
    UserDTO updateEmployee(UserDTO userDTO, int id);
}
