//Declarando costantes
const inputElement0 = document.getElementById('texto0');
const inputElement1 = document.getElementById('texto1');
const inputElement2 = document.getElementById('texto2');
const buttonCifrar = document.getElementById('cifrar');
const buttonCifrar1 = document.getElementById('descifrar');



//Creamos la función de cifrado y decifrado




const cifrar = (texto1) =>{
    texto1=inputElement1.value;
    const offSet=inputElement0.value;//obtener el offset
    let show=''
    for (let i=0; i < texto1.length; i++){
    const x=texto1.charCodeAt(i);
    
    const r= (x- 65 + offSet)%26+65;
    show+=String.fromCharCode(r);
    }
    return inputElement2.value=show;
}

const descifrar = (texto1) =>{
    
    texto1=inputElement1.value;
    const offSet=inputElement0.value;//obtener el offset
    let show=''
    for (let i=0; i < texto1.length; i++){
    const x=texto1.charCodeAt(i);
    const r= (x+ 65 - offSet)%26;
    if (r<0){
        show+=String.fromCharCode(r+26+65);
    }
    else{
        show+=String.fromCharCode(r+65);
    }
        }
    return inputElement2.value=show;
} 

//Agregando una funcion al evento click de los button

buttonCifrar.addEventListener('click', cifrar);

buttonCifrar1.addEventListener('click',  descifrar);
