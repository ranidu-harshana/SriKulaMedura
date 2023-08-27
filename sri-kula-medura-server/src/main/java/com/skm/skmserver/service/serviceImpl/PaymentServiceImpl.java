package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.PaymentDTO;
import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.PaymentService;
import com.skm.skmserver.util.Helpers;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final ReservationRepository reservationRepository;

    @Override
    public PaymentDTO payOnline(int id) {
        Reservation reservation = reservationRepository.findById(id);
        double amountPayable = 1000;
        String merchantId = "1223817";
        String merchantSecret = "MzcwMTM0NzExNTE0MDY5MjU5MTgxMTg1OTYyNjc4Nzc5NDk4MTE1";
        String generatedHash = Helpers.generateHashForPayHere(merchantId, merchantSecret, reservation.getBill_number(), amountPayable);
        return PaymentDTO.builder()
                .amount_payable(amountPayable)
                .bill_number(reservation.getBill_number())
                .name(reservation.getCustomer().getUser().getName())
                .mobno(reservation.getCustomer().getUser().getMobile_no())
                .email(reservation.getCustomer().getUser().getEmail())
                .address(reservation.getCustomer().getUser().getAddress())
                .hash(generatedHash)
                .merchant_id(merchantId)
                .build();
    }
}
