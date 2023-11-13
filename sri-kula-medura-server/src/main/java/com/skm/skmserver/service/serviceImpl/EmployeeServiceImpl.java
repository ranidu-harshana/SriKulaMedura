package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.UserDTO;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
@RequiredArgsConstructor
@Transactional
public class EmployeeServiceImpl implements EmployeeService {

    private final UserRepository userRepository;

    private final User newUser;


    @Override
    public UserDTO saveEmployee(UserDTO userDTO) {
        User user = userRepository.save(User.builder(newUser)
                .id(userDTO.getId())
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .address(userDTO.getAddress())
                .mobile_no(userDTO.getMobile_no())
                .role(userDTO.getRole())
                .build());
        return set(user);
    }

    @Override
    public UserDTO getEmployee(int id) {
        User user = userRepository.findById(id);

        return set(user);
    }

    @Override
    public boolean deleteEmployee(int id) {
        if(userRepository.findById(id)== null){
            return false;
        }
        userRepository.deleteById(id);
        return true;
    }

    @Override
    public UserDTO updateEmployee(UserDTO userDTO, int id) {
        User user = userRepository.findById(id);
        return set(userRepository.save(User.builder(user)
                .name(userDTO.getName())
                .email(userDTO.getEmail())
                .address(userDTO.getAddress())
                .mobile_no(userDTO.getMobile_no())
                .role(userDTO.getRole())
                .build()));
    }

    public UserDTO set(User user) {
        return UserDTO.builder().build();
    }
}
