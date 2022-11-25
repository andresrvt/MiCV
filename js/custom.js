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