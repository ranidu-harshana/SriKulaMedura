package com.skm.skmserver.service;

import com.skm.skmserver.dto.Type.TypeDTO;
import com.skm.skmserver.dto.Type.UpdateTypeDTO;

import java.util.List;

public interface TypeService {
    List<TypeDTO> allTypes();
    TypeDTO saveType(TypeDTO noteDTO);
    TypeDTO getType (int id);
    TypeDTO updateType(UpdateTypeDTO noteDTO, int id);
    boolean deleteType(int id);
}
