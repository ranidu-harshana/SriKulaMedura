package com.skm.skmserver.util;

public class GenerateBillNumber {
    public static String generateBillNumber (int branch_id, int customer_id) {
        return "RES"+Math.random() + " " + branch_id + " " + customer_id;
    }
}
