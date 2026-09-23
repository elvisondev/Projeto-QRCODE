import chalk, { chalkStderr } from "chalk"
import handler from "./handler.js";
import figureSet from "figures";

//Cria a minha chamada de criar a senha
async function createPassword () {
  console.log(chalk.green(
      `\n${figureSet.tick} Password criada com sucesso`
      
  ))
  const password = await handler()
  console.log("---------------------------------------")
  console.log(chalk.green("PASSWORD:", chalk.white(password)))
  console.log("---------------------------------------")
  
}

export default createPassword