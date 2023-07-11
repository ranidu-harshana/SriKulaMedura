package com.skm.skmserver.service;

import com.skm.skmserver.dto.DressSelectionDTO;
import com.skm.skmserver.entity.DressSelection;

import java.util.List;

public interface DressSelectionService {
    List<DressSelectionDTO> allDressSelections();
    DressSelectionDTO saveDressSelection(DressSelectionDTO branchDTO);
    DressSelectionDTO getDressSelection (int id);
    DressSelectionDTO updateDressSelection(DressSelectionDTO branchDTO, int id);
    boolean deleteDressSelection(int id);
    DressSelectionDTO getDressSelectionDTOWithValues(DressSelection dressSelection);
}
