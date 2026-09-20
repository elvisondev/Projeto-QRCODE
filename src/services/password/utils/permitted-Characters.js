//Extrato metodo
async function permittedCharacters() {
  let permitted = []
  if(process.env.UPPERCASE_LETTERS === "true"){
    permitted.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  //Os ... são chamados de spreds em vez de apagar ele adiciona, com o que já tem dentro 
  if(process.env.LOWERCASE_LETTERS === "true"){
    permitted.push(..."abcdefghijklmnopqrstuvwxyz")
  }
  if(process.env.NUMBERS === "true"){
    permitted.push(..."0123456789")
  }
  if(process.env.SPECIAL_CHARACTERS === "true"){
    permitted.push(..."!@#$%^&*()_-")
  }

  return permitted
}

export default permittedCharacters 