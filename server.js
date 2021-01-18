const express = require('express');
const app = express();
var hbs = require('hbs');

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    // let salida = {
    //     nombre: 'Irwin',
    //     edad: 25,
    //     url: req.url
    // };

    // res.send(salida);
    res.render('home', {
        nombre: 'Irwin',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(3000, () => {
    console.log('Escuchando perticiones en el puerto 3000');
});