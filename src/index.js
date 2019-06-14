

// selección cifrar  
const encodeBtn = document.getElementById("botonEncodeHTML");

        encodeBtn.addEventListener("click", () => {
            let textToEncode = document.getElementById("toEncodeHTML").value;
            let offset = parseInt(document.getElementById("offsetHTML").value);
            // console.log(textToEncode);
            // console.log(offset);

            // impresion
            document.getElementById("resultHTML").innerHTML = window.cipher.encode(offset, textToEncode);
        });
        
            // console.log(solution);
       



//selección descifrar
// const decodeBtn = document.getElementById("botondecodeHTML");
//         decodeBtn.addEventListener("click", () => {
//             let textToDecode = document.getElementById("toEncodeHTML").value;
//             let offset = document.getElementById("offsetHTML").value;
//             // impresion iwal que arriba
//             solution = window.cipher.decode(offset, textToDecode);
//             document.getElementById("resultHTML").innerHTML = solution;
//             // console.log(solution);
//         });

        //agregar boton limpiar ()
