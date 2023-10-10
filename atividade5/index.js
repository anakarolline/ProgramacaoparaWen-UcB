const express= require('express');
const mustacheExpress =require('mustache-express');
const app = express();

app.engine('html', mustache-express());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.get('/', function(req, res){
    let usuario ={
        nome: "Ana",
        telefone: 12555
    };
    res.render('index.html');
});

app.get('/dados' function (req,res) ){
    let usuario ={
        nome: req.query.nome,
        telefone: req.query.nome
    };
};

const PORT = 8080;
app.listen(PORT, function ( ){
    console.log('app rodando na porta' + PORT);
});