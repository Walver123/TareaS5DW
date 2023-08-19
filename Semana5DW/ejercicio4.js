document.getElementById("calc-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const edad = parseInt(document.getElementById("edad").value);
    const ingresos = parseFloat(document.getElementById("ingresos").value);

    const impuestos = calcularImpuestos(edad, ingresos);

    document.getElementById("resultado").innerText = impuestos !== 0 ? `Q${impuestos.toFixed(2)}` : "0";
});

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}