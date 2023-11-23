package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.dto.CostDTO;
import com.skm.skmserver.dto.OtherCostDTO;
import com.skm.skmserver.entity.Cost;
import com.skm.skmserver.entity.OtherCost;
import com.skm.skmserver.repo.CostRepository;
import com.skm.skmserver.repo.OtherCostRepository;
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
    private final OtherCostRepository otherCostRepository;
    private final ReservationRepository reservationRepository;
    private final MapAll<Cost,CostDTO> mapAll;
    private final Cost newCost;
    private final OtherCost newOtherCost;

    public List<CostDTO> allCosts() {
        return mapAll.mapAllAttributesToDTO(costRepository.findAll(), this);
    }

    public List<OtherCostDTO> allCostsOfReservation(int reservation) {
        List<OtherCost> otherCosts = otherCostRepository.findAllByReservationId(reservation);

        return otherCosts.stream().map(otherCost -> OtherCostDTO.builder(otherCost).build()).toList();
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
        return set(costRepository.save(Cost.builder(cost)
                .transport(costDTO.getTransport())
                .salary(costDTO.getSalary())
                .cleaning(costDTO.getCleaning())
                .depreciation(costDTO.getDepreciation())
                .reason(costDTO.getReason())
                .other_cost(cost.getOther_cost())
                .build()));
    }

    public CostDTO saveCost(CostDTO costDTO) {
        Cost cost = costRepository.save(Cost.builder(newCost)
                .id(costDTO.getId())
                .transport(costDTO.getTransport())
                .salary(costDTO.getSalary())
                .cleaning(costDTO.getCleaning())
                .depreciation(costDTO.getDepreciation())
                .reason(costDTO.getReason())
                .other_cost(costDTO.getOther_cost())
                .reservation(reservationRepository.findById(costDTO.getReservation_id()))
                .build());
        return set(cost);
    }

    @Override
    public CostDTO set(Cost cost) {
        return CostDTO.builder(cost).build();
    }

    @Override
    public CostDTO mainCostsOfReservation(int reservation) {
        Cost cost = costRepository.findByReservationId(reservation);

        return CostDTO.builder(cost).build();
    }

    @Override
    public OtherCostDTO saveOtherCost(OtherCostDTO otherCostDTO) {
        OtherCost otherCost = otherCostRepository.save(OtherCost.builder(newOtherCost)
                .reason(otherCostDTO.getReason())
                .other_cost(otherCostDTO.getOther_cost())
                .reservation(reservationRepository.findById(otherCostDTO.getReservation_id()))
                .build());
        return OtherCostDTO.builder(otherCost).build();
    }

    @Override
    public List<OtherCostDTO> allOtherCosts() {
        List<OtherCost> otherCosts = otherCostRepository.findAll();

        return otherCosts.stream().map(otherCost -> OtherCostDTO.builder(otherCost).build()).toList();
    }
}
