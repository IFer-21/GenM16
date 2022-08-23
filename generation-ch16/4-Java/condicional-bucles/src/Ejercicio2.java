public class Ejercicio2 {
    public static void main(String[] args) {

        String patron = "*****";
        StringBuilder cadena = new StringBuilder(patron);
        System.out.println(cadena);
        for (byte i = 4;i > 0; i--){
            cadena = cadena.deleteCharAt(i);
            System.out.println(cadena);
        }

    }
    }

