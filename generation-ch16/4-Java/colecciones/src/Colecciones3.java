
import java.util.*;

public class Colecciones3 {
    public static void main(String[] args) {

        System.out.println("arrayList");
        List<String> comidas = new ArrayList<>();
        comidas.add("pozole");
        comidas.add("tostadas");
        comidas.add("ceviche");
        comidas.add(2,"esquite");

        System.out.println(comidas);

        List<Integer> numeros = new ArrayList<>(Arrays.asList(1,2,3,21,28));
        System.out.println(numeros);

        System.out.println("hashSet");
        Set<String> ciudad = new HashSet<>();
        ciudad.add("mexico");
        ciudad.add("toronto");

        System.out.println(ciudad);

        Set<Boolean> tabla = new HashSet<>(Arrays.asList(true,false));
        System.out.println(tabla);

        System.out.println("hashMap");

        Map<Integer,String> alumno = new HashMap<>();
        alumno.put(1,"Iker");
        alumno.put(2,"Angelica");
        alumno.put(4,"Pau");
        alumno.put(3,"Fernando");


        System.out.println(alumno);
        System.out.println(alumno.size());
        System.out.println(alumno.keySet());
        System.out.println(alumno.get(2));

        Object llave = alumno. keySet().toArray()[3];
        System.out.println(alumno.get(llave));


        //Para impirmir a todos los objetos del hashmap
        for(int i=0 ; i <alumno.size();i++){
             llave = alumno.keySet().toArray()[i];
            System.out.println(alumno.get(llave));

        }
        for(Integer llaves : alumno.keySet()){
            System.out.println(llaves + " " + alumno.get(llave));
        }



    }
}
