document.getElementById("sum-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const numerosInput = document.getElementById("numeros").value;
    const numerosArray = numerosInput.split(" ").map(Number);

    const multiplicacion = multiplicarArreglo(numerosArray);

    document.getElementById("resultado").innerText = `El resultado de la multiplicación es: ${multiplicacion}`;
});

function multiplicarArreglo(arr) {
    return arr.reduce((total, num) => total * num, 1);
}