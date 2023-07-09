package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.DressSelection.DressSelectionDTO;
import com.skm.skmserver.dto.DressSelection.UpdateDressSelectionDTO;
import com.skm.skmserver.service.DressSelectionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class DressSelectionServiceImpl implements DressSelectionService {
    @Override
    public List<DressSelectionDTO> allDressSelections() {
        return null;
    }

    @Override
    public DressSelectionDTO saveDressSelection(DressSelectionDTO branchDTO) {
        return null;
    }

    @Override
    public DressSelectionDTO getDressSelection(int id) {
        return null;
    }

    @Override
    public DressSelectionDTO updateDressSelection(UpdateDressSelectionDTO branchDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteDressSelection(int id) {
        return false;
    }
}
