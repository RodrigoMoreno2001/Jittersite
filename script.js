
// codigo a comentar y a refactorizar.

const clicker = document.querySelector('.clicker');
const media = document.querySelector('.media');
const conteo = document.querySelector('.cont');

let color;
let ultClick;
let cps;
let intervalo=0;
let actualClick;

clicker.addEventListener('click', () => {
    let actualClick=new Date().getTime();
    let intervalo =actualClick - ultClick;
    ultClick=actualClick;
    cps=1000/intervalo;
    clicks++;
});

setInterval(()=>{
    media.innerHTML = (cps == 0) ? "JitterSite" : "CPS: " + (cps).toFixed(2);
    clicks = 0;
}, 200);

setInterval(function () {
    let momento=new Date().getTime();
    if(ultClick - momento>1000){
        cps==0;
    }

    color="rgb(" + Math.floor(Math.random() * 55) + "," + Math.floor(Math.random() * 55+200) + "," + Math.floor(Math.random() * 55+200)+ ")";

    clicker.style.boxShadow = "inset 0px 0px 150px "+color+", 0px 0px 50px "+color;
    clicker.style.border="0.5em solid "+color;
    clicker.style.webkitTextStroke="1px "+color;

}, 1000);