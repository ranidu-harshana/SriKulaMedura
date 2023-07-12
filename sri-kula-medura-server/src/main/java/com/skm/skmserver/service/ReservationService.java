package com.skm.skmserver.service;

import com.skm.skmserver.dto.ReservationDTO;

import java.util.List;

public interface ReservationService {
    List<ReservationDTO> allReservations();
    ReservationDTO saveReservation(ReservationDTO noteDTO);
    ReservationDTO getReservation (int id);
    ReservationDTO updateReservation(ReservationDTO noteDTO, int id);
    boolean deleteReservation(int id);
}
