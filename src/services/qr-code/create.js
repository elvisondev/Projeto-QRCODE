/// @ts-check

import prompt from 'prompt'
import promptSchemaQRCode from '../../prompts-schema/prompt-schema-qrcode.js'
import handler from './handler.js'
import chalk from 'chalk'

async function createQRCode() {
  prompt.get(promptSchemaQRCode, handler)
  prompt.start()
}

export default createQRCode
