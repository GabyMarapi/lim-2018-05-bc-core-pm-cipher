//Declarando costantes
let inputElement0 = document.getElementById('texto0');
const inputElement1 = document.getElementById('texto1');
const inputElement2 = document.getElementById('texto2');
const buttonCifrar = document.getElementById('cifrar');
const buttonDescifrar = document.getElementById('descifrar');



//Creamos la función de cifrado y decifrado








//Agregando una funcion al evento click de los button

buttonCifrar.addEventListener('click', () =>{
        
    inputElement2.value=cipher.encode(inputElement1.value, (parseInt(inputElement0.value)) );
    console.log(typeof(parseInt(inputElement0.value)));
})


buttonDescifrar.addEventListener('click', () =>{
        
    inputElement2.value=cipher.encode(inputElement1.value, (parseInt(inputElement0.value)) );
    console.log(typeof(parseInt(inputElement0.value)));
})

