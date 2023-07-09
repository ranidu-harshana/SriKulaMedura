package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Item.ItemDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.dto.Reservation.UpdateReservationDTO;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.entity.Reservation;
import com.skm.skmserver.repo.CustomerRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.repo.UserRepository;
import com.skm.skmserver.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {
    private final ReservationRepository reservationRepository;
    private final CustomerRepository customerRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public ReservationServiceImpl(ReservationRepository reservationRepository, CustomerRepository customerRepository, UserRepository userRepository, ModelMapper modelMapper) {
        this.reservationRepository = reservationRepository;
        this.customerRepository = customerRepository;
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ReservationDTO> allReservations() {
        return reservationRepository.findAll()
                .stream()
                .map(reservation -> modelMapper.map(reservation, ReservationDTO.class)).toList();
    }

    @Override
    public ReservationDTO saveReservation(ReservationDTO reservationDTO) {
        Reservation reservation = modelMapper.map(reservationDTO, Reservation.class);
        reservation.setCustomer(customerRepository.findById(reservationDTO.getCustomer_id()));
        reservation.setUser(userRepository.findById(reservationDTO.getUser_id()));
        reservationRepository.save(reservation);
        ReservationDTO dto = modelMapper.map(reservation, ReservationDTO.class);
        dto.setCustomer_id(reservationDTO.getCustomer_id());
        dto.setUser_id(reservationDTO.getUser_id());
        return dto;
    }

    @Override
    public ReservationDTO getReservation(int id) {
        return modelMapper.map(reservationRepository.findById(id), ReservationDTO.class);
    }

    @Override
    public ReservationDTO updateReservation(UpdateReservationDTO reservationDTO, int id) {
        Reservation reservation = reservationRepository.findById(id);
        modelMapper.map(reservationDTO, reservation);
        reservation.setCustomer(customerRepository.findById(reservationDTO.getCustomer_id()));
        reservation.setUser(userRepository.findById(reservationDTO.getUser_id()));
        ReservationDTO dto = modelMapper.map(reservationRepository.save(reservation), ReservationDTO.class);
        dto.setCustomer_id(reservationDTO.getCustomer_id());
        dto.setUser_id(reservationDTO.getUser_id());
        return dto;
    }

    @Override
    public boolean deleteReservation(int id) {
        if (reservationRepository.findById(id) == null) {
            return false;
        }
        reservationRepository.deleteById(id);
        return true;
    }
}
