package com.skm.skmserver.service;

import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.DressSelection.UpdateDressSelectionDTO;

import java.util.List;

public interface DressSelectionService {
    List<DressSelectionDTO> allDressSelections();
    DressSelectionDTO saveDressSelection(DressSelectionDTO branchDTO);
    DressSelectionDTO getDressSelection (int id);
    DressSelectionDTO updateDressSelection(UpdateDressSelectionDTO branchDTO, int id);
    boolean deleteDressSelection(int id);
}
