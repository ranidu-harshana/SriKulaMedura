package com.skm.skmserver.controller;

import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.service.serviceImpl.InterimPaymentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/interim-payment")
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

    @GetMapping("/{id}")
    public InterimPaymentDTO show(@PathVariable int id){
        return interimPaymentService.getInterimPayment(id);
    }

    @GetMapping("/create")
    public String create(){
        return "";
    }

    @PutMapping("/{id}")
    public InterimPaymentDTO update(@RequestBody InterimPaymentDTO interimPaymentDTO,@PathVariable int id){
        return interimPaymentService.updateInterimPayment(interimPaymentDTO,id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        return interimPaymentService.deleteInterimPayment(id) ?
                "Interim Payment successfully deleted" :
                "Interim Payment delete failed";
    }

}
