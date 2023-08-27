package com.skm.skmserver.service;

import com.skm.skmserver.dto.PaymentDTO;

public interface PaymentService {
    PaymentDTO payOnline(int id);
}
