window.onload = function () {
    function ocultarMenu() {
        const ocu = document.getElementById("menu");
        ocu.classList.toggle("hide-mobile");
        
        const barr = document.getElementsByClassName('fas fa-bars')[0];
        barr.classList.toggle("hide-mobile");
        
        const equis = document.getElementsByClassName("fas fa-times")[0];
        equis.classList.toggle("hide-mobile");
    }
    let a = document.querySelector(".options");
    a.addEventListener('click', ocultarMenu, false);
}