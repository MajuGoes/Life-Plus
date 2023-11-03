const express = require("express");
const handlebars = require("express-handlebars");

const app = express();

app.engine("handlebars", handlebars.engine({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Isso permite que qualquer domínio acesse a API. 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// const TbCliente = require("./models/Usuarios");

let lugarEscolhido;
let livroEscolhido;
let generoEscolhido;

app.get("/principal", (req, res) => {
    res.render("principal");
});

// localhost:8080/login
app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    const email = req.body.email;
    const senha = req.body.senha;

    let usuarioEncontrado = await TbCliente.findOne({where: { emailcli: email, senhacli: senha}});

    if(usuarioEncontrado){
        res.redirect("/principal");
    }else{
        res.redirect("/cadastro");
    }

});

app.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

app.post("/cadastro", async (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const senha = req.body.senha;
    const confirmSenha = req.body.confirmSenha

    if(senha != confirmSenha){
        res.redirect("/cadastro");
    }else{
        await TbCliente.create({ nomecli: nome, emailcli: email, senhacli: senha });
        res.redirect("/login");
    }

});

app.post("/lugarEscolhido", (req, res) => {
    lugarEscolhido = req.body.lugar;
    console.log(lugarEscolhido)
    res.status(200);
});

app.get("/lugarEscolhido", (req, res) => {
    res.json({lugar: lugarEscolhido});
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});



app.get("/principal", (req, res) => {
    res.render("principal");
});


 app.post("/livroEscolhido", (req, res) => {
    livroEscolhido = req.body.livro;
    console.log(livroEscolhido)
    res.status(200);
});

app.get("/livroEscolhido", (req, res) => {
    res.json({livro: livroEscolhido});
});

app.listen(8081, () => {
    console.log("Servidor rodando na porta 8081");
});


app.get("/exames", (req, res) => {
    res.render("exames");
});

app.post("/exames", async (req, res) => {
    const motivo = req.body.motivo;
    const data = req.body.data;
    const hora = req.body.hora;

        await TbExames.create({  motivoexame:motivo, dataexame: data, horaexame: hora });
    }

);

app.get("/feedback", (req, res) => {
    res.render("feedback");
});

app.post("/feedback", async (req, res) => {
    const sugestao = req.body.sugestoes;

        await TbFeedback.create({sugestoes:sugestao});
    }

);

app.get("/principal", (req, res) => {
    res.render("principal");
});


 app.post("/generoEscolhido", (req, res) => {
    generoEscolhido = req.body.genero;
    console.log(generoEscolhido)
    res.status(200);
});

app.get("/generoEscolhido", (req, res) => {
    res.json({genero: generoEscolhido});
});

app.listen(8082, () => {
    console.log("Servidor rodando na porta 8082");
});



/*app.use(express.json()); // Adicione isso para permitir o uso do JSON no Express.

app.post("/livroEscolhido", (req, res) => {
    livroEscolhido = req.body.livros;
    console.log(livroEscolhido);
    res.status(200).end();
});

app.get("/livroEscolhido", (req, res) => {
    res.json({ livros: livroEscolhido });
});*/