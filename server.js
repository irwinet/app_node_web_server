const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    let salida = {
        nombre: 'Irwin',
        edad: 25,
        url: req.url
    };

    res.send(salida);
})

app.listen(3000, () => {
    console.log('Escuchando perticiones en el puerto 3000');
})