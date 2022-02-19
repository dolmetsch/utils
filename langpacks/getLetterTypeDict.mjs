export const getLetterTypeDict = (character, subsets) => {
    const result = Object.keys(subsets).reduce(
        (acc, type) => {
            acc['is_' + type] = false
            return acc
        },
        {}
    )
    for (let type in subsets) {
        const subset = subsets[type]
        if (subset.includes(character)) {
            result['is_' + type] = true
            result.type = type
            return result
        }
    }
}


export default getLetterTypeDict
