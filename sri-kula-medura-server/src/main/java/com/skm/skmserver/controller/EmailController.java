package com.skm.skmserver.controller;

import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.Email.TransactionEmailDTO;
import com.skm.skmserver.service.EmailService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/v1/email")
@CrossOrigin
@RequiredArgsConstructor
public class EmailController {
    private final EmailService emailService;

    @PostMapping("/to-customer")
    public CommonBooleanDTO sendEmail(@RequestBody TransactionEmailDTO transactionEmailDTO) {
        return emailService.sendTransactionInvoiceEmail(transactionEmailDTO);
    }
}
