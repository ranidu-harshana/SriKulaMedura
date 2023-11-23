package com.skm.skmserver.service;

import com.skm.skmserver.dto.Customer.CustomerDTO;
import com.skm.skmserver.entity.Customer;

import java.util.List;

public interface CustomerService {
    List<CustomerDTO> allCustomers();
    CustomerDTO saveCustomer(CustomerDTO customerDTO);
    CustomerDTO getCustomer (int id);
    CustomerDTO updateCustomer(CustomerDTO customerDTO, int id);
    boolean deleteCustomer(int id);
    CustomerDTO getCustomerDTOWithValues(Customer measurement);
}
