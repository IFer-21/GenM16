package com.ifmn.h_abstracta;

public class EjemploFIguras {
    public static void main(String[] args) {
        Triangulo t = new Triangulo(0,0);
        t.setBase(5);
        t.setAltura(10);
        System.out.println("t es el objeto de triangulo: "+ t.area());

        Circulo c = new Circulo();
        System.out.println("c es el objeto de triangulo: ");
}
