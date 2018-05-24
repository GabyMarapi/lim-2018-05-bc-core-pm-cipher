const inputElement1 = document.getElementById('texto1');
const inputElement2 = document.getElementById('texto2');
const buttonCifrar = document.getElementById('cifrar');
const buttonCifrar1 = document.getElementById('descifrar');


// inputElement1.addEventListener('input' , ()=>{
//     const texto1=inputElement1.value;
//     const n=2;
//     let show=''
//     for (let i=0; i < texto1.length; i++){
//     const x=texto1.charCodeAt(i);
//     const r= (x- 65 + n)%26+65;
//     show+=String.fromCharCode(r);
//     }
//  inputElement2.value=show;
// })



inputElement1.addEventListener ('input', () =>{
    texto1=inputElement1.value;
    const n=33;
    let show=''
    for (let i=0; i < texto1.length; i++){
    const x=texto1.charCodeAt(i);
    const r= (x- 65 + n)%26+65;
    show+=String.fromCharCode(r);
    }
inputElement2.value=show;
})


let texto1='';

/* const cifrar = (texto1) =>{
    
   texto1=inputElement1.value;
    //console.log(texto1)
    const n=33;
    let show=''
    for (let i=0; i < texto1.length; i++){
    const x=texto1.charCodeAt(i);
    const r= (x- 65 + n)%26+65;
    show+=String.fromCharCode(r);
    }
    return inputElement2.value=show;
}

const cifrar1 = (texto1) =>{
    
    texto1=inputElement1.value;
    //console.log(texto1)
    const n=33;
    let show=''
    for (let i=0; i < texto1.length; i++){
    const x=texto1.charCodeAt(i);
    const r= (x+ 65 - n)%26+65;
    show+=String.fromCharCode(r);
    }
    return inputElement2.value=show;
} */

buttonCifrar.addEventListener('click', window.cipher.encode);

buttonCifrar1.addEventListener('click', window.cipher.decode);
