package com.skm.skmserver.controller;

import com.skm.skmserver.dto.AdditionalPayment.AdditionalPaymetDTO;
import com.skm.skmserver.service.serviceImpl.AdditionalPaymentServiceImpl;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "api/v1/additional-payment")
@CrossOrigin
public class AdditionalPaymentController {
    private final AdditionalPaymentServiceImpl additionalPaymentServiceimpl;

    public AdditionalPaymentController(AdditionalPaymentServiceImpl additionalPaymentServiceimpl){
        this.additionalPaymentServiceimpl = additionalPaymentServiceimpl;
    }

    @GetMapping("/")
    public String index(){
        return "Additional Payments";
    }

    @PostMapping("/")
    public AdditionalPaymetDTO store(@RequestBody AdditionalPaymetDTO additionalPaymetDTO){
        return additionalPaymentServiceimpl.saveAdditionalPayment(additionalPaymetDTO);
    }

    @GetMapping("/create")
    public String create(){
        return "ap created";
    }

    @PutMapping("/{id}")
    public String show(@PathVariable String id){
        return "Id " +  id ;
    }

    @PutMapping("/{id}")
    public String update(@RequestBody AdditionalPaymetDTO additionalPaymetDTO,@PathVariable String id){
        return "Updated " + id;
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        return "Deleted " + id;
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable String id){
        return "Edit " + id;
    }
}
