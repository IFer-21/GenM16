import java.util.Objects;
import java.util.Scanner;

public class Bucles {
    public static void main(String[] args) {
        for (int i = 0; i<=30;i++)
            System.out.println(i);

        String condicion = "";
        Scanner input = new Scanner(System.in);

    while (!Objects.equals(condicion,"Hola")){
            System.out.println("Saludame");
            condicion= input.next();


        }
    }
}
