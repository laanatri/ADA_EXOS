import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EpargneTest {

    @Test
    @DisplayName("vérifier que le compte est bien créé")
    void checkEpargneCreation() {
        Epargne monEpargne = new Epargne();
        assertAll(
                "monEpargne",
                () -> assertEquals(1000, monEpargne.getSolde(), "Le solde doit être de 1000, c'est le dépot initial d'ouverture")
        );
    }

    @Test
    @DisplayName("vérifier que le solde se met bien à jour")
    void checkSoldeUpdate() {
        Epargne monEpargne = new Epargne();
        monEpargne.deposer(200);
        assertEquals(1200, monEpargne.getSolde(), "Le solde doit être de 1200");
        monEpargne.deposer(2000);
        assertEquals(3200, monEpargne.getSolde(), "Le solde doit être de 3200");
        monEpargne.retirer(300);
        assertEquals(2900, monEpargne.getSolde(), "Le solde doit être de 2900");
    }

    @Test
    @DisplayName("vérifier que l'on ne peut pas retirer plus que le solde + 1000 euros")
    void CheckWithdrawalNotAllowed() {
        Epargne monEpargne = new Epargne();
        monEpargne.deposer(2000);
        monEpargne.retirer(2500);
        assertEquals(3000, monEpargne.getSolde(), "Le retrait est refusé et donc le solde est toujours de 3000");
    }

    @Test
    @DisplayName("vérifier que l'on ne peut pas déposer des montant de moins de 200 euros")
    void CheckLesThan200DepositNotAllowed() {
        Epargne monEpargne = new Epargne();
        monEpargne.deposer(199);
        assertEquals(1000, monEpargne.getSolde(), "Le retrait est refusé et donc le solde est toujours de 2000");
    }

    @Test
    @DisplayName("vérifier que le solde du crédit est à 0 à l'ouverture")
    void checkInitialCreditToBeZero() {
        Epargne monEpargne = new Epargne();
        assertEquals(0, monEpargne.getSoldeCredit(), "Le montant de crédit iitial est bien de 0");
    }

    @Test
    @DisplayName("vérifier les information après avoir fait un premier crédit")
    void checkInitialInfosAfterFirstCredit() {
        Epargne monEpargne = new Epargne();
        monEpargne.retirerACredit(10000, 20);
        assertEquals(10000, monEpargne.getSoldeCredit(), "Le montant initial du crédit est de 10000 euros");
        assertEquals(20, monEpargne.getNumberOfPaymentLeft(), "il vous reste 20 mensualités à payer");
        assertEquals(500, monEpargne.getMonthlyPayment(), "Vos mensualité sont de 500 euros");
    }

}