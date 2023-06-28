const { modul } = require('../module');
const { axios, fs, fetch, FormData, FileType } = modul;
const { fromBuffer } = FileType

async function uptotelegra (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://graph.org/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://graph.org" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}
function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new FormData();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://graph.org/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://graph.org" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

module.exports = {uptotelegra, TelegraPh}