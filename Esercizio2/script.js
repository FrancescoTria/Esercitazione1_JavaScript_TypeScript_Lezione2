const names = ["anna", "luca", "mario"];

console.log("Array iniziale: " + names);
// Creo un nuovo array con i nomi in maiuscolo
const upperNames = names.map(nome => nome.toUpperCase());

console.log("Array con toUpperCase: " + upperNames);
