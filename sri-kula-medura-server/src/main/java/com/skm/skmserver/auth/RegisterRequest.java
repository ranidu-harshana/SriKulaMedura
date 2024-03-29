package com.skm.skmserver.auth;

import com.skm.skmserver.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String name;
    private String nic;
    private String email;
    private String address;
    private String mobile_no;
    private String password;
    private Role role;
}
