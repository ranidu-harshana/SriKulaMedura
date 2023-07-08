package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Item.ItemDTO;
import com.skm.skmserver.dto.Reservation.ReservationDTO;
import com.skm.skmserver.dto.Reservation.UpdateReservationDTO;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.ReservationService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {
    private final ReservationRepository reservationRepository;
    private final ModelMapper modelMapper;

    public ReservationServiceImpl(ReservationRepository reservationRepository, ModelMapper modelMapper) {
        this.reservationRepository = reservationRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<ReservationDTO> allReservations() {
        return reservationRepository.findAll()
                .stream()
                .map(reservation -> modelMapper.map(reservation, ReservationDTO.class)).toList();
    }

    @Override
    public ReservationDTO saveReservation(ReservationDTO noteDTO) {
        return null;
    }

    @Override
    public ReservationDTO getReservation(int id) {
        return modelMapper.map(reservationRepository.findById(id), ReservationDTO.class);
    }

    @Override
    public ReservationDTO updateReservation(UpdateReservationDTO noteDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteReservation(int id) {
        return false;
    }
}
