document.addEventListener('DOMContentLoaded', () => {
    const lista = document.getElementById('list');

    const li = document.createElement('li');
    li.textContent = 'Elemento 1';

    lista.appendChild(li);
});
