import defaultParseLearnable from './learnableParsers/default.mjs'

export const parseMemriseCourseLevel = (
    jsonString,
    parseLearnable = defaultParseLearnable
) => {
    const learnables = JSON.parse(jsonString)?.learnables
    return learnables?.map(parseLearnable) || []
}

export default parseMemriseCourseLevel
