//Declarando costantes
const inputElement0 = document.getElementById('texto0');
const inputElement1 = document.getElementById('texto1');
const inputElement2 = document.getElementById('texto2');
const buttonCifrar = document.getElementById('cifrar');
const buttonCifrar1 = document.getElementById('descifrar');



//Creamos la función de cifrado y decifrado








//Agregando una funcion al evento click de los button

buttonCifrar.addEventListener('click', cipher.encode(inputElement1.value,inputElement0.value));


buttonCifrar.addEventListener('click', cipher.decode(inputElement1.value,inputElement0.value));

