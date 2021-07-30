const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 5000;
require('dotenv').config();

//Middleware
app.use(express.static('assets'));
app.use(express.static('librerias'));
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res)=>{
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: process.env.NODEMAILER_SERVICE,
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: "mrckeu03@gmail.com",
        subject: `Mensaje de ${req.body.email}:  ${req.body.project}`,
        text: req.body.mensaje
    }

    transporter.sendMail(mailOptions,(error, info)=>{
        if(error){
            console.log(error)
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})