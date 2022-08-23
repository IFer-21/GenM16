public class EjemploString {
    public static void main(String[] args) {
        String curso = "curso en java";
        System.out.println(curso); // declaracion litereal
        String nombre = "Iker Fernando";
        System.out.println(nombre);
        String cursoObj = new String("Curso en java"); // declaracion por referemcia
        System.out.println(curso);

        boolean esigual = curso == cursoObj;
        System.out.println(esigual);

        esigual = curso.equals(cursoObj); //.equals sirve para comparar contenido
        System.out.println(esigual);

        esigual = curso.equalsIgnoreCase(cursoObj); // ingnora mayusculas y minusculas
        System.out.println(esigual);

        String concatenar = "Iker";
        String yaConcatenado = concatenar.concat(" ").concat("Fernando ").concat(curso);
        System.out.println(yaConcatenado);
    }
}
