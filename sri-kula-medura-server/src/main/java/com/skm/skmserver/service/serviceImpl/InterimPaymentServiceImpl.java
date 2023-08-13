package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.BillingDTO;
import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.entity.Billing;
import com.skm.skmserver.entity.InterimPayment;
import com.skm.skmserver.repo.CustomerRepository;
import com.skm.skmserver.repo.InterimPaymentRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.InterimPaymentService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class InterimPaymentServiceImpl implements InterimPaymentService , MainService<InterimPaymentDTO,InterimPayment> {
    private final InterimPaymentRepository interimPaymentRepository;
    private final ReservationRepository reservationRepository;
    private final CustomerRepository customerRepository;
    private final MapAll<InterimPayment , InterimPaymentDTO> mapAll;
    private final InterimPayment newInterimPayment;

    public List<InterimPaymentDTO> allInterimPayments(){
        return mapAll.mapAllAttributesToDTO(interimPaymentRepository.findAll(),this);
    }

    public InterimPaymentDTO saveInterimPayment(InterimPaymentDTO interimPaymentDTO) {
        InterimPayment interimPayment = interimPaymentRepository.save(InterimPayment.builder(newInterimPayment)
                .interim_payment(interimPaymentDTO.getInterim_payment())
                .customer(customerRepository.findById(interimPaymentDTO.getCustomer_id()))
                .reservation(reservationRepository.findById(interimPaymentDTO.getReservation_id()))
                .build());
        return set(interimPayment);
    }

    public InterimPaymentDTO getInterimPayment(int id){
        InterimPayment interimPayment=interimPaymentRepository.findById(id);
        return set(interimPayment);
    }

    public InterimPaymentDTO set(InterimPayment interimPayment) {
        return InterimPaymentDTO.builder(interimPayment).build();
    }

    public InterimPaymentDTO updateInterimPayment(InterimPaymentDTO interimPaymentDTO,int id){
        InterimPayment interimPayment=interimPaymentRepository.findById(id);
        return set(interimPaymentRepository.save(InterimPayment.builder(interimPayment)
                .interim_payment(interimPaymentDTO.getInterim_payment())
                .build()
        ));
    }
}
