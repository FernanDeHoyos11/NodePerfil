const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/public')));
console.log(__dirname)
//configuraciones
app.set('port', 3030);
app.set('views', path.join(__dirname, '/views'));
app.set('views engine', 'ejs');
//rutas
app.use(require('./rutas/index'));

 

//escuchar en puertos
app.listen(app.get('port'), () => {
    console.log('servidor en puerto ', app.get('port'))
});