package com.skm.skmserver.service;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface AdditionalPaymentService {
    AdditionalPaymentDTO saveAdditionalPayment(AdditionalPaymentDTO additionalPaymentDTO);
    List<AdditionalPaymentDTO> allAdditionalPaymentsOfReservation(int reservation);
}
