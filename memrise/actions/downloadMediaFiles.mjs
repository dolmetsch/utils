/*
USAGE:
node thisScript.mjs <mediaListPath.txt> <saveToPath>
*/

import downloadMediaFile from '../network/downloadMediaFile.mjs'
import fs from 'fs'

const mediaListPath = process.argv[2] || './media_urls'
const saveToPath = process.argv[3] || './media'

const makePathToStore = url => {
    const parts = url.split('/')
	return saveToPath + '/' + parts[parts.length - 1]
}

const downloadMedia = async (mediaListPath) => {
    const urls = fs.readFileSync(mediaListPath).toString().split('\n').filter(a => a)
    let total = 0
    let failed = 0
    const failedUrls = []
    let successfull = 0
    let alreadyDownloaded = 0
	return await Promise.all(urls.map(url => {
        const u = url
        return downloadMediaFile(url, makePathToStore(url)).then(result => {
            total++
            if (result) {
                successfull++
            } else {
                alreadyDownloaded++
            }
            return [u, result ? 'successfull download' : 'is already downloaded']
        }).catch(_ => {
            console.log('failed', u)
            failed++
            failedUrls.push(u)
        })
    })).then((results) => {
        // console.log('URLs were in the list', urls.length)
        // console.log('total attempted', total)
        // console.log('successfull downloads', successfull),
        // console.log('were already downloaded', alreadyDownloaded)
        // console.log('failed', failed, failedUrls)
        return [mediaListPath, {
            total,
            successfull,
            alreadyDownloaded,
            failed,
            failedUrls,
            details: results
        }]
    })
}

if (mediaListPath.endsWith('.txt')) {
    await downloadMedia(mediaListPath)
} else {
    await Promise.all(
        fs.readdirSync(mediaListPath)
            .filter(f => f.endsWith('.txt'))
            .map(path => downloadMedia(mediaListPath + '/' + path))
    ).then(results => console.log(JSON.stringify(results)))
}
