const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'));

// Express HBS Engine
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

app.listen(3000, () => {
    console.log('Escuchando perticiones en el puerto 3000');
});