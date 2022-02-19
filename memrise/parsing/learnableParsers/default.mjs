export const defaultParseLearnable = (learnable) => {
    const result = {
        original: learnable.learning_element,
        translation: learnable.definition_element
    }
    const audio = learnable.screens[1].audio?.value[0].normal
    if (audio) {
        result.audio = audio
    }
    return result
}

export default defaultParseLearnable
