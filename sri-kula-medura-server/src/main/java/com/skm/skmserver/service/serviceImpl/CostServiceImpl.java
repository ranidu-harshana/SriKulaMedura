package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CostDTO;
import com.skm.skmserver.entity.Cost;
import com.skm.skmserver.repo.CostRepository;
import com.skm.skmserver.repo.ReservationRepository;
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
    private final ReservationRepository reservationRepository;
    private final MapAll<Cost,CostDTO> mapAll;

    public List<CostDTO> allCosts() {
        return mapAll.mapAllAttributesToDTO(costRepository.findAll(), this);
    }

    public CostDTO getCost(int id) {
        Cost cost = costRepository.findById(id);
        return set(cost);
    }

    public boolean deleteCost(int id) {
        if (costRepository.findById(id) == null) {
            return false;
        }
        costRepository.deleteById(id);
        return true;
    }

    public CostDTO updateCost(CostDTO costDTO, int id) {
        Cost cost = costRepository.findById(id);
        return set(costRepository.save(Cost.builder()
                .id(cost.getId())
                .transport(costDTO.getTransport())
                .salary(costDTO.getSalary())
                .cleaning(costDTO.getCleaning())
                .depreciation(costDTO.getDepreciation())
                .reservation(reservationRepository.findById(cost.getReservation().getId()))
                .build()));
    }

    public CostDTO saveCost(CostDTO costDTO) {
        Cost cost = costRepository.save(Cost.builder()
                .transport(costDTO.getTransport())
                .salary(costDTO.getSalary())
                .cleaning(costDTO.getCleaning())
                .depreciation(costDTO.getDepreciation())
                .reservation(reservationRepository.findById(costDTO.getReservation_id()))
                .build());
        return set(cost);
    }

    @Override
    public CostDTO set(Cost cost) {
        return CostDTO.builder()
                .id(cost.getId())
                .transport(cost.getTransport())
                .salary(cost.getSalary())
                .cleaning(cost.getCleaning())
                .depreciation(cost.getDepreciation())
                .created_at(cost.getCreated_at())
                .updated_at(cost.getUpdated_at())
                .reservation_id(cost.getReservation().getId())
                .build();
    }
}
