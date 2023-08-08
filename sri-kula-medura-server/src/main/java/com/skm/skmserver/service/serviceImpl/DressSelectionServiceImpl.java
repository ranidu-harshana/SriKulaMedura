package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.DressSelection.SelectingDressesDTO;
import com.skm.skmserver.entity.DressSelection;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.DressSelectionRepository;
import com.skm.skmserver.repo.ItemRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.DressSelectionService;
import com.skm.skmserver.service.MainService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.skm.skmserver.util.Helpers.separateItemCodeAndItemName;

@Service
@Transactional
@RequiredArgsConstructor
public class DressSelectionServiceImpl implements DressSelectionService, MainService<DressSelectionDTO, DressSelection> {
    private final DressSelectionRepository dressSelectionRepository;
    private final ReservationRepository reservationRepository;
    private final ItemRepository itemRepository;
    private final DressSelection newDressSelection;
    private final ItemServiceImpl itemService;

    @Override
    public List<DressSelectionDTO> allDressSelections() {
        return null;
    }

    @Override
    public CommonBooleanDTO saveDressSelections(SelectingDressesDTO dressSelectionDTO) {
        try {
            for (DressSelectionDTO dto : dressSelectionDTO.getDresses()) {
                Item item = null;
                if (dto.getItem_id() > 0) {
                    item = itemRepository.findById(dto.getItem_id());
                } else if (itemService.checkItemExist(dto.getItem_description()).isResponse()) {
                    String[] separatedTexts = separateItemCodeAndItemName(dto.getItem_description());
                    item = itemRepository.findByItemCodeAndItemName(separatedTexts[0], separatedTexts[1]);
                }
                DressSelection dressSelection = dressSelectionRepository.save(DressSelection.builder(newDressSelection)
                        .status(true)
                        .reservation(reservationRepository.findById(dto.getReservation_id()))
                        .item(item)
                        .build());
            }
            return CommonBooleanDTO.builder().response(true).build();
        } catch (Exception e) {
            return CommonBooleanDTO.builder().response(false).build();
        }
    }

    @Override
    public DressSelectionDTO getDressSelection(int id) {
        return null;
    }

    @Override
    public DressSelectionDTO updateDressSelection(DressSelectionDTO dressSelectionDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteDressSelection(int id) {
        return false;
    }

    @Override
    public DressSelectionDTO getDressSelectionDTOWithValues(DressSelection dressSelection) {
        return null;
    }

    @Override
    public DressSelectionDTO set(DressSelection dressSelection) {
        return DressSelectionDTO.builder(dressSelection).build();
    }
}
