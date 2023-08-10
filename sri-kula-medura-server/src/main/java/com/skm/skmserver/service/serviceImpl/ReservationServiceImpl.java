package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.*;
import com.skm.skmserver.dto.Customer.CustomerUserDTO;
import com.skm.skmserver.dto.Reservation.BestMenPageBoysCountDTO;
import com.skm.skmserver.dto.Reservation.ReservationCustomerDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.enums.Role;
import com.skm.skmserver.repo.BranchRepo;
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

import static com.skm.skmserver.util.GenerateBillNumber.generateBillNumber;

@Service
@Transactional
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService, MainService<ReservationDTO, Reservation> {
    private final ReservationRepository reservationRepository;
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;
    private final BranchRepo branchRepo;
    private final UserServiceImpl userService;
    private final MapAll<Reservation, ReservationDTO> mapAll;
    private Reservation newReservation;
    private User newUser;


    @Override
    public List<ReservationDTO> allReservations() {
        return mapAll.mapAllAttributesToDTO(reservationRepository.findAll(), this);
    }

    @Override
    public ReservationDTO saveReservation(ReservationCustomerDTO reservationCusDTO) {
        UserDTO userDTO = userService.saveUser(UserDTO.builder()
                .name(reservationCusDTO.getName())
                .email("EmailAddress"+Math.random())
                .mobile_no(reservationCusDTO.getMobile_no1())
                .role(Role.CUSTOMER)
                .address(reservationCusDTO.getAddress())
                .password("1234")
                .build());
        Reservation reservation = reservationRepository.save(Reservation.builder(newReservation)
                        .bill_number(generateBillNumber(reservationCusDTO.getBranch_id(), userDTO.getId()))
                        .function_date(reservationCusDTO.getFunction_date())
                        .status(true)
                        .customer(customerRepository.findByUserId(userDTO.getId()))
                        .user(userRepository.findById(reservationCusDTO.getUser_id()))
                        .branch(branchRepo.findById(reservationCusDTO.getBranch_id()))
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
        return set(reservationRepository.save(Reservation.builder(reservation)
                .function_place(reservationDTO.getFunction_place())
                .no_of_bestmen(reservationDTO.getNo_of_bestmen())
                .no_of_pageboys(reservationDTO.getNo_of_pageboys())
                .dressing_place(reservationDTO.getDressing_place())
                .goingaway_change_place(reservationDTO.getGoingaway_change_place())
                .measurement_date(reservationDTO.getMeasurement_date())
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

    public ReservationDTO saveBestMenPageBoysCount(BestMenPageBoysCountDTO bestMenPageBoysCountDTO) {
        Reservation reservation = reservationRepository.findById(bestMenPageBoysCountDTO.getReservation_id());
        return set(reservationRepository.save(Reservation.builder(reservation)
                .no_of_bestmen(bestMenPageBoysCountDTO.getNo_of_bestmen())
                .no_of_pageboys(bestMenPageBoysCountDTO.getNo_of_pageboys())
                .build()));
    }

    @Override
    public ReservationDTO set(Reservation reservation) {
        User user = userRepository.findById(reservation.getCustomer().getUser().getId());
        CustomerUserDTO customerUserDTO = CustomerUserDTO.builder()
                .id(reservation.getCustomer().getId())
                .name(user.getName())
                .address(user.getAddress())
                .mobile_no1(user.getMobile_no())
                .mobile_no2(reservation.getCustomer().getMobile_no())
                .status(reservation.getCustomer().isStatus())
                .discount(reservation.getCustomer().getDiscount())
                .build();
        return ReservationDTO.builder(reservation)
                .customer(customerUserDTO)
                .build();
    }
}
