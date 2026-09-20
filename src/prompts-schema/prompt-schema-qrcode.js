// @ts-check

import chalk from "chalk"
import figureSet from "figures";



const promptSchemaQRCode = [
  {
    //Perguntando o que eu quero nesse caso quero um link name:"link"
    name: "link",
    //So estou pedindo um link e nada mais basicamente esse link que o usuario colar ele vai ser salvo numa varialvel chamada name:"link"
    description: chalk.yellow("Digite o link para gerar o QR CODE "),
    
  },
  {
    //Aqui fazendo uma pergunta onde o usuario quer que o QR CODE seja gerado no terminal ou em formato de imagem
    name:"type",
    description: chalk.yellow(
    `${figureSet.pointer} Escolha entre o tipo de QRCODE: \n
        [1] IMAGEM ${figureSet.arrowRight} Salva o QR Code como arquivo de imagem \n 
        [2] TERMINAL ${figureSet.arrowRight} Exibe o QR Code diretamente no terminal \n
        ${figureSet.pointerSmall} Digite uma opção`
    ),
    pattern:/^[1-2]+$/,
    message:chalk.red.bold(`${figureSet.cross} Opção inválida. Digite [1] para imagem ou [2] para terminal`),
    require: true
  }

]

export default promptSchemaQRCode