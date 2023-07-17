package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.BillingDTO;
import com.skm.skmserver.entity.Billing;
import com.skm.skmserver.repo.BillingRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.BillingService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BillingServiceImpl implements BillingService, MainService<BillingDTO, Billing> {
    private final BillingRepository billingRepository;
    private final ReservationRepository reservationRepository;
    private final MapAll<Billing, BillingDTO> mapAll;
    
    public BillingDTO set(Billing billing) {
        return BillingDTO.builder()
                .id(billing.getId())
                .total_bill(billing.getTotal_bill())
                .discount(billing.getAdvance())
                .created_at(billing.getCreated_at())
                .updated_at(billing.getUpdated_at())
                .reservation_id(billing.getReservation().getId())
                .build();
    }
}
