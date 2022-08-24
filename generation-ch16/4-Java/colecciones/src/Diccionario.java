import java.util.*;

public class Diccionario {
    public static void main(String[] args) {

        Map<String,String> diccionario = new HashMap<>();

        diccionario.put("numero","number");
        diccionario.put("palabra","word");
        diccionario.put("pais","country");
        diccionario.put("cartera","wallet");
        diccionario.put("reloj","watch");

        diccionario.put("lunes","monday");
        diccionario.put("martes","tuesday");
        diccionario.put("miercoles","wednesday");
        diccionario.put("jueves","thursday");
        diccionario.put("viernes","friday");

        diccionario.put("libro","book");
        diccionario.put("diccionario","dictionary");
        diccionario.put("lentes","glasses");
        diccionario.put("pluma","pen");
        diccionario.put("agua","water");

        diccionario.put("once","eleven");
        diccionario.put("doce","twelve");
        diccionario.put("trabajo","job");
        diccionario.put("profesor","teacher");
        diccionario.put("rojo","red");

        int acertadas = 0;
        for(int i=1; i<=5;i++) {

            Random aleatorio = new Random();
            int ran = aleatorio.nextInt(20) ;
            //System.out.println(ran);

            Object pabalbraAtraducir = diccionario.keySet().toArray()[ran];
            System.out.println("Traduce a ingles la palabra: " + pabalbraAtraducir);
            String valor = diccionario.get(pabalbraAtraducir);
            //System.out.println(diccionario.get(hola));

            Scanner input = new Scanner(System.in);
            System.out.println("Ingresa la palabra en ingles");
            String ingresado = input.next();

            if (valor.equalsIgnoreCase(ingresado)) {
                System.out.println("correcto");
                acertadas++;

            } else {
                System.out.println("incorrecto");
            }
            System.out.println("La traduccion de " + pabalbraAtraducir + " es: " + valor);
            System.out.println("");
            System.out.println("----------------");
            System.out.println("");


        }
        System.out.println("Tuviste " + acertadas + " respuestas correctas");
    }
}


