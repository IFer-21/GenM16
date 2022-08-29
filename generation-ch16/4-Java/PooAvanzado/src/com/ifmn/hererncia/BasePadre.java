package com.ifmn.hererncia;

public class BasePadre {
    private int a;
    private double b;
    private String c;

    public BasePadre(){

    }

    public void VisualizarA(){
        System.out.println("Soy un metodo de la clase BasePadre" + a);

    }

    public void VisualizarABC(){
        System.out.println("Soy un metodo de la clase BasePadre abc" );
    }

    public int getA() {
        return a;
    }

    public void setA(int a) {
        this.a = a;
    }

    public double getB() {
        return b;
    }

    public void setB(double b) {
        this.b = b;
    }

    public String getC() {
        return c;
    }

    public void setC(String c) {
        this.c = c;
    }
}

