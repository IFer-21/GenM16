package MiFecha;

public class Prueba {
    public static void main(String[] args) {

        Fecha angy = new Fecha(28,4,2001);

        Fecha iker = new Fecha();

        iker.setDia(21);
        iker.setMes(10);
        iker.setYear(2001);

        System.out.println(iker.formatoF());

    }
}
