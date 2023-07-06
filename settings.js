const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)


//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['917404854406'] //ur owner number
global.ownernomer = "917404854406" //ur owner number2
global.ownername = "Ghost" //ur owner name
global.ytname = "YT: Zero" //ur yt chanel name
global.socialm = "GitHub: Daveshvtas" //ur github or insta name
global.location = "India, Haryana, Rohtak" //ur location

//new
global.botname = "Zero MD V4"
global.ownernumber = '917404854406'
global.ownername = 'GHOST'
global.ownerNumber = ["917404854406@s.whatsapp.net"]
global.wagc = "https://chat.whatsapp.com/C3prCscHcnJ7XA7YUXAnnG"
global.themeemoji = '🪀'
global.wm = "Zero Bot Inc."
global.botscript = 'https://github.com/Daveshvats/Zero-MD-4' //script link
global.packname = "Sticker By"
global.author = "Zero"
global.creator = "917404854406@s.whatsapp.net"
global.prefa = ['!','/','#','&','.']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./Media/theme/zero-bot.png") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/zero-bot.png") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/zero-bot.png") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/zero-bot.png") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
