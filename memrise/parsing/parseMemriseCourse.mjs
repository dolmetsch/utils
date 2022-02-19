import fs from 'fs'

import makeRange from '../../basic/makeRange.mjs'

import defaultParseLearnable from './learnableParsers/default.mjs'
import parseMemriseCourseLevel from './parseMemriseCourseLevel.mjs'

export const parseMemriseCourse = (
    coursePath,
    learnableParser = defaultParseLearnable
) => {

    const courseLevelCount = fs.readdirSync(coursePath)
        .map(i => parseInt(i))
        .reduce((acc, el) => Math.max(acc, el), 0)

    const levelRange = makeRange(1, courseLevelCount + 1)

    const getLevelPath = levelIndex => `${coursePath}/${levelIndex}.json`

    return levelRange.reduce((acc, levelIndex, parser) => {
        return acc.concat(
            parseMemriseCourseLevel(
                fs.readFileSync(
                    getLevelPath(levelIndex)
                ),
                learnableParser
            )
        )
    }, [])
}


export default parseMemriseCourse
