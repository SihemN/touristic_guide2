// SCROLL NAVBAR
const navbar = document.getElementById("navbar");

window.addEventListener('scroll', () => {
    //On récupère la position actuelle du défilement vertical
    const crollPosition = window.scrollY;

    //Définir l'opacité en fonction de la position du défilement
    if (crollPosition > 0){
        navbar.style.opacity = "0.5";
        } else{
            navbar.style.opacity ="1" ;
    }
});
