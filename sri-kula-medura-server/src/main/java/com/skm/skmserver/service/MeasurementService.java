package com.skm.skmserver.service;

import com.skm.skmserver.dto.MeasurementDTO;
import com.skm.skmserver.dto.Measurement.UpdateMeasurementDTO;

import java.util.List;

public interface MeasurementService {
    List<MeasurementDTO> allMeasurements();
    MeasurementDTO saveMeasurement(MeasurementDTO measurementDTO);
    MeasurementDTO getMeasurement (int id);
    MeasurementDTO updateMeasurement(UpdateMeasurementDTO measurementDTO, int id);
    boolean deleteMeasurement(int id);
}
