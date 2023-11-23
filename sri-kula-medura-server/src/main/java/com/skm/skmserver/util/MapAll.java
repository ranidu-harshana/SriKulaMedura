package com.skm.skmserver.util;

import com.skm.skmserver.service.MainService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MapAll<E, D> {
    public List<D> mapAllAttributesToDTO(List<E> list, MainService<D,E> service) {
        return list
                .stream()
                .map(service::set).toList();
    }
}
