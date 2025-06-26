import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CompteEnLigneTest {

    @Test
    @DisplayName("vérifier que le compte est bien créé")
    void checkCompteCreation() {
        CompteEnLigne monCompte = new CompteEnLigne(0);
        assertAll(
                "monCompte",
                () -> assertEquals(0, monCompte.getSolde(), "Le solde doit être de 0")
        );
    }

    @Test
    @DisplayName("vérifier que le solde se met bien à jour")
    void checkSoldeUpdate() {
        CompteEnLigne monCompte = new CompteEnLigne(0);
        monCompte.deposer(100);
        assertEquals(100, monCompte.getSolde(), "Le solde doit être de 100");
        monCompte.deposer(2000);
        assertEquals(2100, monCompte.getSolde(), "Le solde doit être de 2100");
        monCompte.retirer(300);
        assertEquals(1800, monCompte.getSolde(), "Le solde doit être de 1800");
    }

    @Test
    @DisplayName("vérifier que l'on ne peut pas retirer plus que le solde")
    void CheckWithdrawalNotAllowed() {
        CompteEnLigne monCompte = new CompteEnLigne(0);
        monCompte.deposer(2000);
        monCompte.retirer(2500);
        assertEquals(2000, monCompte.getSolde(), "Le retrait est refusé et donc le solde est toujours de 2000");
    }
}