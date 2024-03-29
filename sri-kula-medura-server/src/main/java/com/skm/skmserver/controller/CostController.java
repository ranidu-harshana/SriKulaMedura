package com.skm.skmserver.controller;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.dto.CostDTO;
import com.skm.skmserver.dto.OtherCostDTO;
import com.skm.skmserver.entity.OtherCost;
import com.skm.skmserver.service.serviceImpl.CostServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/cost")
@RequiredArgsConstructor
@CrossOrigin
public class CostController {
    private final CostServiceImpl costService;

    @GetMapping("/")
    public List<CostDTO> index(){
        return costService.allCosts();
    }

    @GetMapping("/other")
    public List<OtherCostDTO> indexOther(){
        return costService.allOtherCosts();
    }

    @PostMapping("/main")
    public CostDTO store(@RequestBody CostDTO costDTO){
        return costService.saveCost(costDTO);
    }

    @PostMapping("/other")
    public OtherCostDTO storeOtherCost(@RequestBody OtherCostDTO otherCostDTO){
        return costService.saveOtherCost(otherCostDTO);
    }

    @GetMapping("/reservation/other/{reservation}")
    public List<OtherCostDTO> costsOfReservation(@PathVariable int reservation) {
        return costService.allCostsOfReservation(reservation);
    }

    @GetMapping("/reservation/main/{reservation}")
    public CostDTO mainCostsOfReservation(@PathVariable int reservation) {
        return costService.mainCostsOfReservation(reservation);
    }

    @GetMapping("/create")
    public String create(){
        return "";
    }

    @GetMapping("/{id}")
    public CostDTO show(@PathVariable int id){
        return costService.getCost(id);
    }

    @PutMapping("/{id}")
    public CostDTO update(@RequestBody CostDTO itemDTO, @PathVariable int id){
        return costService.updateCost(itemDTO, id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(costService.deleteCost(id)){
            return "Cost deleted successfully";
        }
        return "Cost delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
