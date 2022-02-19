export const makeRange = (start, postEnd, step = 1) => {
    // parsingInts
    start = +start
    postEnd = +postEnd
    step = +step

    // guarding
    if (
        step === NaN ||
        start === NaN ||
        postEnd === NaN ||
        step === 0 ||
        start === postEnd ||
        (start > postEnd && step > 0) ||
        (start < postEnd && step < 0)
    ) {
        return []
    }

    const result = []

    // positive direction
    if (step > 0) {
        for (; start < postEnd; start += step) {
            result.push(start)
        }
    }

    // negative direction
    if (step < 0) {
        for (; start > postEnd; start += step) {
            result.push(start)
        }
    }

    // TODO: allow functional arguments for step and end

    return result
}

export default makeRange
