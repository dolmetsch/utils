/*
USAGE:
node COOKIES=<yourMemriseCookie> thisScript.mjs <courseId> [<levelCount> <pathToSave>]
*/

import fs from 'fs'

import makeRange from '../../basic/makeRange.mjs'
import requestMemriseCourseLevel from '../network/requestMemriseCourseLevel.mjs'

const cookies = process.env.COOKIES
const courseId = process.argv[2]
const courseLevelCount = parseInt(process.argv[3]) || 1
const pathToSave = process.argv[4] || `./raw/${courseId}`

if (!fs.existsSync(pathToSave)) {
    fs.mkdirSync(pathToSave, { recursive: true })
}

const getOutputPath = levelIndex => `${pathToSave}/${levelIndex}.json`

const levelRange = makeRange(1, courseLevelCount + 1)

await Promise.all(levelRange.map(levelIndex => {
    requestMemriseCourseLevel(cookies, courseId, levelIndex).then(response => {
        response.pipe(fs.createWriteStream(getOutputPath(levelIndex)))
    })
}))
