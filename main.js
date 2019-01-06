let buttonFicheMenu = document.querySelector('.flotte');
let buttonHoraireMenu = document.querySelector('.horaire');
let form = document.querySelectorAll('form');
let perturbation = document.querySelector('#perturbation');
let popPerturbation = document.querySelector('.popPerturbation');
let menuDisplay = document.querySelector('.menuDisplayBelrail');
let menu = document.querySelector('#menuBelrail');
let close = document.querySelector('#close');
let map = document.querySelector('#map');
let nav = document.querySelector('nav');
let inputHour = document.querySelector('#heure');
let inputDate = document.querySelector('#date');

let display = false;
menuDisplay.addEventListener('click', ()=>{ 
    if(display){
        menu.removeAttribute("style");
        display = false;
    }else{
        menu.setAttribute("style", "display : flex;");
        display=true;
    }
});

buttonFicheMenu.addEventListener('click', () => {
    buttonFicheMenu.classList.remove('notInUse');
    buttonFicheMenu.classList.add('inUse');
    buttonHoraireMenu.classList.remove('inUse');
    buttonHoraireMenu.classList.add('notInUse');
    form[0].classList.remove('block');
    form[0].classList.add('none');
    form[1].classList.remove('none');
});

buttonHoraireMenu.addEventListener('click', () => {
    buttonFicheMenu.classList.remove('InUse');
    buttonFicheMenu.classList.add('notInUse');
    buttonHoraireMenu.classList.remove('notInUse');
    buttonHoraireMenu.classList.add('inUse');
    form[0].classList.remove('none');
    form[1].classList.remove('block');
    form[1].classList.add('none');
});

perturbation.addEventListener('click', () => {
    popPerturbation.classList.remove('none');
    popPerturbation.classList.add('block');
});

close.addEventListener('click', () => {
    popPerturbation.classList.add('none');
    popPerturbation.classList.remove('block');
});

window.addEventListener("click", (event) => {
	if(event.target == popPerturbation){
        popPerturbation.classList.add('none');
        popPerturbation.classList.remove('block');
	}
});

window.addEventListener('scroll', () => {;
    if(window.scrollY > 100){
        nav.classList.add('navScroll')
    }else{
        nav.classList.remove('navScroll');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        if(this.getAttribute('href') !== "#"){
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

(function setDateHour(){
    var date = new Date();
    if(date.getMinutes() <= 9){
        inputHour.value = `${date.getHours()}h0${date.getMinutes()}`;
    }else{
        inputHour.value = `${date.getHours()}h${date.getMinutes()}`;
    }
    inputDate.value = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`; 
})();