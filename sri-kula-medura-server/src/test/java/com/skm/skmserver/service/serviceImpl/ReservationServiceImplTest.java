package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Reservation.ReservationCustomerDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.dto.UserDTO;
import com.skm.skmserver.entity.Cost;
import com.skm.skmserver.entity.Customer;
import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.entity.User;
import com.skm.skmserver.enums.Role;
import com.skm.skmserver.repo.*;
import com.skm.skmserver.service.AdditionalPaymentService;
import com.skm.skmserver.service.InterimPaymentService;
import com.skm.skmserver.util.MapAll;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ReservationServiceImplTest {

    @Mock
    private ReservationRepository reservationRepository;

    @Mock
    private AdditionalPaymentService additionalPaymentService;

    @Mock
    private InterimPaymentService interimPaymentService;
    @Mock
    private CustomerRepository customerRepository;
    @Mock
    private UserRepository userRepository;
    @Mock
    private BillingRepository billingRepository;
    @Mock
    private BranchRepo branchRepo;
    @Mock
    private UserServiceImpl userService;
    @Mock
    private MapAll<Reservation, ReservationDTO> mapAll;
    @Mock
    private Reservation newReservation;
    @Mock
    private User newUser;
    @Mock
    private Cost newCost;
    @Mock
    private CostRepository costRepository;

    @InjectMocks
    private ReservationServiceImpl reservationService;

    @Test
    void allReservations() {
        List<Reservation> reservationList = new ArrayList<>();
        Reservation reservation = new Reservation();
        reservationList.add(reservation);

        when(reservationRepository.findAll()).thenReturn(reservationList);

        List<ReservationDTO> reservations = reservationService.allReservations();

        assertNotNull(reservations);
    }

    @Test
    void saveReservation() {
        Reservation reservation = new Reservation();
        reservation.setBill_number("RES60667700");

        UserDTO userDTO = new UserDTO();
        Cost cost = new Cost();
        userDTO.setEmail("EmailAddress");
        userDTO.setRole(Role.CUSTOMER);

        when(reservationRepository.save(reservation)).thenReturn(reservation);
        when(userService.saveUser(userDTO)).thenReturn(userDTO);
        when(costRepository.save(cost)).thenReturn(cost);

        ReservationDTO response = reservationService.saveReservation(ReservationCustomerDTO.builder().build());

        assertNotNull(response);
    }

    @Test
    void getReservation() {
        Customer customer = new Customer();
        newUser.setId(1);
        customer.setUser(newUser);
        newReservation.setCustomer(customer);
        when(reservationRepository.findById(1)).thenReturn(newReservation);
        when(userRepository.findById(1)).thenReturn(newUser);

        ReservationDTO response = reservationService.getReservation(1);

        assertNotNull(response);
    }

    @Test
    void updateReservation() {
    }

    @Test
    void deleteReservation() {
    }

    @Test
    void allReservationsByDate() {
    }

    @Test
    void getReservationsBetweenDates() {
    }

    @Test
    void saveBestMenPageBoysCount() {
    }

    @Test
    void cancelRescheduleReservation() {
    }

    @Test
    void postponeReservation() {
    }

    @Test
    void getByBillNumber() {
    }

    @Test
    void set() {
    }
}