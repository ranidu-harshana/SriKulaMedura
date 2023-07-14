package com.skm.skmserver.controller;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.service.serviceImpl.AdditionalPaymentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/additional-payment")
@RequiredArgsConstructor
public class AdditionalPaymentController {
    private final AdditionalPaymentServiceImpl additionalPaymentService;

    @GetMapping("/")
    public List<AdditionalPaymentDTO> index() {
        return additionalPaymentService.allAdditionalPayments();
    }

    @PostMapping("/")
    public AdditionalPaymentDTO store(@RequestBody AdditionalPaymentDTO additionalPaymentDTO) {
        return additionalPaymentService.saveAdditionalPayment(additionalPaymentDTO);
    }

    @GetMapping("/create")
    public String create(){
            return"";
    }

    @GetMapping("/{id}")
    public AdditionalPaymentDTO show(@PathVariable int id) {
        return additionalPaymentService.getAdditionalPayment(id);
    }

}
