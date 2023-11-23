package com.skm.skmserver.controller;

import com.skm.skmserver.dto.PaymentDTO;
import com.skm.skmserver.dto.PaymentRequestDTO;
import com.skm.skmserver.dto.Reservation.BillNumberRequestDTO;
import com.skm.skmserver.dto.Reservation.PublicReservationDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.service.PaymentService;
import com.skm.skmserver.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/public")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class PublicController {
    private final ReservationService reservationService;
    private final PaymentService paymentService;

    @PostMapping("/reservation/get-by-billno")
    public PublicReservationDTO getByBillNumber(@RequestBody BillNumberRequestDTO billNumberRequestDTO) {
        return reservationService.getByBillNumber(billNumberRequestDTO);
    }

    @PostMapping("/online-payment")
    public PaymentDTO onlinePayment (@RequestBody PaymentRequestDTO paymentRequestDTO) {
        return paymentService.payOnlinePublic(paymentRequestDTO);
    }
}
