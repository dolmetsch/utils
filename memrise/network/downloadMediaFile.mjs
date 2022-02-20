import fs from 'fs'
import https from 'https'

export const downloadMediaFile = (url, pathToSave, overwrite=false, verbose=false) => {
    if (!overwrite && fs.existsSync(pathToSave)) {
		verbose && console.log('ALREADY', url)
		return Promise.resolve(false)
	}
    return new Promise((resolve) => {
		const file = fs.createWriteStream(pathToSave)
		verbose && console.log('START', url)
		https.get(url, response => {
			response.pipe(file)
			response.on('end', () => {
				verbose && console.log('FINISH', url)
				file.close()
				resolve(true)
			})
		})
	})
}

export default downloadMediaFile
