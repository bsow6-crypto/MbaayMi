
// dashboard.js

document.addEventListener("DOMContentLoaded", () => {
    // 🔹 Récupérer les valeurs depuis localStorage
    let abonnementsActifs = localStorage.getItem("abonnementsActifs");
    abonnementsActifs = abonnementsActifs ? parseInt(abonnementsActifs) : 0;

    let messagesRecus = localStorage.getItem("messagesRecus");
    messagesRecus = messagesRecus ? parseInt(messagesRecus) : 0;

    // 🔹 Fonction pour animer le compteur
    function animateCounter(elementId, target) {
        const element = document.getElementById(elementId);
        let count = 0;
        const interval = setInterval(() => {
            count++;
            element.textContent = count;
            if (count >= target) clearInterval(interval);
        }, 100); // vitesse de l'animation
    }

    // 🔹 Lancer l'animation pour abonnements et messages
    animateCounter("abonnements-count", abonnementsActifs);
    animateCounter("messages-count", messagesRecus);

    // 🔹 Message de bienvenue
    if (typeof showAlert === "function") {
        showAlert("Bienvenue sur votre tableau de bord !");
    }
});