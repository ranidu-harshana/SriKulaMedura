package com.skm.skmserver.util;

import java.util.Random;

public class GenerateBillNumber {
    public static String generateBillNumber (int branch_id, int customer_id) {
        return "RES" + new Random().nextLong(100000 , 999999) + "" + branch_id + "" + customer_id;
    }
}
