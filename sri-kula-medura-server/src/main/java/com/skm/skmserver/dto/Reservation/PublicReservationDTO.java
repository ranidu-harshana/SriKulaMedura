package com.skm.skmserver.dto.Reservation;

import com.skm.skmserver.dto.AdditionalPaymentDTO;
import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.entity.AdditionalPayment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
public class PublicReservationDTO {
    private String bill_number;
    private String customerName;
    private double dueAmount;
    private List<AdditionalPaymentDTO> additionalPayments;
    private List<InterimPaymentDTO> interimPayments;
}
