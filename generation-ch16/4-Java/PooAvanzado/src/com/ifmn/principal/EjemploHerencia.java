package com.ifmn.principal;

import com.ifmn.hererncia.BasePadre;
import com.ifmn.hererncia.Hija;
import com.ifmn.hererncia.Hijo;
import com.ifmn.hererncia.IngresarDatos;

public class EjemploHerencia {

    public static void main(String[] args) {
        IngresarDatos ingresarDatos = new IngresarDatos();
        Hija hija = new Hija();
        hija.VisualizarA();
        Hijo hijo = new Hijo();
        hijo.VisualizarABC();

        Object miObj = new BasePadre();






    }

}
