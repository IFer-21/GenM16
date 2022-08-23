
import java.util.ArrayList;
import java.util.List;

public class Colecciones {
    public static void main(String[] args) {

        List<String> meses = new ArrayList<String>();

        meses.add("enero");
        meses.add("febrero");
        meses.add("marzo");
        meses.add(1,"abril");
        System.out.println(meses);
        String borrado = meses.remove(2);
        System.out.println(meses);
        System.out.println(borrado);

        System.out.println(meses.get(1));
        System.out.println(meses.size());

       for (String mes:meses){
           System.out.println(mes);
       }

      List<Integer> numero = new ArrayList<Integer>();

        numero.add(21);
        numero.add(28);
        numero.add(15);

        int num1 = 10;
       Integer num2 = 21;

        System.out.println(num1);
        System.out.println(num2.getClass().getSimpleName());
        System.out.println(numero);
        System.out.println(numero.remove(1));
        System.out.println(numero.get(1) + 5);

    }
}
