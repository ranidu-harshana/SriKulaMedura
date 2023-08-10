package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.DressSelection.SelectingDressesDTO;
import com.skm.skmserver.entity.DressSelection;
import com.skm.skmserver.entity.Item;
import com.skm.skmserver.repo.DressSelectionRepository;
import com.skm.skmserver.repo.ItemRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.DressSelectionService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.skm.skmserver.util.Helpers.extractItemType;
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
    private final MapAll<DressSelection, DressSelectionDTO> mapAll;

    @Override
    public List<DressSelectionDTO> allDressSelectionsOfReservation(int reservation_id) {
        return mapAll.mapAllAttributesToDTO(dressSelectionRepository.findAllByReservationId(reservation_id), this);
    }

    @Override
    public List<DressSelectionDTO> saveDressSelections(SelectingDressesDTO dressSelectionDTO) {
        var dressData = dressSelectionDTO.getDresses().get(0);
        for (DressSelectionDTO dto : dressSelectionDTO.getDresses()) {
            Item item = null;
            if (dto.getItem_id() > 0) {
                item = itemRepository.findById(dto.getItem_id());
            } else if (itemService.checkItemExist(dto.getItem_description(), extractItemType(dressData.getTypeWithIndex())).isResponse()) {
                String[] separatedTexts = separateItemCodeAndItemName(dto.getItem_description());
                item = itemRepository.findByItemCodeAndItemNameAndItemType(separatedTexts[0], separatedTexts[1], extractItemType(dressData.getTypeWithIndex()));
            }
            DressSelection dressSelection = dressSelectionRepository.save(DressSelection.builder(newDressSelection)
                    .status(true)
                    .reservation(reservationRepository.findById(dto.getReservation_id()))
                    .item(item)
                    .build());
        }
        return allDressSelectionsOfReservation(dressData.getReservation_id());
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
        return DressSelectionDTO.builder(dressSelection)
                .item(itemService.set(dressSelection.getItem()))
                .build();
    }
}
