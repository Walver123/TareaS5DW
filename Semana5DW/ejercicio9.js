function sumarArregloEnRango(arreglo, inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += arreglo[i];
    }
    return suma;
}

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const inicio = 3;
const fin = 6;
console.log(sumarArregloEnRango(arreglo, inicio, fin)); // Debería mostrar 22