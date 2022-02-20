const addAudiosIfPresent = (learnable, result) => {
    const audios = new Set()
    Object.keys(learnable.screens).map(key => {
        const screen = learnable.screens[key]
        if (screen.audio) {
            screen.audio.value.map(v => {
                audios.add(v.normal)
            })
        }
    })
    if (audios.size) {
        result.audios = [...audios]
    }
}

const addFirstAudioIfPresent = (learnable, result) => {
    try {
        result.audio = learnable.screens[1].audio.value[0].normal
    } catch (e) {
    }
}

export const defaultParseLearnable = (learnable) => {
    const result = {
        original: learnable.learning_element,
        translation: learnable.definition_element
    }
    // addAudiosIfPresent(learnable, result)
    addFirstAudioIfPresent(learnable, result)
    return result
}

export default defaultParseLearnable
