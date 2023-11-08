const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res) {
    res.render("index.html");
});

app.post("/dados", function (req, res) {
    let agendamento = {
        nome: req.body.nome,
        CPF: req.body.CPF,
        data_nacimento: req.body.data_nacimento,
        endereco: req.body.endereco,
        UF: req.body.UF,
        CEP: req.body.CEP,
        email: req.body.email,
        telefone : req.body.telefone,

        Especialidade medica: req.body.especialidade,
        Horas do agendamento: req.body.horas,
        Data do agendamento: req.body.data,
        Antibióticos: req.body.medicamentos,
        Informações Adicionais: req.body.info
    };

    let erro_form = false;

    if(agendamento.nome == ""){
        erro_form = true;
    }
    if(agendamento.CPF == ""){
        erro_form = true;
    }
    if(agendamento.data_nacimento == ""){
        erro_form = true;
    }
    if(agendamento.endereco == ""){
        erro_form = true;
    }
    if(agendamento.UF == ""){
        erro_form = true;
    }
    if(agendamento.CEP == ""){
        erro_form = true;
    }
    if(agendamento.email == ""){
        erro_form = true;
    }
    if(agendamento.telefone == ""){
        erro_form = true;
    }
    
    if(agendamento.especialidade == ""){
        erro_form = true;
    }
    if(agendamento.horas == ""){
        erro_form = true;
    }
    if(agendamento.data == ""){
        erro_form = true;
    }
    if(agendamento.medicamentos == ""){
        erro_form = true;
    }
    if(agendamento.info == ""){
        erro_form = true;
    }

    res.render("dados.html", {agendamento, erro_form});

});

const PORT = 8080;
app.listen(PORT, function () {
    console.log("app rodando na porta " + PORT);
});