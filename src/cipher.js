window.cipher = {
  encode: (offset, textToEncode) => {
    let encoded = "";
    let asciiCode = "";

    for (let i = 0; i < textToEncode.length; i++) {
      asciiCode = textToEncode[i].charCodeAt();
      //MINUSCULAS
      if ((asciiCode >= 97) && (asciiCode <= 122)) {
        //Tomamos los valores de Ascii Code y los convertimos de nuevo en letras
        encoded += String.fromCharCode((asciiCode - 97 + offset) % 26 + 97);
        // resultado
      } else if ((asciiCode >= 65) && (asciiCode <= 90)) {
        //Tomamos los valores de Ascii Code y los convertimos de nuevo en letras
        encoded += String.fromCharCode((asciiCode - 65 + offset) % 26 + 65);
        // resultado
      } else if (asciiCode === 32) {
        encoded += String.fromCharCode(asciiCode);
      }
    }
    return encoded;



  },
  /* Acá va tu código */
  decode: (offset, textToDecode) => {
    let decoded = "";
    let asciiCode = "";
    for (let i = 0; i < textToDecode.length; i++) {
      asciiCode = textToDecode[i].charCodeAt();
      //MINUSCULAS
      if ((asciiCode >= 97) && (asciiCode <= 122)) {
        //Tomamos los valores de Ascii Code y los convertimos de nuevo en letras
        decoded += String.fromCharCode((asciiCode - 97 - offset) % 26 + 97);
        // resultado
      } else if ((asciiCode >= 65) && (asciiCode <= 90)) {
        //Tomamos los valores de Ascii Code y los convertimos de nuevo en letras
        decoded += String.fromCharCode((asciiCode - 65 - offset) % 26 + 65);
        // resultado
      } else if (asciiCode === 32) {
        decoded += String.fromCharCode(asciiCode);
      }
    }
    return decoded;
  }
};
