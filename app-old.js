const { read } = require('fs');
const http = require('http');

http.createServer((req, res) => {

        //res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
        //res.writeHead(200, { 'Content-Type': 'application/csv' });
        // res.write('id, nombre\n');
        // res.write('1, Irwin\n');
        // res.end();

        res.writeHead(200, { 'Content-Type': 'application/json' })
        let salida = {
            nombre: 'Irwin',
            edad: 25,
            url: req.url
        };
        // res.write('Hola Mundo');
        res.write(JSON.stringify(salida));
        res.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');