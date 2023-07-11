package com.skm.skmserver.service;

import com.skm.skmserver.dto.MeasurementDTO;
import com.skm.skmserver.entity.Measurement;

import java.util.List;

public interface MeasurementService {
    List<MeasurementDTO> allMeasurements();
    MeasurementDTO saveMeasurement(MeasurementDTO measurementDTO);
    MeasurementDTO getMeasurement (int id);
    MeasurementDTO updateMeasurement(MeasurementDTO measurementDTO, int id);
    boolean deleteMeasurement(int id);
    MeasurementDTO getMeasurementDTOWithValues(Measurement measurement);
}
