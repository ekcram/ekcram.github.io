require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;


//MIDDLEWARE
// Static folder
app.use(express.static('public'));
app.use(express.static('librerias'));
app.use(express.static('node_modules'));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post('/', (req, res) => {
    console.log(req.body);

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        service: process.env.NODEMAILER_SERVICE,
        auth: {
            // pass: process.env.NODEMAILER_PASS,
            type: 'OAuth2',
            user: process.env.NODEMAILER_USER,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_SECRETCLIENT,
            refreshToken: process.env.REFRESHTOKEN,
            accessToken: process.env.ACCESSTOKEN
        }
    });

    let mailOptions = {
        from: req.body.email,
        to: "mrckeu03@gmail.com",
        subject: `Mensaje de ${req.body.name} (${req.body.email}):  ${req.body.subject}`,
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error)
            res.send('error');
        } else {
            console.log('Email sent: ' + info.response);
            res.send('success');
        }
    });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})