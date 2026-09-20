/// @ts-check

import prompt from "prompt"
import promptSchemaQRCode from "../../prompts-schema/prompt-schema-qrcode.js"
import handler from "./handler.js";
import chalk from "chalk";




// async function createQRCode() {prompt.get(promptQRCode, handler),prompt.start()} em {prompt.get(aqui eu passo promptQRCode, e handler), e por fim eu chamo meu prompt.start()}
 
async function createQRCode() {
  // console.log(chalk.bold.red("ENTROU NO CREATE QR CODE")) debugando o codigo pra encontra o error
  prompt.get(promptSchemaQRCode, handler)
  prompt.start()
}
 


export default createQRCode