const numeri = [5, 10, 15, 20];
let somma = 0;

console.log("Numeri iniziali: ", numeri)

numeri.forEach(num => {
    somma += num;
});

console.log("Somma totale calcolata con il foreach: ", somma);
