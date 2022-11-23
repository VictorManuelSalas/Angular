const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) => {
    //Parametros enviados
    let body = req.body;

    //let testAccount =  nodeMailer.createTestAccount();

    let config = nodeMailer.createTransport({
        host: 'smtp.zoho.com',//'smtp.gmail.com', //Host del gmail
        port: 465, //puerto en que este se maneja
        secure: true,
        auth: { //credenciales de la cuenta
            user: 'salasmanuel030@zohomail.com',//testAccount.user, 
            pass: 'adminPassword22.',//'kjohxqfrvxymkfnv.'//testAccount.pass, 
        },
    });

    //Creacion del cuerpo del correo
    const opciones = {
        from: '"Correo Program"',
        subject: body.asunto,
        to: body.email,
        text: body.mensaje
    };


    config.sendMail(opciones, function(error, result){

        //If de si manda error
        if (error) return resp.json({ok: false, msg: error});

        //else si manda true
        return resp.json({
            ok: true,
            msg: result
        });
    })
}

//exportar el metodo
module.exports = {
    envioCorreo
}