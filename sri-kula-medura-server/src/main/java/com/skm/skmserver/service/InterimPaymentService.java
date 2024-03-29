package com.skm.skmserver.service;

import com.skm.skmserver.dto.InterimPaymentDTO;

import java.util.List;

public interface InterimPaymentService {
    List<InterimPaymentDTO> allInterimPayments();
    InterimPaymentDTO saveInterimPayment(InterimPaymentDTO interimPaymentDTO) throws InterruptedException;

    List<InterimPaymentDTO> allInterimPaymentsOfReservation(int reservation);
}
