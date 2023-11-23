package com.skm.skmserver.controller;

import com.skm.skmserver.dto.PaymentDTO;
import com.skm.skmserver.service.PaymentService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/online-payment")
@RequiredArgsConstructor
@CrossOrigin
public class OnlinePaymentController {
    private final PaymentService paymentService;
    private static final Logger logger = LoggerFactory.getLogger(OnlinePaymentController.class);

    @GetMapping("/{reservation_id}")
    public PaymentDTO onlinePayment (@PathVariable int reservation_id) {
        return paymentService.payOnline(reservation_id);
    }

    @RequestMapping(
            path = "/notify_url",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE,
            produces = {
                    MediaType.APPLICATION_ATOM_XML_VALUE,
                    MediaType.APPLICATION_JSON_VALUE
            })
    public String NotifyPayment(MultiValueMap multiValueMap) {
        return "HELLO";
    }
}
