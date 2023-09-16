package com.skm.skmserver.service;

import com.skm.skmserver.dto.MeasurementDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MeasurementService {
    List<MeasurementDTO> allMeasurements();
    MeasurementDTO saveMeasurement(MeasurementDTO measurementDTO);
    MeasurementDTO getMeasurement (int id);
    MeasurementDTO updateMeasurement(MeasurementDTO measurementDTO, int id);
    boolean deleteMeasurement(int id);
    List<MeasurementDTO> allMeasurementsOfReservation(int reservation);

    MeasurementDTO getByTypeAndReservationId(String type, int reservation_id);
}
