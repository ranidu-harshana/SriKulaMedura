package com.skm.skmserver.controller;

import com.skm.skmserver.dto.Report.BetweenDatesDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.service.ReportService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/report")
@RequiredArgsConstructor
@CrossOrigin
public class ReportController {
    private final ReportService reportService;

    @PostMapping("/reservations")
    public ResponseEntity<List<ReservationDTO>> getReservations (@RequestBody BetweenDatesDTO betweenDatesDto) {
        return new ResponseEntity<>(reportService.getReservations(betweenDatesDto), HttpStatus.OK);
    }
}
