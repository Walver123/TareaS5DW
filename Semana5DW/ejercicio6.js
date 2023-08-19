document.getElementById("char-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const texto = document.getElementById("texto").value;
    const caracter = document.getElementById("caracter").value;

    const cantidad = numeroDeCaracteres(texto, caracter);

    document.getElementById("resultado").innerText = `El carácter "${caracter}" aparece ${cantidad} veces en el texto.`;
});

function numeroDeCaracteres(texto, caracter) {
    let count = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            count++;
        }
    }
    return count;
}