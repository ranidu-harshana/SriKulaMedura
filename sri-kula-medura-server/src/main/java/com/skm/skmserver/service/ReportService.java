package com.skm.skmserver.service;

import com.skm.skmserver.dto.Report.BetweenDatesDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ReportService {
    List<ReservationDTO> getReservations(BetweenDatesDTO betweenDatesDto);
}
