package com.skm.skmserver.util;

import com.skm.skmserver.service.MainService;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class MapAll<T, D> {
    public List<D> mapAllAttributesToDTO(List<T> list, MainService<D,T> service) {
        return list
                .stream()
                .map(service::set).toList();
    }
}
