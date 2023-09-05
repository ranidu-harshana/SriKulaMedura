package com.skm.skmserver.service;

import com.skm.skmserver.dto.Reservation.ReservationCustomerDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.dto.Reservation.ReservationDateDTO;

import java.util.List;

public interface ReservationService {
    List<ReservationDTO> allReservations();
    ReservationDTO saveReservation(ReservationCustomerDTO reservationCusDTO);
    ReservationDTO getReservation (int id);
    ReservationDTO updateReservation(ReservationDTO reservationDTO, int id);
    boolean deleteReservation(int id);

    List<ReservationDTO> allReservationsByDate(ReservationDateDTO reservationDateDTO);
}
