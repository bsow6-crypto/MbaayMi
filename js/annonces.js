document.addEventListener("DOMContentLoaded", () => {
    // Données simulées
    const annonces = [
        { titre: "Vente de riz", region: "Saint-Louis", image: "assets/images/raw-brown-rice-bowl-selective-260nw-214825963.webp" },
        { titre: "Achat de maïs", region: "Dakar", image: "assets/images/corn-cobs-plantation-field-260nw-2190937523.webp" },
        { titre: "Vente de tomates bio", region: "Thiès", image: "assets/images/360_F_64872868_5VLU7YZYMJgaKAisfxqjK3yDz6rYtrto.webp" },
        { titre: "Vente de mangues", region: "Ziguinchor", image: "assets/images/360_F_1331948973_AITbOcLnJQwskumfkjMGL6SBddQScIbx.webp" }
    ];

    const container = document.getElementById("annonces-list");

    // Récupérer le nombre d'abonnements stocké dans localStorage
    let abonnements = localStorage.getItem("abonnementsActifs");
    abonnements = abonnements ? parseInt(abonnements) : 0;

    // Création des cartes d'annonces
    annonces.forEach((annonce, index) => {
        const div = document.createElement("div");
        div.classList.add("annonce");
        div.innerHTML = `
            <img src="${annonce.image}" alt="${annonce.titre}">
            <h3>${annonce.titre}</h3>
            <p>Région : ${annonce.region}</p>
            <button class="subscribe-btn">S'abonner</button>
        `;
        container.appendChild(div);

        // Ajouter l'événement clic pour le bouton
        const button = div.querySelector(".subscribe-btn");
        button.addEventListener("click", () => {
            abonnements++;
            localStorage.setItem("abonnementsActifs", abonnements); // Sauvegarde dans localStorage
            showAlert(`Vous êtes abonné à l'annonce "${annonce.titre}" !`);
        });
    });
});
