package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.dto.PaymentDTO;
import com.skm.skmserver.dto.PaymentRequestDTO;
import com.skm.skmserver.entity.InterimPayment;
import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.PaymentService;
import com.skm.skmserver.util.Helpers;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class PaymentServiceImpl implements PaymentService {
    private final ReservationRepository reservationRepository;
    private final InterimPaymentServiceImpl interimPaymentService;
    private final InterimPayment newInterimPayment;

    @Value("${merchant.secret}")
    private String merchantSecret;

    @Value("${merchant.id}")
    private String merchantId;

    @Override
    public PaymentDTO payOnline(int id) {
        Reservation reservation = reservationRepository.findById(id);
        double amountPayable = reservation.getBilling().getAmount_payable();

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

    @Override
    public PaymentDTO payOnlinePublic(PaymentRequestDTO paymentRequestDTO) {
        Reservation reservation = reservationRepository.findById(paymentRequestDTO.getReservationId());
        double amountPayable = paymentRequestDTO.getAmount();

        InterimPaymentDTO interimPa = InterimPaymentDTO.builder(newInterimPayment)
                .interim_payment(paymentRequestDTO.getAmount())
                .reservation_id(reservation.getId())
                .build();
        interimPaymentService.saveInterimPayment(interimPa);

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
