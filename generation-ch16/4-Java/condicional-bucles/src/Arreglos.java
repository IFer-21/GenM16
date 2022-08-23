public class Arreglos {
    public static void main(String[] args) {
        int[] numerosAleatorios = {1, 2};


        String[] valores = {"Iker","Fernando","Martinez","Negrete"};

        char[] arregloCaracteres = new char[4];
        arregloCaracteres[0] = 'h';
        arregloCaracteres[1] = 'o';
        arregloCaracteres[2] = 'l';
        arregloCaracteres[3] = 'a';

        System.out.println(numerosAleatorios[1]);
        System.out.println(valores[1]);
        System.out.println(arregloCaracteres);


        //forEach
        for(String elemento:valores){
            System.out.println(elemento);
        }


    }
}
