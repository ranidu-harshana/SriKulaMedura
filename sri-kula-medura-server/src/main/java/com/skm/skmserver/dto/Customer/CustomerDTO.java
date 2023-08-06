package com.skm.skmserver.dto.Customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

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
