package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.MeasurementDTO;
import com.skm.skmserver.entity.Measurement;
import com.skm.skmserver.repo.MeasurementRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.MeasurementService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class MeasurementServiceImpl implements MeasurementService, MainService<MeasurementDTO, Measurement> {
    private final MeasurementRepository measurementRepository;
    private final ReservationRepository reservationRepository;
    private final Measurement newMeasurement;

    @Override
    public List<MeasurementDTO> allMeasurements() {
        return null;
    }

    @Override
    public MeasurementDTO saveMeasurement(MeasurementDTO measurementDTO) {
        Measurement measurement = measurementRepository.save(Measurement.builder()
                .shoulder(measurementDTO.getShoulder())
                .chest(measurementDTO.getChest())
                .weist(measurementDTO.getWeist())
                .tlength(measurementDTO.getTlength())
                .ssize(measurementDTO.getSsize())
                .arm(measurementDTO.getArm())
                .jheight(measurementDTO.getJheight())
                .type(measurementDTO.getType())
                .name(measurementDTO.getName())
                .reservation(reservationRepository.findById(measurementDTO.getReservation_id()))
                .build());
        return set(measurement);
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
    public List<MeasurementDTO> allMeasurementsOfReservation(int reservation) {
        return null;
    }

    @Override
    public MeasurementDTO set(Measurement measurement) {
        return MeasurementDTO.builder(measurement).build();
    }
}
