package com.skm.skmserver.controller;

import com.skm.skmserver.dto.MeasurementDTO;
import com.skm.skmserver.exceptions.ResourceNotFoundException;
import com.skm.skmserver.service.MeasurementService;
import com.skm.skmserver.service.serviceImpl.MeasurementServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "api/v1/measurements")
@CrossOrigin
@RequiredArgsConstructor
public class MeasurementController {
    private final MeasurementService measurementService;

    @GetMapping("/")
    public List<MeasurementDTO> index() {
        return measurementService.allMeasurements();
    }

    @GetMapping("/reservation/{reservation}")
    public List<MeasurementDTO> additionalPaymentsOfReservation(@PathVariable int reservation) {
        return measurementService.allMeasurementsOfReservation(reservation);
    }

    @PostMapping("/")
    public MeasurementDTO store(@RequestBody MeasurementDTO additionalPaymentDTO) {
        return measurementService.saveMeasurement(additionalPaymentDTO);
    }

    @GetMapping("/{id}")
    public MeasurementDTO show(@PathVariable int id) {
        return measurementService.getMeasurement(id);
    }

    @PutMapping("/{id}")
    public MeasurementDTO update(@RequestBody MeasurementDTO additionalPaymentDTO,@PathVariable int id){
        return measurementService.updateMeasurement(additionalPaymentDTO,id);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        if(measurementService.deleteMeasurement(id)){
            return "Reservation deleted successfully";
        }
        throw new ResourceNotFoundException("Reservation deleted failed").additionalDetails("id", id);
    }
}
