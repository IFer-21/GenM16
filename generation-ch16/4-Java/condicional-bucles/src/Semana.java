import java.util.Scanner;

public class Semana {
    public static void main(String[] args) {
        System.out.println("Semana");

        Scanner sc = new Scanner(System.in);
        System.out.println("Escribe el numero");
        byte diaSemana = sc.nextByte();

        switch (diaSemana){
            case 1 :
                System.out.println("Se escribio 1");
                break;
            case 2:
                System.out.println("Se escribio 2");
                break;
            case 3:
                System.out.println("Se escribio 3");
                break;
            case 4:
                System.out.println("Se escribio 4");
                break;
            case 5:
                System.out.println("Se escribio 5");
                break;
            default:
                System.out.println("No entendi");
        }


    }
}
