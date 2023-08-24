package com.skm.skmserver.controller;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.service.serviceImpl.AdditionalPaymentServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/additional-payment")
@RequiredArgsConstructor
@CrossOrigin
public class AdditionalPaymentController {
    private final AdditionalPaymentServiceImpl additionalPaymentService;

    @GetMapping("/")
    public List<AdditionalPaymentDTO> index() {
        return additionalPaymentService.allAdditionalPayments();
    }

    @GetMapping("/reservation/{reservation}")
    public List<AdditionalPaymentDTO> additionalPaymentsOfReservation(@PathVariable int reservation) {
        return additionalPaymentService.allAdditionalPaymentsOfReservation(reservation);
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

    @PutMapping("/{id}")
    public AdditionalPaymentDTO update(@RequestBody AdditionalPaymentDTO additionalPaymentDTO,@PathVariable int id){
        return additionalPaymentService.updateAdditionalPayment(additionalPaymentDTO,id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(additionalPaymentService.deleteAdditionalPayment(id)){
            return "Reservation deleted successfully";
        }
        return "Reservation delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }

}
