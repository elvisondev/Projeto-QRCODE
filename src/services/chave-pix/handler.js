import {randomUUID} from 'node:crypto'

async function handler(err) {
   if (err) {
    console.log('Error on application')
    return
  }

  const randomKey = randomUUID()

  return randomKey
}

export default handler
