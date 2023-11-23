package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.MeasurementDTO;
import com.skm.skmserver.entity.Measurement;
import com.skm.skmserver.exceptions.ResourceNotFoundException;
import com.skm.skmserver.repo.MeasurementRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.MeasurementService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class MeasurementServiceImpl implements MeasurementService, MainService<MeasurementDTO, Measurement> {
    private final MeasurementRepository measurementRepository;
    private final ReservationRepository reservationRepository;

    private final MapAll<Measurement, MeasurementDTO> mapAll;

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
                .head(measurementDTO.getHead())
                .other(measurementDTO.getOther())
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
        return mapAll.mapAllAttributesToDTO(measurementRepository.findAllByReservationId(reservation), this);
    }

    @Override
    public MeasurementDTO getByTypeAndReservationId(String type, int reservation_id) {
        Optional<Measurement> measurement = measurementRepository.findByTypeAndReservationId(type, reservation_id);

        if (measurement.isEmpty()) throw new ResourceNotFoundException("No measurements found for this  type and reservation");

        return set(measurement.get());
    }

    @Override
    public MeasurementDTO set(Measurement measurement) {
        return MeasurementDTO.builder(measurement).build();
    }
}
