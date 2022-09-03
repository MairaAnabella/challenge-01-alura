function encriptar(){
    var texto=document.getElementById("text-area").value.toLowerCase();
    var textoCifrado= texto.replace(/e/igm,"enter");
    textoCifrado=textoCifrado.replace(/o/igm,"over");
    textoCifrado=textoCifrado.replace(/a/igm,"ai");
    textoCifrado=textoCifrado.replace(/u/igm,"ufat");

    document.getElementById("img-derecha").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("textArea").innerHTML=textoCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}
function desencriptar(){
    var texto=document.getElementById("text-area").value.toLowerCase();
    var textoCifrado= texto.replace(/enter/igm,"e");
    textoCifrado=textoCifrado.replace(/over/igm,"o");
    textoCifrado=textoCifrado.replace(/ai/igm,"a");
    textoCifrado=textoCifrado.replace(/ufat/igm,"u");

    document.getElementById("img-derecha").style.display="none";
    document.getElementById("mensaje").style.display="none";
    document.getElementById("textArea").innerHTML=textoCifrado;
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
}

function copy(){
    var contenido=document.querySelector("#text-area");
    contenido.select();
    document.execCommand("cut");
  
    alert("Se copio");
}