import permittedCharacters from "./utils/permitted-Characters.js"

async function handler() {
  let characters = []
  let password = ""
  
  const passwordLength = process.env.PASSWORD_LENGTH
  
  // console.log("PASSWORD_LENGTH:", passwordLength) Debugando codigo pra ver erro de undefine

  characters = await permittedCharacters()

  for(let i = 0; i < passwordLength; i++){

    //  console.log("Quebrando aqui!")  Debugando codigo

    //Vou sempre pegar um index aleatorio - Match.floor pra eu pegar um valor sempre por inteiro do Math.random() que sempre vai me sortear um valor aleatorio
    const index = Math.floor(Math.random() * characters.length)
    //To sempre fazendo um laço de repetição e pegando um indice aleatorio e guardando dentro da miha password
    password += characters[index] 
  }

  return password


} 

export default handler