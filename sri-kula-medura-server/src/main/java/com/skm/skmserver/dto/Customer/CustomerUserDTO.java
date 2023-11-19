package com.skm.skmserver.dto.Customer;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class CustomerUserDTO {
    private int id;
    private String name;
    private String nic;
    private String address;
    private String mobile_no1;
    private String mobile_no2;
    private boolean status;
    private int discount;
}
