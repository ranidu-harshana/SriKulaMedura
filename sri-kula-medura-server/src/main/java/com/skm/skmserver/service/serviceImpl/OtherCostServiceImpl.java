package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.dto.OtherCostDTO;
import com.skm.skmserver.entity.OtherCost;
import com.skm.skmserver.repo.OtherCostRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.service.OtherCostService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class OtherCostServiceImpl implements OtherCostService , MainService<OtherCostDTO,OtherCost> {
    private final OtherCostRepository otherCostRepository;
    private final ReservationRepository reservationRepository;
    private final MapAll<OtherCost, OtherCostDTO> mapAll;
    private final OtherCost newOtherCost;


    public OtherCostDTO saveOtherCost(OtherCostDTO otherCostDTO){
        OtherCost otherCost = otherCostRepository.save(OtherCost.builder(newOtherCost)
                .other_cost(otherCostDTO.getOther_cost())
                .reason(otherCostDTO.getReason())
                .reservation(reservationRepository.findById(otherCostDTO.getReservation_id()))
                .build());
        return set(otherCost);
    }
    public List<OtherCostDTO> allOtherCosts(){
        return mapAll.mapAllAttributesToDTO(otherCostRepository.findAll(),this);
    }

    public OtherCostDTO set(OtherCost otherCost) {
        return OtherCostDTO.builder(otherCost).build();
    }
}
