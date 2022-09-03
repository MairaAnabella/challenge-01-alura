

var clipboard = new ClipboardJS('.copy');
clipboard.on('sucess',function(e){
    alert("COPIADO EXITOSO!");
})

clipboard.on('error',function(e){
    //algo no salio como debia
})