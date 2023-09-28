import path from "path";

//Tendo acesso apenas ao nome do arquivo atual.
console.log(path.basename(__filename));

//Tendo acesso apenas ao nome do diretório atual.
console.log(path.dirname(__filename));

//Tendo acesso apenas ao nome da extensão do arquivo.
console.log(path.extname(__filename));

//Cria-se um objeto com os dados do módulo PATH.
console.log(path.parse(__filename));

//Junta nomes ao diretório
console.log(path.join(__dirname, 'home', 'contact.html'));