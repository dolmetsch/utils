export const invertMap = map => Object.keys(map).reduce(
    (acc, k) => {
        acc[map[k]] = k
        return acc
    },
    {}
)


export default invertMap
