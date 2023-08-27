package com.skm.skmserver.service;

import com.skm.skmserver.dto.BillingDTO;

public interface BillingService {
    BillingDTO updateAmountPayable(BillingDTO billingDTO);
}
