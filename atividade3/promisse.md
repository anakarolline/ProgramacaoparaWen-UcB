Promessas, ou promises em inglês, são objetos em JavaScript que representam o sucesso ou falha de uma operação assíncrona. Promessas são usadas para trabalhar com operações assíncronas de uma maneira mais fácil e eficiente, evitando o uso excessivo de callbacks aninhados. Elas são especialmente úteis quando se trabalha com operações como requisições HTTP, leitura de arquivos ou qualquer tarefa que leve algum tempo para ser concluída.

Sintaxe Básica:
~~~~
const minhaPromise = new Promise((resolve, reject) => {
    // Lógica assíncrona aqui
    // Se a operação for bem-sucedida, chame resolve(valor)
    // Se houver um erro, chame reject(erro)
});
~~~~
---------------------------------------------------------------------


Exemplo de Promessa Simples:
~~~
const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const sucesso = true;
        if (sucesso) {
            resolve("Operação concluída com sucesso!");
        } else {
            reject("Erro: A operação falhou!");
        }
    }, 2000); // Simula uma operação assíncrona com um atraso de 2 segundos
});

promessa.then((mensagem) => {
    console.log("Sucesso: " + mensagem);
}).catch((erro) => {
    console.error("Erro: " + erro);
});
~~~
---------------------------------------------------------------------


Neste exemplo, a promessa é resolvida após 2 segundos. Se for bem-sucedida, a função then é chamada. Se ocorrer um erro (caso sucesso seja false), a função catch é chamada.

Encadeamento de Promessas:
Promessas podem ser encadeadas para lidar com várias operações assíncronas de forma sequencial:

---------------------------------------------------------------------
~~~~
const primeiraOperacao = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Primeira operação concluída");
        }, 1000);
    });
};

const segundaOperacao = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Segunda operação concluída");
        }, 1500);
    });
};

primeiraOperacao()
    .then((mensagem) => {
        console.log(mensagem);
        return segundaOperacao();
    })
    .then((mensagem) => {
        console.log(mensagem);
    })
    .catch((erro) => {
        console.error("Erro: " + erro);
    });
~~~~
---------------------------------------------------------------------

Neste exemplo, primeiraOperacao é realizada primeiro. Se for bem-sucedida, segundaOperacao é chamada em seguida. Se qualquer promessa for rejeitada em qualquer ponto do encadeamento, o fluxo é direcionado para o bloco catch.

As promessas são uma maneira poderosa e flexível de lidar com operações assíncronas em JavaScript, tornando o código mais legível e fácil de manter.