// external heavy script (non-minified)
/*
function heavyCalc() {
    var total = 0;
    for (var i = 0; i < 10000000; i++) {
        total += Math.pow(i, 0.5);
    }
    console.log('heavyCalc', total);
}
heavyCalc();
*/
// script.js inline heavy code


document.getElementById('boton').addEventListener('click', function runHeavy() {
    var result = 0;
    for (var i = 0; i < 1000; i++) {
        result += Math.sqrt(i) * Math.sin(i);
    }
    alert('Proceso terminado: ' + result);
})

// Populate a large list with DOM operations inside loop (inefficient)

var list = document.getElementById('list');
for (var i = 0; i < 100; i++) {
    var li = document.createElement('li');
    li.innerHTML = 'Elemento número ' + i;
    list.appendChild(li);
}

// Synchronous XHR blocking example (deprecated but intentionally heavy)
/*
function blockingXHR() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/no-existe', false); // synchronous
    try {
        xhr.send(null);
    } catch(e) {}
}
// Call blocking XHR (commented out by default)
// blockingXHR();*/