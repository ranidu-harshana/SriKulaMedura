package com.skm.skmserver.service;

import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.dto.Reservation.UpdateReservationDTO;
import com.skm.skmserver.entity.Reservation;

import java.util.List;

public interface ReservationService {
    List<ReservationDTO> allReservations();
    ReservationDTO saveReservation(ReservationDTO noteDTO);
    ReservationDTO getReservation (int id);
    ReservationDTO updateReservation(UpdateReservationDTO noteDTO, int id);
    boolean deleteReservation(int id);
    ReservationDTO getReservationDTOWithValues(Reservation reservation);
}
