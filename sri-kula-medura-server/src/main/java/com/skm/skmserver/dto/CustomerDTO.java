package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.entity.WishList;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class CustomerDTO {
    private int id;
    private String mobile_no;
    private boolean status;
    private int discount;
    private Date created_at;
    private Date updated_at;
    private int user_id;
}
