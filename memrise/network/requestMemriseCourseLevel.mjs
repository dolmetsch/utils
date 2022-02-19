import https from 'https'

export const requestMemriseCourseLevel = (cookie, courseId, levelIndex) => {
    const headers = {
        cookie
    }

    const url = 'https://app.memrise.com/v1.17/learning_sessions/preview/?' +
        `session_source_id=${courseId}&session_source_sub_index=${levelIndex}`
        + '&session_source_type=course_id_and_level_index'

    return new Promise((resolve) => {
        return https.get(url, { headers }, response => {
            resolve(response)
        })
    })
}

export default requestMemriseCourseLevel