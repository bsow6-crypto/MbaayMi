
// contact.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const confirmation = document.getElementById("confirmation-message");

    // 🔹 Récupérer le nombre de messages depuis localStorage
    let messagesRecus = localStorage.getItem("messagesRecus");
    messagesRecus = messagesRecus ? parseInt(messagesRecus) : 0;

    // 🔹 Fonction pour afficher le message de confirmation
    function showConfirmation(msg) {
        confirmation.textContent = msg;
        confirmation.style.color = "green";
        confirmation.style.fontWeight = "bold";

        setTimeout(() => {
            confirmation.textContent = "";
        }, 3000);
    }

    // 🔹 Gestion de l'envoi du formulaire
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Incrémenter le compteur
        messagesRecus++;
        localStorage.setItem("messagesRecus", messagesRecus);

        // Afficher message de confirmation
        showConfirmation("Merci ! Votre message a été envoyé.");

        // Alerte flottante
        if (typeof showAlert === "function") {
            showAlert("Votre message a bien été envoyé !");
        }

        // Réinitialiser le formulaire
        form.reset();
    });
})