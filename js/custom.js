"use strict";

function mensaje(id) {
    let pitumba  = document.getElementById(id);
    pitumba.classList.replace("d-none","d-block");
}
/*funcion para esconder mensaje de gracias*/
function esconder(id) {
    let pitumba  = document.getElementById(id);
    pitumba.classList.replace("d-block","d-none");
}

let circularProgress = document.querySelector(".circular-progress"),
    progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
    progressEndValue = 100,
    speed = 100;

let progress = setInterval(()=>{
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style = `background: conic-gradient(rgba(25, 141, 161, 0.973) ${progressStartValue*3.6}deg, white 0deg);`;

    if (progressStartValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);

window.onload = function (){
    let bar = document.querySelector('.bar');
    bar.forEach((progress) =>{
        let value = progress.getAttribute('data-value');
        progress.style = `width: ${value}%`;
        let count = 0;
        let progressAnimation = setInterval(()=>{
            count++;
            progress.getAttribute('data-text',`${count}%`);
            if(count<=value){
                clearInterval(progressAnimation);
            }
        },15);
    });
};