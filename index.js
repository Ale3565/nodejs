const express = require('express');
const app = express();

app.get('/profile', (req, res) => {
    res.status(200).send({
        message: {
            name: 'Alexis',
            age: 30,
            country: 'Peru'
        },
        verb: req.method
    });
});

app.post('/ejemplo', (req, res) => {
    res.status(200).send({
        message: [
            'Globant',
            'Mercadolibre',
            'Accenture'
        ],
        verb: req.method
    });

});

app.patch ('/ejemplo', (req, res) => {
    res.status(200).send({
        message: [
            'Programar',
            'Ver series de TV',
            'Ir al teatro'
        ],
        verb: req.method
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});