export const singleAudioLearnableParser = (learnable) => {
    try {
        return learnable.screens[1].audio.value[0].normal
    } catch (e) {
    }
}

export default singleAudioLearnableParser
