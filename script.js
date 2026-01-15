var list = document.getElementById('list');
for (var i = 0; i < 100; i++) {
    var li = document.createElement('li');
    li.innerHTML = 'Elemento número ' + i;
    list.appendChild(li);
}
