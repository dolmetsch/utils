export const dedup = arr =>
    [...arr.reduce((acc, v) => (acc.add(v), acc), new Set())]

export default dedup
