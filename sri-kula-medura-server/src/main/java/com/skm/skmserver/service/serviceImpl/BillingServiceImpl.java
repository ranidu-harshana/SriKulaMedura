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

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class BillingServiceImpl implements BillingService, MainService<BillingDTO, Billing> {
    private final BillingRepository billingRepository;
    private final ReservationRepository reservationRepository;
    private final MapAll<Billing, BillingDTO> mapAll;
    private final Billing newBilling;

    public List<BillingDTO> allBillings(){
        return mapAll.mapAllAttributesToDTO(billingRepository.findAll(),this);
    }

    public BillingDTO saveBilling(BillingDTO billingDTO) {
        Billing billing = billingRepository.save(Billing.builder(newBilling)
                .total_bill(billingDTO.getTotal_bill())
                .advance(billingDTO.getAdvance())
                .discount(billingDTO.getDiscount())
                .reservation(reservationRepository.findById(billingDTO.getReservation_id()))
                .build());
        return set(billing);
    }

    public BillingDTO getBilling(int id){
        Billing billing = billingRepository.findById(id);
        return set(billing);
    }

    public BillingDTO updateBilling(BillingDTO billingDTO, int id){
        Billing billing = billingRepository.findById(id);
        return set(billingRepository.save(Billing.builder(billing)
                        .total_bill(billingDTO.getTotal_bill())
                        .advance(billingDTO.getAdvance())
                        .discount(billingDTO.getDiscount())
                .build()));
    }

    public boolean deleteBilling(int id){
        if(billingRepository.findById(id)==null){
            return false;
        }
        billingRepository.deleteById(id);
        return true;
    }

    public BillingDTO set(Billing billing) {
        return BillingDTO.builder(billing).build();
    }
}
