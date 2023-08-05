package com.skm.skmserver.util;

import java.util.List;

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
}
