package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CustomerDTO;
import com.skm.skmserver.entity.Customer;
import com.skm.skmserver.repo.CustomerRepository;
import com.skm.skmserver.repo.UserRepository;
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
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;
    private final Customer newCustomer;

    @Override
    public List<CustomerDTO> allCustomers() {
        return null;
    }

    @Override
    public CustomerDTO saveCustomer(CustomerDTO customerDTO) {
        Customer customer = customerRepository.save(Customer.builder(newCustomer)
                .status(true)
                .user(userRepository.findById(customerDTO.getUser_id()))
                .build());
        return set(customer);
    }

    @Override
    public CustomerDTO getCustomer(int id) {
        Customer customer = customerRepository.findById(id);
        return set(customer);
    }

    @Override
    public CustomerDTO updateCustomer(CustomerDTO customerDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteCustomer(int id) {
        return false;
    }

    @Override
    public CustomerDTO getCustomerDTOWithValues(Customer measurement) {
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
