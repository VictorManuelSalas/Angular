const express = require('express');
const app = express();

//Incluir el controlador
let envio = require('../controller/correoController');

//Cuando la url sea post se ejecutara la funcion de entrar 
//a la direccion del componente envio y ejecute el metodo enviocorreo
app.post('/envio', envio.envioCorreo);

module.exports = app;