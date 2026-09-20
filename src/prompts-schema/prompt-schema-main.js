// @ts-check
import chalk from 'chalk'
import figureSet from 'figures'

const promptSchemaMain = [
  {
    //Temos que seguir um padrão, tenho que passar um NOME nesse caso Select
    name: 'select',
    //Tenho que passar uma descrição onde nesse caso op usuario so escolhe 1-2
    description: chalk.yellow.bold(`${figureSet.pointer} Escolha a ferramenta:
       [1] QRCODE | [2] PASSWORD  \n
       ${figureSet.pointerSmall} Digite uma opção`),
    //Tenho que passar um padrão de texto regex qie eu quero aceitar ou não
    //Pro usuario não escolher outra coisa nós iremos usar um pattern: ele é um regex \^pra colocar onde inicia com o ^ e seguido pelo fim +$/ \^1 onde inicia a 2 o fim+$\
    pattern: /^[1-2]+$/,
    //Aqui eu exibo uma mesagem caso o usuario digite algo que não está na lista
    message: chalk.red.bold(`${figureSet.cross} Opção inválida. Digite [1] para QRCODE ou [2] para PASSWORD`),
    //Aqui eu deixo explicito que é obrigatorio
    require: true
  }
]

export default promptSchemaMain
