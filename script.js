const boton = document.getElementById('boton');
const list = document.getElementById('list');

boton.addEventListener('click', () => {
  const frag = document.createDocumentFragment();

  for (let i = 0; i < 100; i++) {
    const li = document.createElement('li');
    li.textContent = 'Elemento ' + i;
    frag.appendChild(li);
  }

  list.appendChild(frag);

  // Evita volver a ejecutar el proceso
  boton.disabled = true;
});
