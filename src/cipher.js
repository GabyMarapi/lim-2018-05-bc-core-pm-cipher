
const codificar = (String,offSet) =>{
  let show=''
  for (let i=0; i < string.length; i++){
  const x=string.charCodeAt(i);
  
  const r= (x- 65 + offSet)%26+65;
  show+=String.fromCharCode(r);
  }
  return inputElement2.value=show;
}

const decodificar = (String,offSet) =>{
  let show=''
  for (let i=0; i < string.length; i++){
  const x=string.charCodeAt(i);
  
  const r= (x+ 65 - offSet)%26+65;
  show+=String.fromCharCode(r);
  }
  return inputElement2.value=show;
}
window.cipher = {
  encode: codificar,
  decode: decodificar
};
