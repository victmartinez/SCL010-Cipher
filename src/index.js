// selección cifrar  
const encodeBtn = document.getElementById("botonEncodeHTML");
encodeBtn.addEventListener("click", () => {
    let textToEncode = document.getElementById("toEncodeHTML").value;
    let offset= document.getElementById("offsetHTML").value;
    // impresion
    document.getElementById("resultHTML").innerHTML(window.cipher.encode(textToEncode, offset));    
});
//selección descifrar
const decodeBtn = document.getElementById("botondecodeHTML");
encodeBtn.addEventListener("click", () => {
    let textToDecode = document.getElementById("toEncodeHTML").value;
    let offset = document.getElementById("offsetHTML").value;
    // impresion
    document.getElementById("resultHTML").innerHTML(window.cipher.decode(textToDecode, offset));
});

//agregar boton limpiar ()
