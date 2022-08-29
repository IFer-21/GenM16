package MetPrincipal;

import EjemplosResumen.Animal;
import MiFecha.Fecha;
import MiSaludo.Saludo;
import Miejemlo.Persona;

import java.util.Scanner;


public class EjecutaT {
    public static void main(String[] args) {




        int salida = 0;

        do {


            Menu menuPp = new Menu();
            menuPp.menuP();
            Scanner input = new Scanner(System.in);
            int opcionMenu = input.nextInt();


            switch (opcionMenu){
                case 1:

                    Saludo saludo = new Saludo();

                    System.out.println(saludo.saludar0());
                    break;
                case 2:

                    break;
                case 3:

                    Fecha fecha = new Fecha(21,2,3);
                    System.out.println(fecha.formatoF());

                    break;
                case 4:

                    Animal animal = new Animal("perro","cleo",9);
                    System.out.println(animal);
                    break;


                case 5:
                    salida = 5;
                    break;
                default:
                    System.out.println("Ingresa una opcion valida");
                    break;
            }

        } while (salida != 5);

    }
}
