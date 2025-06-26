public class Epargne implements Compte, Credit {
    private int solde = 1000;
    private int soldeCredit = 0;
    private int monthlyPayment = 0;
    private int numberOfPaymentLeft = 0;

    public void deposer(int montant) {
        if (montant >= 200) {
            solde += montant;
            System.out.println("Dépot enregistré. Votre solde est de : " + solde);
        } else {
            System.out.println("Le dépot minimum est de 200 euros");
        }
    }

    public void retirer(int montant) {
        if ((solde - montant) >= 1000) {
            solde -= montant;
            System.out.println("Débit autorisé. Votre solde est de " + solde);
        } else {
            System.out.println("Débit non autorisé. Votre solde ne peut être inférieur à 1000 euros. Votre solde est de : " + solde);
        }
    }

    @Override
    public int getSolde() {
        return solde;
    }

    @Override
    public void retirerACredit(int montant, int mensualites) {
        soldeCredit += montant;
        numberOfPaymentLeft = mensualites;
        monthlyPayment += montant / mensualites;
    }

    public int getSoldeCredit() {
        return soldeCredit;
    }

    public int getMonthlyPayment() {
        return monthlyPayment;
    }

    public int getNumberOfPaymentLeft() {
        return numberOfPaymentLeft;
    }
}
