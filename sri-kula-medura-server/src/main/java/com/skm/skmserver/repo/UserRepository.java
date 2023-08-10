package com.skm.skmserver.repo;

import com.skm.skmserver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findById(int id);
    Optional<User> findByEmail(String email);
}
