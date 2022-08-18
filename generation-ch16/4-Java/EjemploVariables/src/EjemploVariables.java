public class EjemploVariables {
    public static void main(String[] args) {
        String nombre = "Iker";
        String saludo = "Esto es un ejemplo de variables";
        char espacio = ' ';


        //System.out.println();
        System.out.println(saludo + espacio + nombre);
        System.out.println("char corresponde en bytes: " + Character.BYTES);
        System.out.println("char corresponde en bits: " + Character.SIZE);
        System.out.println("char valor minimo: " + Character.MIN_VALUE);
        System.out.println("char valor maximo: " + Character.MAX_VALUE);

        int numero = 21;
        System.out.println(numero);
        System.out.println("int corresponde en bytes: " + Integer.BYTES);
        System.out.println("int corresponde en bits: " + Integer.SIZE);
        System.out.println("int valor minimo: " + Integer.MIN_VALUE);
        System.out.println("int valor maximo: " + Integer.MAX_VALUE);

        float flotante = 12;
        System.out.println(flotante);
        System.out.println("float corresponde en bytes: " + Float.BYTES);
        System.out.println("float corresponde en bits: " + Float.SIZE);
        System.out.println("float valor minimo: " + Float.MIN_VALUE);
        System.out.println("float valor maximo: " + Float.MAX_VALUE);

        double doble = 121;
        System.out.println(doble);
        System.out.println("double corresponde en bytes: " + Double.BYTES);
        System.out.println("double corresponde en bits: " + Double.SIZE);
        System.out.println("double valor minimo: " + Double.MIN_VALUE);
        System.out.println("double valor maximo: " + Double.MAX_VALUE);


        //System.out.println(trfls);
        //System.out.println("double corresponde en bytes: " + Boolean.BYTES);
        //System.out.println("double corresponde en bits: " + Boolean.SIZE);
        //System.out.println("double valor minimo: " + Boolean.MIN_VALUE);
        //System.out.println("double valor maximo: " + Boolean.MAX_VALUE);
        boolean valorBool = (3-2 == 4);
        System.out.println("El valor es: " + valorBool);

        long largo = 1212;
        System.out.println(doble);
        System.out.println("long corresponde en bytes: " + Long.BYTES);
        System.out.println("long corresponde en bits: " + Long.SIZE);
        System.out.println("long valor minimo: " + Long.MIN_VALUE);
        System.out.println("long valor maximo: " + Long.MAX_VALUE);

        byte bite = 1;
        System.out.println(doble);
        System.out.println("byte corresponde en bytes: " + Byte.BYTES);
        System.out.println("byte corresponde en bits: " + Byte.SIZE);
        System.out.println("byte valor minimo: " + Byte.MIN_VALUE);
        System.out.println("byte valor maximo: " + Byte.MAX_VALUE);

        short corto = 5;
        System.out.println(doble);
        System.out.println("short corresponde en bytes: " + Short.BYTES);
        System.out.println("short corresponde en bits: " + Short.SIZE);
        System.out.println("short valor minimo: " + Short.MIN_VALUE);
        System.out.println("short valor maximo: " + Short.MAX_VALUE);


    }
}
