package com.skm.skmserver.service;

import com.skm.skmserver.dto.UserDTO;

import java.util.List;

public interface UserService {
    List<UserDTO> allUsers();
    UserDTO saveUser(UserDTO reservationCusDTO);
    UserDTO getUser (int id);
    UserDTO getUser(String email);
    UserDTO updateUser(UserDTO reservationDTO, int id);
    boolean deleteUser(int id);
}
