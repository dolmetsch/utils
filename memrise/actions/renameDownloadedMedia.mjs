/*
USAGE:
node thisScript.mjs <mediaListPath.txt> <saveToPath>
*/
import fs from 'fs'

const parsedPath = process.argv[2] // || './parsed'
const mediaPath = process.argv[3] || './media'
const destinationPath = process.argv[4] || './media/renamed'

const getStringLastPart = (str, delim) => {
	const parts = str.split(delim)
	return parts[parts.length - 1]
}
const fileNameFromPath = path => getStringLastPart(path, '/')
const fileExtFromPath = path => getStringLastPart(path, '.')

const renameMedia = async (parsedPath) => {
	const data = JSON.parse(fs.readFileSync(parsedPath))
	const field = 'original' // 'translation'
	data.map(record => {
		// in case of a single audio
		if (record.audio) {
			const fileName = fileNameFromPath(record.audio)
			const fileExt = fileExtFromPath(fileName)
			const src = mediaPath + '/' + fileName
			const dst = destinationPath + '/' + record[field] + '.' + fileExt
			if (fs.existsSync(dst)) {
				console.log('ALREADY', record[field])
			} else {
				if (fs.existsSync(src)) {
					try {
						fs.copyFileSync(src, dst)
						console.log('COPIED', record[field])
					} catch (e) {
						console.error('ERROR', record, src, dst, e)
					}
				} else {
					console.log('NOT FOUND', record[field], src)
				}
			}
		}
		// in case of many audios
		// if (l.media?.audios) {
		// 	let i = 0
		// 	l.media.audios.map(url => {
		// 		i += 1
		// 		const fn = fileNameFromPath(url)
		// 		const src = '../raw/media/' + fn
		// 		const dst = '../parsed/media/audios/' + l.letter.small + `_${i}.` + fileExt(fn)
		// 		if (existsSync(dst)) {
		// 			console.log('ALREADY', l.letter.small, i, 'audio')
		// 		} else {
		// 			copyFileSync(src, dst)
		// 			console.log('COPIED', l.letter.small, i, 'audio')
		// 		}
		// 	})
		// }
	})
}

renameMedia(parsedPath)
