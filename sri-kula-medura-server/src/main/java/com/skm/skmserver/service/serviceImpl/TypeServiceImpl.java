package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.Type.TypeDTO;
import com.skm.skmserver.dto.Type.UpdateTypeDTO;
import com.skm.skmserver.service.TypeService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
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
    public TypeDTO updateType(UpdateTypeDTO noteDTO, int id) {
        return null;
    }

    @Override
    public boolean deleteType(int id) {
        return false;
    }
}
