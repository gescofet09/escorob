// Lista eficiente con DocumentFragment
const list = document.getElementById('list');
const frag = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = 'Elemento ' + i;
  frag.appendChild(li);
}
list.appendChild(frag);

// Proceso pesado eliminado para reducir consumo de CPU
// document.getElementById('boton')...
