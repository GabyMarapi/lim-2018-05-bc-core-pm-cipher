window.cipher = {
  encode: cifrar = () =>{
    
    texto1=inputElement1.value;
     //console.log(texto1)
     const n=33;
     let show=''
     for (let i=0; i < texto1.length; i++){
     const x=texto1.charCodeAt(i);
     const r= (x- 65 + n)%26+65;
     show+=String.fromCharCode(r);
     }
     return inputElement2.value=show;,
  
  decode: cifrar1 ()=>{
    
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
}

  // ... 
};
