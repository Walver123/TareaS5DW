document.getElementById("print-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const itemsInput = document.getElementById("items");
    const items = itemsInput.value.split(" ");

    const lista = document.getElementById("lista");
    lista.innerHTML = ""; // Limpiar lista antes de imprimir

    items.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item;
        lista.appendChild(li);
    });

    itemsInput.value = ""; // Limpiar el input después de imprimir
});