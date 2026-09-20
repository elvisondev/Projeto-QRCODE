import chalk from "chalk"
import handler from "./handler.js";
import figureSet from "figures";

//Cria a minha chamada de criar a senha
async function createPassword () {
  console.log(chalk.green(
      `${figureSet.tick} Password criada com sucesso`
  ))
  const password = await handler()
  
  console.log(password)
  
}

export default createPassword