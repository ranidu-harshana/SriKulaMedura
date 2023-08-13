package com.skm.skmserver.controller;

import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.service.serviceImpl.InterimPaymentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/interim-payment")
@RequiredArgsConstructor
@CrossOrigin
public class InterimPaymentController {
    private final InterimPaymentServiceImpl interimPaymentService;

    @GetMapping("/")
    public List<InterimPaymentDTO> index(){
        return interimPaymentService.allInterimPayments();
    }

    @PostMapping("/")
    public InterimPaymentDTO store(@RequestBody InterimPaymentDTO interimPaymentDTO){
       return interimPaymentService.saveInterimPayment(interimPaymentDTO);
    }
}
