function gerarQR(){
    var textGen = document.getElementById('text-gen').value;
    if(textGen !== ''){
        var gerarCode = document.getElementById('qr-code');
        gerarCode.innerHTML = '';
    
        var qrCode = new QRCode(gerarCode, {
        text: textGen,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
        });
    }else{
        alert("Entre com o texto");
    }
}

function limpar(){
    var gerarCode = document.getElementById('qr-code');
    gerarCode.innerHTML = '';
}