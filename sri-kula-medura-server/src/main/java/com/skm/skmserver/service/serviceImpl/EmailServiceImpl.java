package com.skm.skmserver.service.serviceImpl;

import com.skm.skmserver.dto.CommonBooleanDTO;
import com.skm.skmserver.dto.Email.TransactionEmailDTO;
import com.skm.skmserver.service.EmailService;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import static org.antlr.v4.runtime.misc.Utils.readFile;

@Service
@Transactional
@RequiredArgsConstructor
public class EmailServiceImpl implements EmailService {
    private final JavaMailSender javaMailSender;

    @Override
    public CommonBooleanDTO sendTransactionInvoiceEmail(TransactionEmailDTO transactionEmailDTO) {
        try {
            MimeMessage message = javaMailSender.createMimeMessage();

            message.setFrom("harshanaranidum@gmail.com");
            message.setRecipients(MimeMessage.RecipientType.TO, transactionEmailDTO.getRecipient());
            message.setSubject(transactionEmailDTO.getSubject());

            ClassPathResource classPathResource = new ClassPathResource("templates/invoiceTemplate.html");
            String template = String.valueOf(readFile(classPathResource.getURL().getPath()));
            template = template.replace("${amount}", transactionEmailDTO.getAmount());
            template = template.replace("${paymentType}", transactionEmailDTO.getPaymentType());

            message.setContent(template, "text/html; charset=utf-8");
            javaMailSender.send(message);
            return CommonBooleanDTO.builder().response(true).build();
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return CommonBooleanDTO.builder().response(false).build();
        }
    }


}
