let formulario = 
document.querySelector("#formulario");

formulario.addEventListener(
    "submit",
    function(event) {
        event.preventDefault();

        console.log("Formualrio enviado");
    }
);

let nombre = 
document.querySelector("#nombre");

formulario.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        console.log(nombre.value);
    }
);