package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.TypeDTO;
import com.skm.skmserver.entity.Type;
import com.skm.skmserver.service.TypeService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TypeServiceImpl implements TypeService {
    @Override
    public List<TypeDTO> allTypes() {
        return null;
    }

    @Override
    public TypeDTO saveType(TypeDTO noteDTO) {
        return null;
    }

    @Override
    public TypeDTO getType(int id) {
        return null;
    }

    @Override
    public TypeDTO updateType(TypeDTO noteDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteType(int id) {
        return false;
    }

    @Override
    public TypeDTO getTypeDTOWithValues(Type type) {
        return null;
    }
}
