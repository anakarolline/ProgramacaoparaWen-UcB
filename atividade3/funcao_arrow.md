As funções de flecha, também conhecidas como funções arrow ou arrow functions, são uma sintaxe mais curta e concisa para escrever funções em JavaScript. Elas foram introduzidas no ECMAScript 6 (ES6) e oferecem uma maneira mais simples de criar funções anônimas. A principal vantagem das funções de flecha é sua sintaxe compacta, o que pode tornar o código mais legível.

const nomeDaFuncao = (parametro1, parametro2, ..., parametroN) => {
    // corpo da função
    // instruções da função
    return valorDeRetorno;
};


Exemplo 1: Função sem parâmetros e com retorno simples:
~~~
const saudacao = () => {
    return "Olá, mundo!";
};

console.log(saudacao()); // Saída: "Olá, mundo!"
---------------------------------------------------------------------
Exemplo 2: Função com um parâmetro e retorno implícito

~~~
const quadrado = (numero) => numero * numero;

console.log(quadrado(5)); // Saída: 25
~~~
---------------------------------------------------------------------

Exemplo 3: Função com múltiplos parâmetros
~~~
const soma = (a, b) => a + b;

console.log(soma(3, 7)); // Saída: 10
Exemplo 4: Função com instruções múltiplas no corpo
javascript
Copy code
const calcularArea = (largura, altura) => {
    const area = largura * altura;
    return area;
};
~~~
console.log(calcularArea(4, 5)); // Saída: 20
---------------------------------------------------------------------

Exemplo 4: Uso de funções de flecha em métodos de array
~~~
const numeros = [1, 2, 3, 4, 5];
const aoQuadrado = numeros.map(numero => numero * numero);
console.log(aoQuadrado); // Saída: [1, 4, 9, 16, 25]
~~~
---------------------------------------------------------------------

Nestes exemplos, as funções de flecha são usadas para criar funções simples e expressivas de uma maneira mais concisa do que a sintaxe de função tradicional. 