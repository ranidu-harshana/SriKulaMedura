package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CustomerDTO;
import com.skm.skmserver.entity.Customer;
import com.skm.skmserver.entity.Measurement;
import com.skm.skmserver.service.CustomerService;
import com.skm.skmserver.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService, MainService<CustomerDTO, Customer> {
    @Override
    public List<CustomerDTO> allMeasurements() {
        return null;
    }

    @Override
    public CustomerDTO saveMeasurement(CustomerDTO customerDTO) {
        return null;
    }

    @Override
    public CustomerDTO getMeasurement(int id) {
        return null;
    }

    @Override
    public CustomerDTO updateMeasurement(CustomerDTO customerDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteMeasurement(int id) {
        return false;
    }

    @Override
    public CustomerDTO getCustomerDTOWithValues(Measurement measurement) {
        return null;
    }

    @Override
    public CustomerDTO set(Customer customer) {
        return CustomerDTO.builder()
                .id(customer.getId())
                .mobile_no(customer.getMobile_no())
                .status(customer.isStatus())
                .discount(customer.getDiscount())
                .created_at(customer.getCreated_at())
                .updated_at(customer.getUpdated_at())
                .user_id(customer.getUser().getId())
                .build();
    }
}
