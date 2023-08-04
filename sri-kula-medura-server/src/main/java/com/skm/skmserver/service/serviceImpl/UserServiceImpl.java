package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CustomerDTO;
import com.skm.skmserver.dto.UserDTO;
import com.skm.skmserver.entity.Customer;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImpl implements UserService, MainService<UserDTO, User> {
    private final UserRepository userRepository;
    private final CustomerServiceImpl customerService;
    private final User newUser;
    private final Customer newCustomer;

    @Override
    public List<UserDTO> allUsers() {
        return null;
    }

    @Override
    public UserDTO saveUser(UserDTO userDTO) {
        User user = userRepository.save(User.builder(newUser)
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .address(userDTO.getAddress())
                .mobile_no(userDTO.getMobile_no())
                .password(userDTO.getPassword())
                .role(userDTO.getRole())
                .build());

        customerService.saveCustomer(CustomerDTO.builder(newCustomer).user_id(user.getId()).build());
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
        return UserDTO.builder(user).build();
    }
}
