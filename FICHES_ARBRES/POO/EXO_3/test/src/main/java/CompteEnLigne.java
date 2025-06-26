public class CompteEnLigne implements Compte {
    private int solde;

    public CompteEnLigne(int solde) {
        this.solde = solde;
    }

    public void deposer(int montant) {
        solde += montant;
        System.out.println(solde);
    }

    public void retirer(int montant) {
        if (solde > montant) {
            solde -= montant;
            System.out.println("Débit autorisé. Votre solde est de " + solde);
        } else {
            System.out.println("Débit non autorisé, il dépasse votre solde qui est de : " + solde);
        }
    }

    @Override
    public int getSolde() {
        return solde;
    }
}