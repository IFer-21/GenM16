package com.ifmn.h_abstracta;

public class Circulo extends FigurasGeometricas{
   private float radio;

    public Circulo() {
    }

    @Override
    public float area() {
        return 0;//Math.pow;
    }

    public float getRadio() {
        return radio;
    }

    public void setRadio(float radio) {
        this.radio = radio;
    }
}
