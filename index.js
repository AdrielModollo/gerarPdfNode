var pdf = require("html-pdf"); //cria variavel e instância com a biblioteca pdf

pdf.create("Meu nome é Adriel e estou testando a biblioteca pdf do node",{}).toFile("./meuPdfLindao.pdf",(err, res) => {
    /* verifica existência de erro ou sucesso */  
    if(err){
        console.log("ERRO ACONTECEU OOOH NÃO...");
    } else {
        console.log(res);
    }
}) //Pega os dados recebido e gera o arquivo PDF no local definido