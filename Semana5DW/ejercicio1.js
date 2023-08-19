function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const bmi = peso / (altura * altura);

    let resultado = "";
    if (bmi < 18.5) {
        resultado = "Bajo de peso";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultado = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultado = "Sobrepeso";
    } else {
        resultado = "Obeso";
    }

    document.getElementById("resultado").innerText = resultado;
}