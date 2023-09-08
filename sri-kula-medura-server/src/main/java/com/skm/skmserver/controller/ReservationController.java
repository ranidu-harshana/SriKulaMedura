package com.skm.skmserver.controller;

import com.skm.skmserver.dto.Reservation.BestMenPageBoysCountDTO;
import com.skm.skmserver.dto.Reservation.ReservationCustomerDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.dto.Reservation.ReservationDateDTO;
import com.skm.skmserver.service.serviceImpl.ReservationServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

@RestController
@RequestMapping(value = "api/v1/reservation")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ReservationController {
    private final ReservationServiceImpl reservationService;

    @GetMapping("/")
    public List<ReservationDTO> index(){
        return reservationService.allReservations();
    }

    @PostMapping("/")
    public ReservationDTO store(@RequestBody ReservationCustomerDTO reservationCusDTO){
        return reservationService.saveReservation(reservationCusDTO);
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
    public ReservationDTO update(@RequestBody ReservationDTO reservationDTO, @PathVariable int id){
        return reservationService.updateReservation(reservationDTO, id);
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

    @PostMapping("/bestmenpageboys/count")
    public ReservationDTO saveBestMenPageBoysCount(@RequestBody BestMenPageBoysCountDTO bestMenPageBoysCountDTO) {
        return reservationService.saveBestMenPageBoysCount(bestMenPageBoysCountDTO);
    }

    @PostMapping("/reservations/by-date")
    public List<ReservationDTO> getReservationsByDate(@RequestBody ReservationDateDTO reservationDateDTO) {
        return reservationService.allReservationsByDate(reservationDateDTO);
    }
}
