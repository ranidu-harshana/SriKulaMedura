package com.skm.skmserver.dto;

import com.skm.skmserver.entity.Customer;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder(builderMethodName = "internalBuilder")
public class CustomerDTO {
    private int id;
    private String mobile_no;
    private boolean status;
    private int discount;
    private Date created_at;
    private Date updated_at;
    private int user_id;

    public static CustomerDTOBuilder builder(Customer customer) {
        return internalBuilder()
                .id(customer.getId())
                .mobile_no(customer.getMobile_no())
                .status(customer.isStatus())
                .discount(customer.getDiscount())
                .created_at(customer.getCreated_at())
                .updated_at(customer.getUpdated_at())
                .user_id(customer.getUser().getId());
    }
}
