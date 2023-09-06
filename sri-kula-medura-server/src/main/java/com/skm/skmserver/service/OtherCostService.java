package com.skm.skmserver.service;

import com.skm.skmserver.dto.OtherCostDTO;

import java.util.List;

public interface OtherCostService {
    OtherCostDTO saveOtherCost(OtherCostDTO otherCostDTO);
    OtherCostDTO updateOtherCost(OtherCostDTO otherCostDTO, int id);
    List<OtherCostDTO> allOtherCosts();
    boolean deleteOtherCost(int id);
}
