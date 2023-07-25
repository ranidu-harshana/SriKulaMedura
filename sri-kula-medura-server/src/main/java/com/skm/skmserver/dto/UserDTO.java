package com.skm.skmserver.dto;

import com.skm.skmserver.enums.Role;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
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
}
