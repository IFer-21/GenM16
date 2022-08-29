package com.ifmn.hererncia;

import java.util.Scanner;

public class IngresarDatos {

    Scanner input = new Scanner(System.in);


    public IngresarDatos() {
        BasePadre basePadre = new BasePadre();
        System.out.println("Ingresa el valor a");
        int a = input.nextInt();
        basePadre.setA(a);

        System.out.println("Ingresa el valor b");
        double b = input.nextDouble();
        basePadre.setB(b);

        System.out.println("Ingresa el valor c");
        String c = input.next();
        basePadre.setC(c);

        int pa = basePadre.getA();
        System.out.println(pa);

        double pb = basePadre.getB();
        System.out.println(pb);

        String pc = basePadre.getC();
        System.out.println(pc);
    }
}
