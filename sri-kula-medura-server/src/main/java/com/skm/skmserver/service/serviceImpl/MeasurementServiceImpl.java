package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Measurement.MeasurementDTO;
import com.skm.skmserver.dto.Measurement.UpdateMeasurementDTO;
import com.skm.skmserver.service.MeasurementService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
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
    public MeasurementDTO updateMeasurement(UpdateMeasurementDTO measurementDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteMeasurement(int id) {
        return false;
    }
}
