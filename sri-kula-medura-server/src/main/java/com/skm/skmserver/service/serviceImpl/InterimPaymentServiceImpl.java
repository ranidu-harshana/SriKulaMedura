package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.entity.InterimPayment;
import com.skm.skmserver.repo.InterimPaymentRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.InterimPaymentService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class InterimPaymentServiceImpl implements InterimPaymentService {
    private final InterimPaymentRepository interimPaymentRepository;
    private final ReservationRepository reservationRepository;
    private final MapAll<InterimPayment , InterimPaymentDTO> mapAll;

    public List<InterimPaymentDTO> allInterimPayments(){
        return mapAll.mapAllAttributesToDTO(interimPaymentRepository.findAll(),this);
    }
}
