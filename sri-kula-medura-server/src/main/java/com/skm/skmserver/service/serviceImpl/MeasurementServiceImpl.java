package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.MeasurementDTO;
import com.skm.skmserver.entity.Measurement;
import com.skm.skmserver.service.MeasurementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MeasurementServiceImpl implements MeasurementService {
    @Override
    public List<MeasurementDTO> allMeasurements() {
        return null;
    }

    @Override
    public MeasurementDTO saveMeasurement(MeasurementDTO measurementDTO) {
        return null;
    }

    @Override
    public MeasurementDTO getMeasurement(int id) {
        return null;
    }

    @Override
    public MeasurementDTO updateMeasurement(MeasurementDTO measurementDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteMeasurement(int id) {
        return false;
    }

    @Override
    public MeasurementDTO getMeasurementDTOWithValues(Measurement measurement) {
        return null;
    }
}
