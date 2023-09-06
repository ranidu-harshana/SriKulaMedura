package com.skm.skmserver.service;

import com.skm.skmserver.dto.OtherCostDTO;

public interface OtherCostService {
    OtherCostDTO saveOtherCost(OtherCostDTO otherCostDTO);
    OtherCostDTO updateOtherCost(OtherCostDTO otherCostDTO, int id);
}
