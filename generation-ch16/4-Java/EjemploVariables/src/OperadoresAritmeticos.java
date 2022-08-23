import java.util.Scanner;

public class OperadoresAritmeticos {
    public static void main(String[] args) {
        int primero = 21;
        int segundo = 28;

        int suma = primero + segundo;
        System.out.println(suma);

        int resta = segundo - primero;
        System.out.println("La resta es: " + (resta));

        int multi = primero * segundo;
        System.out.println("La multiplicacion es: "+ (multi));

        float division = segundo / primero;
        System.out.println("la division es :" + division);

        float division1 = (float) segundo / (float) primero;
        System.out.println("la division es :" + division1);

        Scanner input = new Scanner(System.in); // se ocupa importar import java.util.Scanner;
        System.out.println("cual es tu nombre: ");
        String dato = input.next();
        System.out.println("cual es tu edad: ");
        String edad = input.next();
        System.out.println("tu nombre es: " + dato + " y tu edad " + edad);




    }

}
