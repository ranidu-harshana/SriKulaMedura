package com.skm.skmserver.service;

import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.DressSelection.SelectingDressesDTO;
import com.skm.skmserver.entity.DressSelection;

import java.util.List;

public interface DressSelectionService {
    List<DressSelectionDTO> allDressSelectionsOfReservation(int reservation_id);

    List<DressSelectionDTO> saveDressSelections(SelectingDressesDTO dressSelectionDTO);

    DressSelectionDTO getDressSelection(int id);

    DressSelectionDTO updateDressSelection(DressSelectionDTO dressSelectionDTO, int id);

    boolean deleteDressSelection(int id);
    DressSelectionDTO getDressSelectionDTOWithValues(DressSelection dressSelection);
}
