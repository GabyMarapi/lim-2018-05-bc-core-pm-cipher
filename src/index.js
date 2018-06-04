//Declarando costantes
const inputElementOffSet = document.getElementById('offSet');
const inputElementText1 = document.getElementById('text1');
const inputElementText2 = document.getElementById('text2');
const buttonEncode = document.getElementById('encode');
const buttonDecode = document.getElementById('decode');
const buttonClean = document.getElementById('clean');
const buttonCopy = document.getElementById('copy');



//Creamos la función de cifrado y decifrado


//Agregando una funcion al evento click de los button

buttonEncode.addEventListener('click', () =>{
    const offSet= parseInt(inputElementOffSet.value)
    inputElementText2.value=cipher.encode(offSet,inputElementText1.value );
})


buttonDecode.addEventListener('click', () =>{
    const offSet= parseInt(inputElementOffSet.value) 
   inputElementText2.value=cipher.decode(offSet,inputElementText1.value );
})

buttonClean.addEventListener('click', () =>{
    inputElementOffSet.value='';
    inputElementText1.value='';
    inputElementText2.value='';
})

buttonCopy.addEventListener('click', (id_elemento) =>{
        id_elemento=inputElementText2.value;
        // Crea un campo de texto "oculto"
         const aux = document.createElement("input");
        
        // Asigna el contenido del elemento especificado al valor del campo
        aux.setAttribute("value", id_elemento);
        
        // Añade el campo a la página
        document.body.appendChild(aux);
        
        // Selecciona el contenido del campo
        aux.select();
        
        // Copia el texto seleccionado
        document.execCommand("copy");
        
        // Elimina el campo de la página
        document.body.removeChild(aux);
        
        //console.log("texto copiado")
        
})
