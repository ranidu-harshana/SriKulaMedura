package com.skm.skmserver.repo;

import com.skm.skmserver.entity.User;
import com.skm.skmserver.enums.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findById(int id);
    Optional<User> findByEmail(String email);
    List<User> findAllByRoleNotIn(Collection<Role> role);

    Optional<User> findByNic(String nic);
}
