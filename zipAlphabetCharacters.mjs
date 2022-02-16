import getLetterTypeDict from './getLetterTypeDict.mjs'


export const zipAlphabetCharacters = (
    alphabet,
    subsets,
    frequencies,
    layout,
    uppercases,
) =>
    alphabet.reduce(
        (acc, character, i) => {
            acc.push({
                character,
                position: i + 1,
                frequency: frequencies[character],
                qwerty: layout[character],
                uppercase: uppercases[character],
                ...getLetterTypeDict(character, subsets),
            })
            return acc
        },
        []
    )


export default zipAlphabetCharacters
