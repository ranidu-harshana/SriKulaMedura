package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.ReservationDTO;
import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.repo.CustomerRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.ReservationService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService, MainService<ReservationDTO, Reservation> {
    private final ReservationRepository reservationRepository;
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;
    private final MapAll<Reservation, ReservationDTO> mapAll;

    @Override
    public List<ReservationDTO> allReservations() {
        return mapAll.mapAllAttributesToDTO(reservationRepository.findAll(), this);
    }

    @Override
    public ReservationDTO saveReservation(ReservationDTO reservationDTO) {
        Reservation reservation = reservationRepository.save(Reservation.builder()
                        .bill_number(reservationDTO.getBill_number())
                        .function_date(reservationDTO.getFunction_date())
                        .function_place(reservationDTO.getFunction_place())
                        .no_of_bestmen(reservationDTO.getNo_of_bestmen())
                        .no_of_pageboys(reservationDTO.getNo_of_pageboys())
                        .dressing_place(reservationDTO.getDressing_place())
                        .goingaway_change_place(reservationDTO.getGoingaway_change_place())
                        .status(reservationDTO.isStatus())
                        .measurement_date(reservationDTO.getMeasurement_date())
                        .customer(customerRepository.findById(reservationDTO.getCustomer_id()))
                        .user(userRepository.findById(reservationDTO.getUser_id()))
                        .build());
        return set(reservation);
    }

    @Override
    public ReservationDTO getReservation(int id) {
        Reservation reservation = reservationRepository.findById(id);
        return set(reservation);
    }

    @Override
    public ReservationDTO updateReservation(ReservationDTO reservationDTO, int id) {
        Reservation reservation = reservationRepository.findById(id);
        return set(reservationRepository.save(Reservation.builder()
                .function_place(reservation.getFunction_place())
                .no_of_bestmen(reservation.getNo_of_bestmen())
                .no_of_pageboys(reservation.getNo_of_pageboys())
                .dressing_place(reservation.getDressing_place())
                .goingaway_change_place(reservation.getGoingaway_change_place())
                .status(reservation.isStatus())
                .measurement_date(reservation.getMeasurement_date())
                .customer(customerRepository.findById(reservation.getCustomer().getId()))
                .user(userRepository.findById(reservation.getUser().getId()))
                .build()));
    }

    @Override
    public boolean deleteReservation(int id) {
        if (reservationRepository.findById(id) == null) {
            return false;
        }
        reservationRepository.deleteById(id);
        return true;
    }

    @Override
    public ReservationDTO set(Reservation reservation) {
        return ReservationDTO.builder()
                .id(reservation.getId())
                .bill_number(reservation.getBill_number())
                .function_date(reservation.getFunction_date())
                .function_place(reservation.getFunction_place())
                .no_of_bestmen(reservation.getNo_of_bestmen())
                .no_of_pageboys(reservation.getNo_of_pageboys())
                .dressing_place(reservation.getDressing_place())
                .goingaway_change_place(reservation.getGoingaway_change_place())
                .status(reservation.isStatus())
                .measurement_date(reservation.getMeasurement_date())
                .customer_id(reservation.getCustomer().getId())
                .user_id(reservation.getUser().getId())
                .build();
    }
}
