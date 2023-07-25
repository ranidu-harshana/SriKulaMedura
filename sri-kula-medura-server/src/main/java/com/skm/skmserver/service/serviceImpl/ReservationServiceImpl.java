package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CustomerUserDTO;
import com.skm.skmserver.dto.ReservationCustomerDTO;
import com.skm.skmserver.dto.ReservationDTO;
import com.skm.skmserver.dto.UserDTO;
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

import java.text.SimpleDateFormat;
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
    private final BranchServiceImpl branchService;
    private final CustomerServiceImpl customerService;
    private final UserServiceImpl userService;
    private final MapAll<Reservation, ReservationDTO> mapAll;

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
                .build());
        Reservation reservation = reservationRepository.save(Reservation.builder()
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
        return set(reservationRepository.save(Reservation.builder()
                .id(reservation.getId())
                .bill_number(reservation.getBill_number())
                .function_date(reservation.getFunction_date())
                .function_place(reservationDTO.getFunction_place())
                .no_of_bestmen(reservationDTO.getNo_of_bestmen())
                .no_of_pageboys(reservationDTO.getNo_of_pageboys())
                .dressing_place(reservationDTO.getDressing_place())
                .goingaway_change_place(reservationDTO.getGoingaway_change_place())
                .status(reservation.isStatus())
                .measurement_date(reservationDTO.getMeasurement_date())
                .created_at(reservation.getCreated_at())
                .customer(customerRepository.findById(reservation.getCustomer().getId()))
                .user(userRepository.findById(reservation.getUser().getId()))
                .branch(branchRepo.findById(reservation.getBranch().getId()))
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
                .created_at(reservation.getCreated_at())
                .updated_at(reservation.getUpdated_at())
                .date(new SimpleDateFormat("EEEE, MMMM dd, YYYY").format(reservation.getCreated_at()))
                .customer_id(reservation.getCustomer().getId())
                .customer(customerUserDTO)
                .user_id(reservation.getUser().getId())
                .branch_id(reservation.getBranch().getId())
                .branch_name(reservation.getBranch().getName())
                .build();
    }
}
