import java.util.Scanner;

public class Edad {

    public static void main(String[] args) {

        System.out.println("ingresa tu edad");
        Scanner input = new Scanner(System.in);
        int edad = input.nextInt();
        System.out.println(edad);
        input.close();
        if (edad>= 18){
            System.out.println("eres mayor");
        } else System.out.println(("eres menor"));

        //Con ternario
        String resultado = (edad >= 18) ? "Eres mayor de edad": "Eres menor de eedad";
        System.out.println(resultado);
    }
}
