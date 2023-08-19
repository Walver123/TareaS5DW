function convertirNumeroLikes() {
    const numero = parseFloat(document.getElementById("numero").value);
    let resultado = "";

    if (numero >= 1000000) {
        resultado = (numero / 1000000).toFixed(1) + 'M';
    } else if (numero >= 1000) {
        resultado = (numero / 1000).toFixed(1) + 'K';
    } else {
        resultado = numero.toString();
    }

    document.getElementById("resultado").innerText = resultado;
}