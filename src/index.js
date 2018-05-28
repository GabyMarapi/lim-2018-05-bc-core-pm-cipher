//Declarando costantes
const inputElement1 = document.getElementById('texto1');
const inputElement2 = document.getElementById('texto2');
const buttonCifrar = document.getElementById('cifrar');
const buttonCifrar1 = document.getElementById('descifrar');


//Creamos la función de cifrado y decifrado



let texto1='';

const cifrar = (texto1) =>{
    texto1=inputElement1.value;
    const offSet=prompt('Ingresa el OffSet para la decodificación');//obtener el offset
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
    const offSet=prompt('Ingresa el OffSet para la codificación');//obtener el offset
    let show=''
    for (let i=0; i < texto1.length; i++){
    const x=texto1.charCodeAt(i);
    const r= (x+ 65 - offSet)%26+65;
    show+=String.fromCharCode(r);
    }
    return inputElement2.value=show;
} 

//Agregando una funcion al evento click de los button

buttonCifrar.addEventListener('click', cifrar);

buttonCifrar1.addEventListener('click',  descifrar);
