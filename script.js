document.getElementById('boton').addEventListener('click', function runHeavy() {
    var result = 0;
    for (var i = 0; i < 1000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    alert('Proceso terminado: ' + result);
})

var list = document.getElementById('list');
for (var i = 0; i < 100; i++) {
    var li = document.createElement('li');
    li.innerHTML = 'Elemento número ' + i;
    list.appendChild(li);
}
