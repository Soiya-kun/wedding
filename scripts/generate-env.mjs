import { spawn } from 'child_process'
import { promises as fs } from 'fs'

async function run() {
  await new Promise((resolve, reject) => {
    const p = spawn('cdk', ['--outputs-file', 'cdk-outputs.json'], { stdio: 'inherit' })
    p.on('close', code => code === 0 ? resolve() : reject(new Error(`cdk exited with ${code}`)))
  })
  const data = JSON.parse(await fs.readFile('cdk-outputs.json', 'utf8'))
  let apiUrl
  for (const stack of Object.values(data)) {
    if (stack.HttpApiUrl) {
      apiUrl = stack.HttpApiUrl
      break
    }
  }
  if (!apiUrl) throw new Error('HttpApiUrl not found')
  await fs.writeFile('frontend/.env.local', `VITE_API_URL=${apiUrl}\n`)
  console.log('frontend/.env.local generated')
}

run().catch(err => { console.error(err); process.exit(1) })
