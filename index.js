var pdf = require("html-pdf"); //cria variavel e instância com a biblioteca pdf

var conteudo = `

    <h1 style='color:red'>Opa, ta ficando bonitinho! </h1>
    <hr>
    <p>Uau, já temos conteúdo em HTML</p>

`



pdf.create(conteudo,{}).toFile("./meuPdfLindao.pdf",(err, res) => {
    /* verifica existência de erro ou sucesso */  
    if(err){
        console.log("ERRO ACONTECEU OOOH NÃO...");
    } else {
        console.log(res);
    }
}) //Pega os dados recebido e gera o arquivo PDF no local definido