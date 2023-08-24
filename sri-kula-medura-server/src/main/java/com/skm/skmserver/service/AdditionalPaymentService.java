package com.skm.skmserver.service;

import com.skm.skmserver.dto.AdditionalPaymentDTO;

import java.util.List;

public interface AdditionalPaymentService {
    AdditionalPaymentDTO saveAdditionalPayment(AdditionalPaymentDTO additionalPaymentDTO);
    List<AdditionalPaymentDTO> allAdditionalPaymentsOfReservation(int reservation);
}
