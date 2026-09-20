

import qr from "qrcode-terminal"
import chalk from "chalk"
import figureSet from "figures";


//Essa é minha função que manipula o qrcode e chamamos ela no create.js
async function handler(err, result){
  if(err){
    console.log("Error on application")
    return 
  }

  //Aqui eu to resgatando o result o name:"no caso aqui type" que esta vindo do meu arquivo pastas prompts/prompt-qrcode.js que nesse caso é sempre 1 ou 2
  //Tambem uso um varialvel pra pegunta se é pequeno, nesse caso isSmall = recebe o resultado de result.type comparando com == 2 e guardando o valor em isSmall se igual a 2 é true se 1 é false a varialvel isSmall guarda ambos resultado mas a comparação é apenas com 2 qualquer coisa diferente vai dar false com resultado.
  const isSmall = result.type == 2
  //Aqui chamamos o qr que foi importado e tendo como .função o .generate() que server pra gerar nosso QRCODE
  //1 coisa que ele pergunta é o input nesse caso vem do prompts/prompt-qrcode.js name:"link" que eu quero que ele me gere a parti de onde do (result.link, {}) e tenho que passar um objeto, entre {pra isso boleano}
  //Tenho que passar esse objeto small: que tem que retonar true ou false e quem me retorna isso é isSmall pra isso fica assim qr.genertate(result.link, {small: isSmall})
  //Logo após passando vírgula ele me pede callback uma função, e ela tem que ter um paramentro (qrcode) => {}
  // Só isso  qr.generate(result.link, {small: isSmall}, (qrcode) =>{} mas só isso eu já gero o QRCODE {Entre chaves eu passo o console pra eu ver no terminal o resultado} 
  qr.generate(result.link, {small: isSmall}, (qrcode) => { 
    console.log(chalk.green(`
        ${figureSet.tick} QR Code gerado com sucesso:\n
      `))
      console.log(qrcode)

  }) 

}

//

export default handler