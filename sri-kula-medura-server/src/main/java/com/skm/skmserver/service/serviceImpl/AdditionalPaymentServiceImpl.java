package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.AdditionalPayment.AdditionalPaymetDTO;
import com.skm.skmserver.entity.AdditionalPayment;
import com.skm.skmserver.repo.AdditionalPaymentRepository;
import com.skm.skmserver.service.AdditionalPaymentService;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class AdditionalPaymentServiceImpl implements AdditionalPaymentService {

    private AdditionalPaymentRepository additionalPaymentRepository;

    private ModelMapper modelMapper;

    public AdditionalPaymentServiceImpl(AdditionalPaymentRepository additionalPaymentRepository, ModelMapper modelMapper) {
        this.additionalPaymentRepository = additionalPaymentRepository;
        this.modelMapper = modelMapper;
    }

    public AdditionalPaymetDTO saveAdditionalPayment(AdditionalPaymetDTO additionalPaymetDTO){
        additionalPaymentRepository.save(modelMapper.map(additionalPaymetDTO, AdditionalPayment.class));
        return additionalPaymetDTO;
    }
}
