const express = require('express');
const app = express();
const calculadora = require('./util/calculadora');

app.get('/somar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.somar(parseFloat(a), parseFloat(b));
  res.send(`A soma de ${a} e ${b} é igual a ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.subtrair(parseFloat(a), parseFloat(b));
  res.send(`A subtração de ${a} por ${b} é igual a ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
  const { a, b } = req.params;
  const resultado = calculadora.multiplicar(parseFloat(a), parseFloat(b));
  res.send(`A multiplicação de ${a} por ${b} é igual a ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
  const { a, b } = req.params;
  if (parseFloat(b) === 0) {
    res.status(400).send('Divisão por zero não é permitida');
  } else {
    const resultado = calculadora.dividir(parseFloat(a), parseFloat(b));
    res.send(`A divisão de ${a} por ${b} é igual a ${resultado}`);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});