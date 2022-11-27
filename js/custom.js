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

function runFillAnimation() {
    const elements = document.querySelectorAll(
      ".progress-bar-meter-fill.fill-animation"
    );
    elements.forEach((e) => {
      e.classList.remove("fill-animation");
      window.requestAnimationFrame(() => e.classList.add("fill-animation"));
    });
  }
  
  function handleProgressBarWidthAndHeightOnMediaQuery(event) {
    const elements = document.querySelectorAll(".progress-bar-meter-size");
    // if matches, it's a big screen
    if (event.matches) {
      elements.forEach((element) => {
        const height = element.getAttribute("data-percent");
        element.style.height = height;
        element.style.width = "100%";
      });
    } else {
      elements.forEach((element) => {
        const width = element.getAttribute("data-percent");
        element.style.width = width;
        element.style.height = "100%";
      });
    }
  }
  
  const lgMediaQuery = window.matchMedia("screen and (min-width: 992px)");
  
  lgMediaQuery.addListener(handleProgressBarWidthAndHeightOnMediaQuery);
  
  handleProgressBarWidthAndHeightOnMediaQuery(lgMediaQuery);
  
  document.getElementById("animate-again-btn").addEventListener("click", (e) => {
    runFillAnimation();
  });
  