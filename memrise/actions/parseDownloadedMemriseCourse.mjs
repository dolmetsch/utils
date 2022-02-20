/*
USAGE:
node thisScript.mjs <downloadedCoursePath>
*/

import fs from 'fs'
import dedup from '../../basic/dedup.mjs'
import parseMemriseCourse from '../parsing/parseMemriseCourse.mjs'
// import defaultParseLearnable from '../parsing/learnableParsers/default.mjs'
import parseLearnableAudioOnly from '../parsing/learnableParsers/singleAudio.mjs'

const coursePath = process.argv[2]

if (!fs.existsSync(coursePath)) {
    console.error('non-existing path provided', coursePath)
    process.exit()
}

// standard
// console.log(JSON.stringify(parseMemriseCourse(coursePath)))

// audio urls
const mediaUrls = dedup(parseMemriseCourse(coursePath, parseLearnableAudioOnly).filter(a => a))
console.log(mediaUrls.join('\n'))

// example: custom parsing, detecting thai vowels from the course #102400
// import readJSON from '../../basic/readJSON.mjs'
// const thaiVowels = readJSON('../../../thai/characters/subsets/vowels/all.json')

// const myLearnableParser = learnable =>
//     [...learnable.learning_element].filter(l => thaiVowels.includes(l)).length > 0
//         ? defaultParseLearnable(learnable) // parseLearnableAudioOnly(learnable)
//         : undefined

// const parsed = parseMemriseCourse(coursePath, myLearnableParser).filter(a => a !== undefined)

// console.log(JSON.stringify(parsed))
// // console.log(parsed.join('\n'))
