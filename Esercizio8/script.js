
document.addEventListener('DOMContentLoaded', () => {
    const paragrafoPreModifica = document.getElementById('demo');
    console.log("Elemento demo pre modifica: ", paragrafoPreModifica.textContent)

    const paragrafo = document.getElementById('demo');
    paragrafo.textContent = 'Benvenuti!';
});
