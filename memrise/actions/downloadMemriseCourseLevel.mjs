/*
USAGE:
node COOKIES=<yourMemriseCookie> thisScript.mjs <courseId> <levelIndex>
will pipe downloaded JSON into stdout; add `node ... > yourFile.json` to save the file.
*/

import requestMemriseCourseLevel from '../network/requestMemriseCourseLevel.mjs'

const cookies = process.env.COOKIES
const courseId = process.argv[2]
const levelIndex = process.argv[3] || 1
// const courseLevelCount = process.argv[3]

await requestMemriseCourseLevel(cookies, courseId, levelIndex).then(
    response => response.pipe(process.stdout)
)
