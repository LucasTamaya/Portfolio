// Eléments du DOM //
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");
const main = document.querySelector("main");
// End Elément du DOM //

// Clique sur le hamburgerMenu //
hamburgerMenu.addEventListener("click", () => {
    navigation.classList.toggle("active"); //switch entre ajout et suppression de la class "active" à chaque clics //
    hamburgerMenu.classList.toggle("active");
    main.classList.toggle("active");
});
// End Clique sur le hamburgerMenu //

