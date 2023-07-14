package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.entity.AdditionalPayment;
import com.skm.skmserver.repo.AdditionalPaymentRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.AdditionalPaymentService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor

public class AdditionalPaymentServiceImpl implements AdditionalPaymentService ,MainService<AdditionalPaymentDTO , AdditionalPayment> {
    private final AdditionalPaymentRepository additionalPaymentRepository;
    private final ReservationRepository reservationRepository;
    private final MapAll<AdditionalPayment,AdditionalPaymentDTO> mapAll;
    public List<AdditionalPaymentDTO> allAdditionalPayments(){
        return mapAll.mapAllAttributesToDTO(additionalPaymentRepository.findAll(),this);
    }
    @Override
    public AdditionalPaymentDTO saveAdditionalPayment(AdditionalPaymentDTO additionalPaymentDTO){
        AdditionalPayment additionalPayment = additionalPaymentRepository.save(AdditionalPayment.builder()
                .payment(additionalPaymentDTO.getPayment())
                .reason(additionalPaymentDTO.getReason())
                .created_at(additionalPaymentDTO.getCreated_at())
                .updated_at(additionalPaymentDTO.getUpdated_at())
                .status(additionalPaymentDTO.isStatus())
                .reservation(reservationRepository.findById(additionalPaymentDTO.getReservation_id()))
                .build());
        return set(additionalPayment);
    }

    public AdditionalPaymentDTO getAdditionalPayment(int id){
        AdditionalPayment additionalPayment = additionalPaymentRepository.findById(id);
        return set(additionalPayment);

    }

    @Override
    public AdditionalPaymentDTO set(AdditionalPayment additionalPayment) {
        return AdditionalPaymentDTO.builder()
                .id(additionalPayment.getId())
                .payment(additionalPayment.getPayment())
                .reason(additionalPayment.getReason())
                .updated_at(additionalPayment.getUpdated_at())
                .created_at(additionalPayment.getCreated_at())
                .status(additionalPayment.isStatus())
                .reservation_id(additionalPayment.getReservation().getId())
                .build();
    }

}
