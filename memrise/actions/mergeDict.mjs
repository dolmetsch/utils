/*
USAGE:
node thisScript.mjs <parsedCourse(s)Path>
*/

import fs from 'fs'


const path = process.argv[2] || './parsed'

if (!fs.existsSync(path)) {
    console.error('non-existing path provided', path)
    process.exit()
}

const simplifyDictList = d => d.reduce((acc, r) => (acc[r.original] = r.translation, acc), {})

let result
if (!fs.lstatSync(path).isDirectory() ) {
    result = simplifyDictList(path)
} else {
    fs.readdirSync(path).map(filePath => {
        result = { ...result, ...simplifyDictList(JSON.parse(fs.readFileSync(path + '/' + filePath))) }
    })
}
console.log(JSON.stringify(result))
