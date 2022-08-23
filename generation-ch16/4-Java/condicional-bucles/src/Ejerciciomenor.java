import java.util.Scanner;

public class Ejerciciomenor {
    public static void main(String[] args) {

        Scanner input = new Scanner(System.in);

        System.out.println("Elige 1) Incremento)  2) Decremento;");
        int nValores;
        String cadena = "";
        int menu = input.nextInt();

        switch (menu){
            case 1:
                System.out.println("Incrementando");

                nValores = input.nextInt();

                for(int i = 0; i <= nValores; i++){
                    System.out.println(cadena);
                    cadena=cadena+"*";
                }
                break;

            case 2:
                System.out.println("Decremento");
               nValores = input.nextInt();

                for(int i = nValores; i>=1; i--){

                    for(int j=0; j<i; j++){
                        System.out.print("*");
                    }
                    System.out.println("");
                }
                break;
        }
    }
}
