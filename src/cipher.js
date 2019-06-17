window.cipher = {

  encode: (offset, textToEncode) => {
    let encoded = "";
    let asciiCode = "";

    for (let i = 0; i < textToEncode.length; i++) {
      asciiCode = textToEncode[i].charCodeAt();
      if ((asciiCode >= 97) && (asciiCode <= 122)) {
        encoded += String.fromCharCode((asciiCode - 97 + offset) % 26 + 97);
      } else if ((asciiCode >= 65) && (asciiCode <= 90)) {
        encoded += String.fromCharCode((asciiCode - 65 + offset) % 26 + 65);
      }
    }
    return encoded;




  },





  decode: (offset, textToDecode) => {
    let decoded = "";
    let asciiCode = "";
    for (let i = 0; i < textToDecode.length; i++) {
      if ((asciiCode >= 97) && (asciiCode <= 122)) {
        decoded += String.fromCharCode((asciiCode - 97 - offset) % 26 + 97);
      } else if ((asciiCode >= 65) && (asciiCode <= 90)) {
        decoded += String.fromCharCode((asciiCode - 65 - offset) % 26 + 65);
      }
    }
    return decoded;
}
};
