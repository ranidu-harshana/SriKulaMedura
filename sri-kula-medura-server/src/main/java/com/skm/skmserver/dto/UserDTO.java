package com.skm.skmserver.dto;

import com.skm.skmserver.entity.User;
import com.skm.skmserver.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class UserDTO {
    private int id;
    private String name;
    private String email;
    private String address;
    private String mobile_no;
    private Date email_verified_at;
    private String password;
    private Date created_at;
    private Date updated_at;
    private Role role;

    public static UserDTOBuilder builder(User user) {
        return internalBuilder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .address(user.getAddress())
                .mobile_no(user.getMobile_no())
                .email_verified_at(user.getEmail_verified_at())
                .password(user.getPassword())
                .created_at(user.getCreated_at())
                .updated_at(user.getUpdated_at())
                .role(user.getRole());
    }
}
