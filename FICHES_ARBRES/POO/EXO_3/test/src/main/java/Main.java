public class Main {

    public static void main(String[] args) {
        System.out.println("Hello World");

        CompteEnLigne monCompte = new CompteEnLigne(0);
        int[] operations = {100, 2000, 5000, -100, -1000, 0, -300};

        for (int i = 0; i < operations.length; i++) {
            monCompte.deposer(operations[i]);
        }



    }
}
