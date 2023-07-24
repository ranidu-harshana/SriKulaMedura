package com.skm.skmserver.service;

import com.skm.skmserver.dto.CustomerDTO;
import com.skm.skmserver.entity.Measurement;

import java.util.List;

public interface CustomerService {
    List<CustomerDTO> allMeasurements();
    CustomerDTO saveMeasurement(CustomerDTO customerDTO);
    CustomerDTO getMeasurement (int id);
    CustomerDTO updateMeasurement(CustomerDTO customerDTO, int id);
    boolean deleteMeasurement(int id);
    CustomerDTO getCustomerDTOWithValues(Measurement measurement);
}
