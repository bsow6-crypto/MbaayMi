// common.js

document.addEventListener("DOMContentLoaded", () => {
    // Mettre en surbrillance le lien actif dans le menu
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active-link");
        }
    });
});

// Fonction pour afficher une alerte flottante
function showAlert(message, duration = 3000) {
    // Création de la div
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("custom-alert");
    alertDiv.textContent = message;

    // Ajouter au body
    document.body.appendChild(alertDiv);

    // Animation d'apparition
    setTimeout(() => {
        alertDiv.classList.add("show");
    }, 10);

    // Disparition après duration
    setTimeout(() => {
        alertDiv.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(alertDiv);
        }, 500); // Temps pour animation disparition
    }, duration);
}