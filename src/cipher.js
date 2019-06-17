//rescatar el valor del offset
// traer value de la caja de texto toCipher
// crear botones con diferentes funciones de cifrar y descifrar
// ejecutar fórmula michelle;
//hacer un for que recorra el toCipher.value y convierta según el offset el array
// aplicar .charCodeAt(i del for)-numerocodigoascci y .fromCharCode(#i)-me retorna la letra del numero del asccii  
//retornar el array creado ES STRING NO ARRAY AAAAAAAAAAAAAAAAAAAAA
//+= (.push) y guardarlo en dechiper
//voilá
//funciones para mayúsculas, minúsculas, espacios, y número.
//buscar enlaces de ayuda
//hacer botones con enlaces de ayuda<a>
//css
//readme
// (posiciondelaletraenascci + offset) % 26(totaldeletras) + 65 = nueva posicion en el codigo asccii


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
       decoded += String.fromCharCode((asciiCode - 65 -  offset) % 26 + 65);
       // resultado
     }
     }
     return decoded; 
    }};