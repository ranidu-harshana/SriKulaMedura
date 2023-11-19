package com.skm.skmserver.service;

import com.skm.skmserver.dto.PaymentDTO;
import com.skm.skmserver.dto.PaymentRequestDTO;

public interface PaymentService {
    PaymentDTO payOnline(int id);

    PaymentDTO payOnlinePublic(PaymentRequestDTO paymentRequestDTO);
}
