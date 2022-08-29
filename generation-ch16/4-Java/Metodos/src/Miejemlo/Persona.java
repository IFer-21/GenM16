package Miejemlo;

public class Persona {

    private String nombre = "Iker";
    private int edad = 20;
    private int nss = 212121;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Persona(String nombre, int edad, int nss) {
        this.nombre = nombre;
        this.edad = edad;
        this.nss = nss;
    }

    public void caminar() {
        System.out.println("Camina");
    }

    public void dormir() {
        System.out.println("Durme");
    }

}

