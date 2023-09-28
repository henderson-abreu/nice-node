import path from "path";
import fs from "fs";

//Criando uma pasta e verificando se ela já existe
// fs.mkdir(path.join(__dirname, "/test"), (error) => {
//   if (error) {
//     return console.log("Error: ", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });

//Criando um arquivo com conteúdo dentro de uma pasta específica
//Se rodar novamente o código abaixo com novo conteúdo, irá sobrescrever o conteúdo existente.
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Escrevendo algo dentro do arquivo",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("Arquivo criado com sucesso!");
  }
);

//Adicionando conteúdo a um arquivo com conteúdo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  ", mais conteúdo ao texto!",
  (error) => {
    if (error) {
      return console.log("Error: ", error);
    }
    console.log("Texto adicionado ao conteúdo existente com sucesso!");
  }
);
