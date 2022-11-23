const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const envioCorreo = (req = request, resp = response) => {
    //Parametros enviados
    let body = req.body;

    //let testAccount =  nodeMailer.createTestAccount();

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',//'smtp.zoho.com',//' //Host del gmail
        port: 465, //puerto en que este se maneja
        secure: true,
        auth: { //credenciales de la cuenta
            user: 'salasmanuel030@gmail.com',//testAccount.user, 
            pass: 'pmndjztmeskwjrqg', //'adminPassword22.',//'kjohxqfrvxymkfnv.'//testAccount.pass, 
        },
        tls: { rejectUnauthorized: false },
    });

    //Creacion del cuerpo del correo
    const opciones = {
        from: '"Ⓒ CEDIM" <cedimInc@cedim.com>',
        subject: body.asunto,
        to: body.email,
        //text: body.mensaje, // plain text body
        html: 
        `
        <div> 
            <p>Estimado usuario, nos complace saber de ti.✍</p> 
            <p>Sabemos que haz olvidado la contraseña de tu cuenta, por lo cual se te pide que accedas al siguiente enlace para
            poder dar seguimiento al cambio de contraseña.</p> </br>
            <p>Dar clic al siguiente enlace 👉 </p> <a href="www.google.com">Acceder</a>
        </div> 
        `, 
        attachments: [{
            filename: 'gmail.jpg',
            path: './gmail.jpg',
            cid: 'unique@nodemailer.com' //same cid value as in the html img src
        }]
    };


    config.sendMail(opciones, function (error, result) {

        //If de si manda error
        if (error) return resp.json({ ok: false, msg: error });

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