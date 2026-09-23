import chalk from 'chalk'
import figureSet from 'figures'

const promptSchemaQRCode = [
  {
    name: 'link',
    description: chalk.yellow('Digite o link para gerar o QR CODE ')
  },
  {
    name: 'type',
    description: chalk.yellow(
      `${figureSet.pointer} Escolha entre o tipo de QRCODE: \n
        [1] IMAGEM ${figureSet.arrowRight} Salva o QR Code como arquivo de imagem \n 
        [2] TERMINAL ${figureSet.arrowRight} Exibe o QR Code diretamente no terminal \n
        ${figureSet.pointerSmall} Digite uma opção`
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.bold(
      `${figureSet.cross} Opção inválida. Digite [1] para imagem ou [2] para terminal`
    ),
    require: true
  }
]

export default promptSchemaQRCode
