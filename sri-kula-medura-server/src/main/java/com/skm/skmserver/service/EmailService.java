package com.skm.skmserver.service;

import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.Email.TransactionEmailDTO;

public interface EmailService {
    CommonBooleanDTO sendTransactionInvoiceEmail(TransactionEmailDTO transactionEmailDTO);
}
