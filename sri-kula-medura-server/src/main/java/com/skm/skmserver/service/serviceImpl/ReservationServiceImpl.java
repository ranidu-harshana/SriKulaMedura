package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.dto.Reservation.UpdateReservationDTO;
import com.skm.skmserver.service.ReservationService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {
    @Override
    public List<ReservationDTO> allReservations() {
        return null;
    }

    @Override
    public ReservationDTO saveReservation(ReservationDTO noteDTO) {
        return null;
    }

    @Override
    public ReservationDTO getReservation(int id) {
        return null;
    }

    @Override
    public ReservationDTO updateReservation(UpdateReservationDTO noteDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteReservation(int id) {
        return false;
    }
}
