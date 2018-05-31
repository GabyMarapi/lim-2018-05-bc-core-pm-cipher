
const codificar = (string,offSet) =>{
  let show = '';
  let convertedLetter = 0;

  for (let i=0; i < string.length; i++){

  const asciiCode=string.charCodeAt(i);

  if (asciiCode >=65 && asciiCode <=90){
    convertedLetter= (asciiCode - 65 + offSet)%26+65;
    show+=String.fromCharCode(convertedLetter);

  }else if (asciiCode >=97 && asciiCode <=122) {
    convertedLetter = (asciiCode - 97 + offSet)%26+97;
    show+=String.fromCharCode(convertedLetter);

  }else{
    show+=String.fromCharCode(asciiCode);
  }
  
  }
  return show;
}


const decodificar = (string,offSet) =>{
  let show = '';
  let convertedLetter = 0;

  for (let i=0; i < string.length; i++){

  const asciiCode=string.charCodeAt(i);

  if (asciiCode >=65 && asciiCode <=90){
    convertedLetter= (asciiCode + 65 - offSet)%26+65;
    show+=String.fromCharCode(convertedLetter);

  }else if (asciiCode >=97 && asciiCode <=122) {
    convertedLetter = (asciiCode + 97 - offSet)%26+97;
    show+=String.fromCharCode(convertedLetter);

  }else{
    show+=String.fromCharCode(convertedLetter);
  }
  
  }
  return show;
}
window.cipher = {
  encode: codificar,
  decode: decodificar
};
