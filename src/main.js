import prompt from "prompt"

import promptSchemaMain from "./prompts-schema/prompt-schema-main.js"

import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js"
  



async function main(){
  
 
  prompt.get(promptSchemaMain, async(err, choose) => {
    //Debugando o codigo pra achar um erro de escrita 
    // console.log("CHOOSE", choose)
    if(err) console.log(err)

    //Chamada da minha função para cria QRCODE
    if(choose.select == 1) await createQRCode()
    //Chamada da minha função password
    if(choose.select == 2) await createPassword()
  })

  prompt.start()
  

}

main()