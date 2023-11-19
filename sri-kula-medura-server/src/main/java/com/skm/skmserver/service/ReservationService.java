package com.skm.skmserver.service;

import com.skm.skmserver.dto.Report.BetweenDatesDTO;
import com.skm.skmserver.dto.Reservation.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReservationService {
    List<ReservationDTO> allReservations();
    ReservationDTO saveReservation(ReservationCustomerDTO reservationCusDTO);
    ReservationDTO getReservation (int id);
    ReservationDTO updateReservation(ReservationDTO reservationDTO, int id);
    boolean deleteReservation(int id);

    List<ReservationDTO> allReservationsByDate(ReservationDateDTO reservationDateDTO);

    List<ReservationDTO> getReservationsBetweenDates(BetweenDatesDTO betweenDatesDto);

    ReservationDTO saveBestMenPageBoysCount(BestMenPageBoysCountDTO bestMenPageBoysCountDTO);

    ReservationDTO cancelRescheduleReservation(ReservationCancelDTO reservationCancelDTO);

    ReservationDTO postponeReservation(PostponeResRequestDTO postponeResRequestDTO);

    ReservationDTO getByBillNumber(BillNumberRequestDTO billNumberRequestDTO);
}
