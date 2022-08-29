package EjemplosResumen;

public class Animal {
    private String raza;
    private String nombre;
    private int edad;

    public Animal(String nuevoNombre){
        nombre=nuevoNombre;
    }

    public int getEdad() {
        return edad;
    }

    public void setEdad(int nuevaEdad) {
        edad = nuevaEdad;
    }

    public String getNombre() {
        return nombre;
    }

    public Animal(String raza, String nombre, int edad) {
        this.raza = raza;
        this.nombre = nombre;
        this.edad = edad;
    }
}
