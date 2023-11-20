package com.skm.skmserver.service;

import com.skm.skmserver.dto.CostDTO;
import com.skm.skmserver.dto.OtherCostDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CostService {
    CostDTO mainCostsOfReservation(int reservation);

    OtherCostDTO saveOtherCost(OtherCostDTO otherCostDTO);

    List<OtherCostDTO> allOtherCosts();
}
