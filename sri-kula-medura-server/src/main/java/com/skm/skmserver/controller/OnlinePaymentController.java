package com.skm.skmserver.controller;

import com.skm.skmserver.dto.PaymentDTO;
import com.skm.skmserver.dto.Test;
import com.skm.skmserver.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/online-payment")
@RequiredArgsConstructor
@CrossOrigin
public class OnlinePaymentController {
    private final PaymentService paymentService;

    @GetMapping("/{reservation_id}")
    public PaymentDTO onlinePayment (@PathVariable int reservation_id) {
        return paymentService.payOnline(reservation_id);
    }

    @PostMapping("/notify_url")
    public String NotifyPayment(@RequestBody Test test) {
        System.out.println(test.getMd5sig());
        return test.getMd5sig();
    }
}
