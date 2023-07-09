package com.skm.skmserver.util;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MapAll<T, D> {
    private final ModelMapper modelMapper;

    public MapAll(ModelMapper modelMapper) {
        this.modelMapper = modelMapper;
    }

    public List<D> mapAllEntities(List<T> list, Class<D> destination) {
        return list
                .stream()
                .map(item -> modelMapper.map(item, destination)).toList();
    }
}
