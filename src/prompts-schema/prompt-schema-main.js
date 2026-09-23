// @ts-check
import chalk from 'chalk'
import figureSet from 'figures'

const promptSchemaMain = [
  {
    name: 'select',

    description: chalk.yellow.bold(`${figureSet.pointer} Escolha a ferramenta:
       [1] QRCODE | [2] PASSWORD | [3] CHAVE PIX ALEATÓRIA \n
       ${figureSet.pointerSmall} Digite uma opção`),
    pattern: /^[1,2,3]+$/,

    message: chalk.red.bold(
      `${figureSet.cross} Opção inválida. Digite [1] para QRCODE OU [2] para PASSWORD OU [3] CHAVE ALEATÓRIA`
    ),

    require: true
  }
]

export default promptSchemaMain
