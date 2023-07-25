package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CustomerDTO;
import com.skm.skmserver.dto.UserDTO;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.enums.Role;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Enumeration;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, MainService<UserDTO, User> {
    private final UserRepository userRepository;
    private final CustomerServiceImpl customerService;

    @Override
    public List<UserDTO> allUsers() {
        return null;
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = userRepository.save(User.builder()
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .address(userDTO.getAddress())
                .mobile_no(userDTO.getMobile_no())
                .password(userDTO.getPassword())
                .role(userDTO.getRole())
                .build());

        customerService.saveCustomer(CustomerDTO.builder().user_id(user.getId()).build());
        return set(user);
    }

    @Override
    public UserDTO getUser(int id) {
        User user = userRepository.findById(id);
        return set(user);
    }

    @Override
    public UserDTO updateUser(UserDTO reservationDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteUser(int id) {
        return false;
    }

    @Override
    public UserDTO set(User user) {
        return UserDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .mobile_no(user.getMobile_no())
                .email_verified_at(user.getEmail_verified_at())
                .password(user.getPassword())
                .created_at(user.getCreated_at())
                .updated_at(user.getUpdated_at())
                .role(user.getRole())
                .build();
    }
}
