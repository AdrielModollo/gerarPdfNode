var pdf = require("html-pdf"); //cria variavel e instância com a biblioteca pdf
var ejs = require("ejs"); //instância biblioteca EJS, explicado funcionamento no readme.md

var nomeDoUsuario = "Adriel Modollo";
var curso = "Formação Node.js";
var categoria = "NODE";

ejs.renderFile("./meuarquivo.ejs",{nome: nomeDoUsuario, curso: curso, categoria: categoria},(err, html) =>{
     /* verifica existência de erro ou sucesso */  
     if(err){
        console.log("Algo errado por aqui...");
    } else {
        pdf.create(html,{}).toFile("./meuPdfLindao.pdf",(err, res) => {
            /* verifica existência de erro ou sucesso */  
            if(err){
                console.log("ERRO ACONTECEU OOOH NÃO...");
            } else {
                console.log(res);
            }
        }) //Pega os dados recebido e gera o arquivo PDF no local definido
    }
})

