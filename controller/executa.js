const express = require('express');
const Calculadora = require('../model/calculo');
const resultado = express.Router();

resultado.post('/', (req, res) => {
    const { base, altura } = req.body;
    const area =Calculadora.Area(
        parseFloat(base), parseFloat(altura));
    res.redirect(`/resultado.html?area=${area}`);
    //res.send(`A area é: ${area}`);
});

module.exports = resultado;