package com.skm.skmserver.service;

import com.skm.skmserver.dto.TypeDTO;
import com.skm.skmserver.entity.Type;

import java.util.List;

public interface TypeService {
    List<TypeDTO> allTypes();
    TypeDTO saveType(TypeDTO noteDTO);
    TypeDTO getType (int id);
    TypeDTO updateType(TypeDTO noteDTO, int id);
    boolean deleteType(int id);
    TypeDTO getTypeDTOWithValues(Type type);
}
