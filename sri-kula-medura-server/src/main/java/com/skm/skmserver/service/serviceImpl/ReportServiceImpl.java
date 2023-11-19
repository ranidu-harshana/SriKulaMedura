package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Report.BetweenDatesDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.service.ReportService;
import com.skm.skmserver.service.ReservationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ReportServiceImpl implements ReportService {
    private final ReservationService reservationService;

    @Override
    public List<ReservationDTO> getReservations(BetweenDatesDTO betweenDatesDto) {
        return reservationService.getReservationsBetweenDates(betweenDatesDto);
    }
}
