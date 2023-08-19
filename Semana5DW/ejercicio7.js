document.getElementById("sum-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const numerosInput = document.getElementById("numeros").value;
    const numerosArray = numerosInput.split(" ").map(Number);

    const suma = sumarArreglo(numerosArray);

    document.getElementById("resultado").innerText = `La suma de los números es: ${suma}`;
});

function sumarArreglo(arr) {
    return arr.reduce((total, num) => total + num, 0);
}