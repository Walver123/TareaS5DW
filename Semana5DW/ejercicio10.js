document.getElementById("max-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const numerosInput = document.getElementById("numeros").value;
    const numerosArray = numerosInput.split(" ").map(Number);

    const maximo = encontrarMaximo(numerosArray);

    document.getElementById("resultado").innerText = `El número máximo es: ${maximo}`;
});

function encontrarMaximo(arr) {
    let maximo = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximo) {
            maximo = arr[i];
        }
    }
    return maximo;
}