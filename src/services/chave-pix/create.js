import chalk from 'chalk'
import figureSet from 'figures'
import handler from './handler.js'

//Cria a minha chamada de cria chave aleatória
async function createChavePix() {
  const chavePix = await handler()

  console.log(chalk.green(`\n${figureSet.tick} Chave Pix aleatória criada com sucesso `))
  console.log("---------------------------------------")
  console.log(chalk.green("CHAVE PIX:"), chalk.white(chavePix))
  console.log("---------------------------------------")
}

export default createChavePix
