package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.BillingDTO;
import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.Email.TransactionEmailDTO;
import com.skm.skmserver.dto.InterimPaymentDTO;
import com.skm.skmserver.entity.Billing;
import com.skm.skmserver.entity.InterimPayment;
import com.skm.skmserver.repo.CustomerRepository;
import com.skm.skmserver.repo.InterimPaymentRepository;
import com.skm.skmserver.repo.ReservationRepository;
import com.skm.skmserver.service.EmailService;
import com.skm.skmserver.service.InterimPaymentService;
import com.skm.skmserver.service.MainService;
import com.skm.skmserver.util.MapAll;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class InterimPaymentServiceImpl implements InterimPaymentService , MainService<InterimPaymentDTO,InterimPayment> {
    private final InterimPaymentRepository interimPaymentRepository;
    private final ReservationRepository reservationRepository;
    private final CustomerRepository customerRepository;
    private final MapAll<InterimPayment , InterimPaymentDTO> mapAll;
    private final InterimPayment newInterimPayment;
    private final EmailService emailService;

    public List<InterimPaymentDTO> allInterimPayments(){
        return mapAll.mapAllAttributesToDTO(interimPaymentRepository.findAll(),this);
    }

    public InterimPaymentDTO saveInterimPayment(InterimPaymentDTO interimPaymentDTO) throws InterruptedException {
        String recipientMail = reservationRepository.findById(interimPaymentDTO.getReservation_id()).getCustomer().getUser().getEmail();

        Thread t = new Thread(() -> {
            CommonBooleanDTO booleanDTO = emailService.sendTransactionInvoiceEmail(TransactionEmailDTO.builder()
                    .subject("Payment Acknowledgement")
                    .paymentType("Interim Payment")
                    .amount(String.valueOf(interimPaymentDTO.getInterim_payment()))
                    .recipient(recipientMail)
                    .build());
        });

        InterimPayment interimPayment = interimPaymentRepository.save(InterimPayment.builder(newInterimPayment)
                .interim_payment(interimPaymentDTO.getInterim_payment())
                .reservation(reservationRepository.findById(interimPaymentDTO.getReservation_id()))
                .build());

        t.start();
        return set(interimPayment);
    }

    @Override
    public List<InterimPaymentDTO> allInterimPaymentsOfReservation(int reservation) {
        return mapAll.mapAllAttributesToDTO(interimPaymentRepository.findAllByReservationIdOrderByIdDesc(reservation),this);
    }

    public InterimPaymentDTO getInterimPayment(int id){
        InterimPayment interimPayment=interimPaymentRepository.findById(id);
        return set(interimPayment);
    }

    public InterimPaymentDTO set(InterimPayment interimPayment) {
        return InterimPaymentDTO.builder(interimPayment).build();
    }

    public InterimPaymentDTO updateInterimPayment(InterimPaymentDTO interimPaymentDTO,int id){
        InterimPayment interimPayment=interimPaymentRepository.findById(id);
        return set(interimPaymentRepository.save(InterimPayment.builder(interimPayment)
                .interim_payment(interimPaymentDTO.getInterim_payment())
                .build()
        ));
    }

    public boolean deleteInterimPayment(int id) {
        return interimPaymentRepository.existsById(id);
    }
}
