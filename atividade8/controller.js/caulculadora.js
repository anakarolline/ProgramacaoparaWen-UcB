exports.form = (req, res) => {
    res.render('form');
  };
  
  exports.calcular = (req, res) => {
    const { numA, numB, operacao } = req.body;
    let resultado;
  
    switch (operacao) {
      case '+':
        resultado = parseFloat(numA) + parseFloat(numB);
        break;
      case '-':
        resultado = parseFloat(numA) - parseFloat(numB);
        break;
      case '*':
        resultado = parseFloat(numA) * parseFloat(numB);
        break;
      case '/':
        resultado = parseFloat(numA) / parseFloat(numB);
        break;
    }
  
    res.render('resultado', { resultado });
  };