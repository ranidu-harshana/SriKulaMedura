package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.*;
import com.skm.skmserver.dto.Customer.CustomerUserDTO;
import com.skm.skmserver.dto.Report.BetweenDatesDTO;
import com.skm.skmserver.dto.Reservation.*;
import com.skm.skmserver.entity.Cost;
import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.enums.Role;
import com.skm.skmserver.exceptions.ResourceNotFoundException;
import com.skm.skmserver.repo.*;
import com.skm.skmserver.service.AdditionalPaymentService;
import com.skm.skmserver.service.InterimPaymentService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.ReservationService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

import static com.skm.skmserver.util.GenerateBillNumber.generateBillNumber;

@Service
@Transactional
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService, MainService<ReservationDTO, Reservation> {
    private final AdditionalPaymentService additionalPaymentService;
    private final InterimPaymentService interimPaymentService;
    private final ReservationRepository reservationRepository;
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;
    private final BillingRepository billingRepository;
    private final BranchRepo branchRepo;
    private final UserServiceImpl userService;
    private final MapAll<Reservation, ReservationDTO> mapAll;
    private Reservation newReservation;
    private User newUser;
    private final Cost newCost;
    private final CostRepository costRepository;

    @Override
    public List<ReservationDTO> allReservations() {
        return mapAll.mapAllAttributesToDTO(reservationRepository.findAll(), this);
    }

    @Override
    public ReservationDTO saveReservation(ReservationCustomerDTO reservationCusDTO) {

        UserDTO userDTO = userService.saveUser(UserDTO.builder()
                .name(reservationCusDTO.getName())
                .nic(reservationCusDTO.getNic())
                .email("EmailAddress"+Math.random())
                .mobile_no(reservationCusDTO.getMobile_no1())
                .role(Role.CUSTOMER)
                .address(reservationCusDTO.getAddress())
                .build());

        Reservation reservation = reservationRepository.save(Reservation.builder(newReservation)
                        .bill_number(generateBillNumber(reservationCusDTO.getBranch_id(), userDTO.getId()))
                        .function_date(reservationCusDTO.getFunction_date())
                        .status(true)
                        .customer(customerRepository.findByUserId(userDTO.getId()))
                        .user(userRepository.findById(reservationCusDTO.getUser_id()))
                        .branch(branchRepo.findById(reservationCusDTO.getBranch_id()))
                        .build());

        costRepository.save(Cost.builder(newCost)
                .reservation(reservation)
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

    @Override
    public List<ReservationDTO> allReservationsByDate(ReservationDateDTO reservationDateDTO) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d/M/yyyy", Locale.ENGLISH);
        LocalDate functionDate = LocalDate.parse(reservationDateDTO.getFunction_date(), formatter);
        return mapAll.mapAllAttributesToDTO(reservationRepository.findAllByFunction_date(functionDate), this);
    }

    @Override
    public List<ReservationDTO> getReservationsBetweenDates(BetweenDatesDTO betweenDatesDto) {
        return mapAll.mapAllAttributesToDTO(reservationRepository.findAllByFunction_dateBetween(
                betweenDatesDto.getFromDate(), betweenDatesDto.getToDate()), this);
    }

    public ReservationDTO saveBestMenPageBoysCount(BestMenPageBoysCountDTO bestMenPageBoysCountDTO) {
        Reservation reservation = reservationRepository.findById(bestMenPageBoysCountDTO.getReservation_id());
        return set(reservationRepository.save(Reservation.builder(reservation)
                .no_of_bestmen(bestMenPageBoysCountDTO.getNo_of_bestmen())
                .no_of_pageboys(bestMenPageBoysCountDTO.getNo_of_pageboys())
                .build()));
    }

    @Override
    public ReservationDTO cancelRescheduleReservation(ReservationCancelDTO reservationCancelDTO) {
        Reservation reservation = reservationRepository.findById(reservationCancelDTO.getReservationId());
        return set(reservationRepository.save(Reservation.builder(reservation)
                .status(reservationCancelDTO.isCanceled()).build()));
    }

    @Override
    public ReservationDTO postponeReservation(PostponeResRequestDTO postponeResRequestDTO) {
        Reservation reservation = reservationRepository.findById(postponeResRequestDTO.getReservationId());
        return set(reservationRepository.save(Reservation.builder(reservation)
                .function_date(postponeResRequestDTO.getPostponeDate())
                .before_postpone_date(reservation.getFunction_date())
                .build()));
    }

    @Override
    public PublicReservationDTO getByBillNumber(BillNumberRequestDTO billNumberRequestDTO) {
        Optional<Reservation> reservation = reservationRepository.findByBill_number(billNumberRequestDTO.getBillNumber());

        if (reservation.isEmpty()) throw new ResourceNotFoundException("Reservation not found")
                .additionalDetails("bill no", billNumberRequestDTO.getBillNumber());

        List<AdditionalPaymentDTO> additionalPayments = additionalPaymentService.allAdditionalPaymentsOfReservation(reservation.get().getId());
        List<InterimPaymentDTO> interimPayments = interimPaymentService.allInterimPaymentsOfReservation(reservation.get().getId());

        return PublicReservationDTO.builder()
                .reservationId(reservation.get().getId())
                .bill_number(reservation.get().getBill_number())
                .customerName(reservation.get().getCustomer().getUser().getName())
                .dueAmount(reservation.get().getBilling().getAmount_payable())
                .additionalPayments(additionalPayments)
                .interimPayments(interimPayments)
                .build();
    }

    @Override
    public ReservationDTO set(Reservation reservation) {
        User user = userRepository.findById(reservation.getCustomer().getUser().getId());
        CustomerUserDTO customerUserDTO = CustomerUserDTO.builder()
                .id(reservation.getCustomer().getId())
                .name(user.getName())
                .nic(user.getNic())
                .address(user.getAddress())
                .mobile_no1(user.getMobile_no())
                .mobile_no2(reservation.getCustomer().getMobile_no())
                .status(reservation.getCustomer().isStatus())
                .discount(reservation.getCustomer().getDiscount())
                .build();
        double amount_payable = 0.0;
        try {
            amount_payable = billingRepository.findByReservation(reservation).getBill_amount(); // TODO: change this - calculate
        } catch (Exception e) {
            amount_payable = 0.0;
        }
        return ReservationDTO.builder(reservation)
                .customer(customerUserDTO)
                .amount_payable(amount_payable)
                .build();
    }
}
