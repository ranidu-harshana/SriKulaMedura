package com.skm.skmserver.auth;

import com.skm.skmserver.config.JwtService;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.enums.Role;
import com.skm.skmserver.repo.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository repository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;
    private final User newUser;

    public AuthenticationResponse register(RegisterRequest request) {
        var user = User.builder(newUser)
                .name(request.getName())
                .email(request.getEmail())
                .address(request.getAddress())
                .mobile_no(request.getMobile_no())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.STANDARD_USER)
                .build();
        repository.save(user);
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = repository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }
}
