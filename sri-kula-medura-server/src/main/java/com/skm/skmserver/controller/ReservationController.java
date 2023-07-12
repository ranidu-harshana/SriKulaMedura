package com.skm.skmserver.controller;

import com.skm.skmserver.dto.ReservationDTO;
import com.skm.skmserver.service.serviceImpl.ReservationServiceImpl;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/reservation")
public class ReservationController {
    private final ReservationServiceImpl reservationService;

    public ReservationController(ReservationServiceImpl reservationServiceImpl) {
        this.reservationService = reservationServiceImpl;
    }

    @GetMapping("/")
    public List<ReservationDTO> index(){
        return reservationService.allReservations();
    }

    @PostMapping("/")
    public ReservationDTO store(@RequestBody ReservationDTO reservationDTO){
        return reservationService.saveReservation(reservationDTO);
    }

    @GetMapping("/create")
    public String create(){
        return "";
    }

    @GetMapping("/{id}")
    public ReservationDTO show(@PathVariable int id){
        return reservationService.getReservation(id);
    }

    @PutMapping("/{id}")
    public ReservationDTO update(@RequestBody ReservationDTO itemDTO, @PathVariable int id){
        return reservationService.updateReservation(itemDTO, id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id){
        if(reservationService.deleteReservation(id)){
            return "Reservation deleted successfully";
        }
        return "Reservation delete failed";
    }

    @GetMapping("/{id}/edit")
    public String edit(@PathVariable int id){
        return "edit";
    }
}
