import prompt from 'prompt'

import promptSchemaMain from './prompts-schema/prompt-schema-main.js'

import createQRCode from './services/qr-code/create.js'
import createPassword from './services/password/create.js'
import createChavePix from './services/chave-pix/create.js';

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if (err) console.log(err)

    if (choose.select == 1) await createQRCode()

    if (choose.select == 2) await createPassword()

    if (choose.select == 3) await createChavePix()
  })

  prompt.start()
}

main()