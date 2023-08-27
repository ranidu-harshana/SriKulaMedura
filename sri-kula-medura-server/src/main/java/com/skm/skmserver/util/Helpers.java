package com.skm.skmserver.util;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.DecimalFormat;

public class Helpers {
    public static String[] separateItemCodeAndItemName(String text) {
        String[] sep;
        try {
            sep = text.split(" - ", 2);
        } catch (Exception e) {
            sep = null;
        }
        return sep;
    }

    public static String extractItemType(String text) {
        return text.replaceAll("\\d", "");
    }

    public static String generateHashForPayHere(String merchantId, String merchantSecret, String orderID, double amount) {
        String currency = "LKR";
        DecimalFormat df = new DecimalFormat("0.00");
        String amountFormatted = df.format(amount);
        return getMd5(merchantId + orderID + amountFormatted + currency + getMd5(merchantSecret));
    }

    private static String getMd5(String input) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] messageDigest = md.digest(input.getBytes());
            BigInteger no = new BigInteger(1, messageDigest);
            String hashtext = no.toString(16);
            while (hashtext.length() < 32) {
                hashtext = "0" + hashtext;
            }
            return hashtext.toUpperCase();
        }
        catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }
}
