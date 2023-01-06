//Declaracion de variables
var input = document.querySelector('.input');
var btnEncriptar = document.querySelector('.button_one');
var btnDesencriptar = document.querySelector('.button_two');
var btnCopiar = document.querySelector('.copiar');
var alerta = document.querySelector('.alert_text');
var imagen = document.querySelector('.munheco');
var mensajeUno = document.querySelector('.message_one');
var mensajeDos = document.querySelector('.message_two');
var result = document.querySelector('.resultado');

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const mostrarContenido = () =>{
    imagen.setAttribute("src","src/muñeco.svg");
    mensajeUno.style.display = "block";
    mensajeDos.style.display = "block";
    mensajeUno.textContent = "Ningún mensaje fue encontrado";
    mensajeDos.textContent = "Ingresa el texto que desees encriptar o desencriptar";
    btnCopiar.style.display = "none";
    result.style.display = "none";
}

const mostrarMensaje = (script) =>{
    imagen.setAttribute("src","");
    mensajeDos.style.display = "none";
    mensajeUno.style.display = "none";
    result.style.display = "block";
    result.textContent = script;
    btnCopiar.style.display = "block";
}

//Encriptación
btnEncriptar.addEventListener('click',()=>{
    let textoIngresado = removeAccents(input.value.toLowerCase()); //Se toma el valor del input, se quitan las tildes y se convierte en minuscula
    let encriptado = ""; //Se crea variable de encriptado

    if(textoIngresado.length == 0){ //Se verifica que se haya ingresado un valor en el input
        //En caso de NO haber ingresado valores
        mostrarContenido();
    }else{
        //En caso de haber ingresado valores
        for (const letra of textoIngresado) {
            switch (letra) {
                case "a":
                    encriptado+="ai";
                    break;
                case "e":
                    encriptado+="enter";
                    break;
                case "i":
                    encriptado+="imes";
                    break;
                case "o":
                    encriptado+="ober";
                    break;
                case "u":
                    encriptado+="ufat";
                    break;     
                default:
                    encriptado+=letra;
                    break;
            }
        }
        //Se muestra el mensaje encriptado
        mostrarMensaje(encriptado);
    }
    

});


//Desencriptacion
btnDesencriptar.addEventListener('click',()=>{
    let textoIngresado = removeAccents(input.value.toLowerCase()); //Se toma el valor del input, se quitan las tildes y se convierte en minuscula

    if(textoIngresado.length == 0){ //Se verifica que se haya ingresado valores en el input
        //En caso de no haber ingresado valores
        mostrarContenido();
    }else{
        //En caso de haber ingresado valores
        let desencriptado = textoIngresado.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u"); //Se reemplazan los valores correspondientes

        //Se muestra el mensaje desencriptado
        mostrarMensaje(desencriptado);
    }


});


//Copiado de texto
btnCopiar.addEventListener('click',()=>{
    navigator.clipboard.writeText(result.textContent); //Se copia el texto que se encuentra en el mensajeUno

    btnCopiar.style.display ="none";
    result.style.display = "none";
    mensajeUno.style.display = "block";
    mensajeUno.textContent = "Texto Copiado!";
    input.value = "";
    input.focus();
});

