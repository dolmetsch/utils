import fs from 'fs'

const path = process.argv[2] || './parsed'

if (!fs.existsSync(path)) {
    console.error('non-existing path provided', path)
    process.exit()
}

console.log(JSON.stringify(fs.readdirSync(path).map(fn => fn.replace('.mp3', ''))))
