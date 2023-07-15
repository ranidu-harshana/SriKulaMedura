package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CostDTO;
import com.skm.skmserver.entity.Cost;
import com.skm.skmserver.repo.CostRepository;
import com.skm.skmserver.service.CostService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor

public class CostServiceImpl implements CostService,MainService<CostDTO ,Cost> {
    private final CostRepository costRepository;
    private final MapAll<Cost,CostDTO> mapAll;
    
    @Override
    public CostDTO set(Cost cost) {
        return CostDTO.builder()
                .id(cost.getId())
                .transport(cost.getTransport())
                .salary(cost.getSalary())
                .cleaning(cost.getCleaning())
                .depreciation(cost.getDepreciation())
                .build();
    }
}
