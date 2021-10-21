/*
Bot privado apenas do Skiller
*/
const {
	MessageOptions,
	WAFlag,
	WANode,
	WAMetric,
	ChatModification,
	DisconectReason,
	WAMessageProto,
	MessageTypeProto,
  WAConnection,
	WALocationMessage,
	ReconnectMode,
	WAContextInfo,
	proto,
	ProxyAgent,
	waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent, 
  WAMessage, 
  BaileysError, 
  WA_MESSAGE_STATUS_TYPE, 
  MediaConnInfo, 
  URL_REGEX, 
  WAUrlInfo, 
  WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload,
	mentionedJid,
	processTime,
	Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
	relayWAMessage,
  GroupSettingChange
} = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const { creditos } = require('./src/creditos')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, fetchText } = require('./lib/fetcher')
const { recognize } = require('./lib/ocr')
const fs = require('fs')
const { ss } = require('./lib/screenshot')
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const yts = require('yt-search')
const encodeUrl = require('encodeurl')
const { yta, ytv, igdl, upload, uploadImages } = require('./lib/ytdl')
const { removeBackgroundFromImageFile } = require('remove.bg')
const welkom = JSON.parse(fs.readFileSync('./src/welkom.json'))
const setting = JSON.parse(fs.readFileSync('./src/settings.json'))
const ajuda = require("./lib/help")
const request = require('request')
const getJson = ajuda.getJson

//prefix = setting.prefix
blocked = []
logo = fs.readFileSync('./assets/botlogo.webp') 
fake = setting.fake
banChats = setting.banChats
botnome = setting.botnome
dononome = setting.dononome
const prem = JSON.parse(fs.readFileSync('./database/premium.json'));
const votation = JSON.parse(fs.readFileSync('./database/votation.json'))
const antiloc = JSON.parse(fs.readFileSync('./database/antiloc.json'))
const leveling = JSON.parse(fs.readFileSync('./json/leveling.json'))
const level = JSON.parse(fs.readFileSync('./json/level.json'))
const irisMsgs = fs.readFileSync('./lib/reply.txt').toString().split('\n')
const chatBotR = irisMsgs[Math.floor(Math.random() * irisMsgs.length)].replace('%name$')
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}
/********** FUNCTION LEVEL ***************/ 
const getLevelingXp = (userId) => {
let position = false
Object.keys(level).forEach((i) => {
if (level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return level[position].xp
}
}

const getLevelingLevel = (userId) => {
let position = false
Object.keys(level).forEach((i) => {
if (level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return level[position].level
}
}        

const getLevelingId = (userId) => {
let position = false
Object.keys(level).forEach((i) => {
if (level[i].jid === userId) {
position = i
}
})
if (position !== false) {
return level[position].jid
}
}

const addLevelingXp = (userId, amount) => {
let position = false
Object.keys(level).forEach((i) => {
if (level[i].jid === userId) {
position = i
}
})
if (position !== false) {
level[position].xp += amount
fs.writeFileSync('./json/level.json', JSON.stringify(level))
}
}

const addLevelingLevel = (userId, amount) => {
let position = false
Object.keys(level).forEach((i) => {
if (level[i].jid === userId) {
position = i
}
})
if (position !== false) {
level[position].level += amount
fs.writeFileSync('./json/level.json', JSON.stringify(level))
}
}

const addLevelingId = (userId) => {
const obj = {jid: userId, xp: 1, level: 1}
level.push(obj)
fs.writeFileSync('./json/level.json', JSON.stringify(level))
}
//REGISTRO
        const crypto = require('crypto') //PARA CRIAR O SERIAL/ID DO RG
const registro = JSON.parse(fs.readFileSync('./registro/registro.json')) //DADOS DAS PESSOAS REGISTRADAS
const registro18 = JSON.parse(fs.readFileSync('./registro/registro18.json')) //DADOS DAS PESSOAS REGISTRADAS +18
const estrela5 = JSON.parse(fs.readFileSync('./avalia/estrela5.json')) 
const estrela4 = JSON.parse(fs.readFileSync('./avalia/estrela4.json')) 
const estrela3 = JSON.parse(fs.readFileSync('./avalia/estrela3.json')) 
const estrela2 = JSON.parse(fs.readFileSync('./avalia/estrela2.json')) 
const estrela1 = JSON.parse(fs.readFileSync('./avalia/estrela1.json'))
const javaliou = JSON.parse(fs.readFileSync('./avalia/javaliou.json')) 

           const getRegisteredRandomId = () => {
            return registro[Math.floor(Math.random() * registro.length)].id
        }

        const addRegisteredUser = (userid, sender, idade, horário, serials) => {
            const obj = { id: userid, nome: sender, idade: idade, horário: horário, serial: serials }
            registro.push(obj)
            fs.writeFileSync('./registro/registro.json', JSON.stringify(registro))
        }
        
       const addRegisteredUser18 = (userid, sender, idade, horário, serials) => {
            const obj = { id: userid, nome: sender, idade: idade, horário: horário, serial: serials }
            registro18.push(obj)
            fs.writeFileSync('./registro/registro18.json', JSON.stringify(registro18))
        }
        
        const add5es = (sender) => {
            const obj = { sender }
            estrela5.push(obj)
            fs.writeFileSync('./avalia/estrela5.json', JSON.stringify(estrela5))
        }
        
        const add4es = (sender) => {
            const obj = { sender }
            estrela4.push(obj)         
            fs.writeFileSync('./avalia/estrela4.json', JSON.stringify(estrela4))   
        }

const add3es = (sender) => {
            const obj = { sender }
            estrela3.push(obj)    
            fs.writeFileSync('./avalia/estrela3.json', JSON.stringify(estrela3))
             
        }

const add2es = (sender) => {
            const obj = { sender }
            estrela2.push(obj)  
            fs.writeFileSync('./avalia/estrela2.json', JSON.stringify(estrela2))   
        }

const add1es = (sender) => {
            const obj = { sender }
            estrela1.push(obj)
            fs.writeFileSync('./avalia/estrela1.json', JSON.stringify(estrela1))
        }

        const sayoseri = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }

        const checaregistro = (sender) => {
            let status = false
            Object.keys(registro).forEach((i) => {
                if (registro[i].id === sender) {
                    status = true
                }
            })
            return status
        }
async function starts() {
	const client = new WAConnection()
	client.logger.level = 'warn'
	console.log(banner.string)
	client.on('qr', () => {
		console.log(color('[','white'), color('!','red'), color(']','white'), color('escaneie o código qr'))
	})

	fs.existsSync('./qrcode.json') && client.loadAuthInfo('./qrcode.json')
	client.on('connecting', () => {
		start('2', 'Conectando base...')
	})
	client.on('open', () => {
		success('2', 'Base conectada')
	})
	await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./qrcode.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))

	client.on('group-participants-update', async (anu) => {
		if (!welkom.includes(anu.jid)) return
      try {
         const mdata = await client.groupMetadata(anu.jid)
         num = anu.participants[0]
         console.log(anu)
         ini_user = client.contacts[num]
         namaewa = ini_user.notify
         member = mdata.participants.length

         try {
               var ppimg = await client.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
            } catch {
               var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        try {
               var ppgc = await client.getProfilePicture(anu.jid)
            } catch {
               var ppgc = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            }
        shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`)
        shortgc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppgc}`)
         if (anu.action == 'add') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/welkom?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Ola ${namaewa}\nâ—ª Seja bem vindo ao:${mdata.subject}  ${num.replace('@s.whatsapp.net', '')}\nEspero que goste do grupo~~\n${ini_user.notify}`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]} })
         } else if (anu.action == 'remove') {
         	img = await getBuffer(`https://servant-of-evil.herokuapp.com/api/swiftlite/goodbye?nama=${encodeUrl(namaewa)}&gc=${encodeUrl(mdata.subject)}&ppgc=${shortgc.data}&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'&member=${mdata.participants.length}&apikey=GFL`)
            teks = `Adeus ${namaewa}\n Saiu do grupo:${mdata.subject}\n este sem futuro: ${num.replace('@s.whatsapp.net', '')}\Adeus~~`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
          } else if (anu.action == 'promote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=ParabÃ©s por se tornar um adm do grupo!&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `PROMOVER DETECTADO\n\n o membro: ${num.replace('@s.whatsapp.net', '')}\nâ”œâ”€ Mensagem: @${num.split('@')[0]} se tornou um administrador do grupo, parabens`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         } else if (anu.action == 'demote') {
            img = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeUrl(namaewa)}&member=${member}&pesan=${namaewa} virou membro comum&pp=${shortpc.data}&bg=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxANrjm0j_uzUclnOAlHjtgroMtblwSPChJg&usqp=CAU'`)
            teks = `REBAIXAR DETECTADO\n\n\no membro: ${num.replace('@s.whatsapp.net', '')}\nâ”œâ”€  @${num.split('@')[0]} não e mais um administrador do grupo`
            client.sendMessage(mdata.id, img, MessageType.image, {caption: teks, contextInfo: {'mentionedJid': [num]}})
         }
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	})

	client.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
	    for (let i of json[1].blocklist) {
	    	blocked.push(i.replace('c.us','s.whatsapp.net'))
	    }
	})

	client.on('chat-update', async (mek) => {
		try {
            if (!mek.hasNewMessage) return
            mek = mek.messages.all()[0]
			if (!mek.message) return
			if (mek.key && mek.key.remoteJid == 'status@broadcast') return
			if (mek.key.fromMe) return
			const content = JSON.stringify(mek.message)
			const type = Object.keys(mek.message)[0]
			const from = mek.key.remoteJid
			const zeksapi = setting.zeksapi 
			const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
			const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
			const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
            const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '.'
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : ''
			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
			const isCmd = body.startsWith(prefix)
			const isMsg = budy.startsWith
            global.prefix
			global.blocked
			//Botão
			selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
            body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (mek.message.listResponseMessage && mek.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) && mek.message.listResponseMessage.singleSelectReply.selectedRowId) ? mek.message.listResponseMessage.singleSelectReply.selectedRowId : (mek.message.buttonsResponseMessage && mek.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : ''



			budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''



            var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'buttonsMessage') && mek.message.buttonsMessage.text ? mek.message.buttonsMessage.text : ''
            
			const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
			const messagesC = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
			const args = body.trim().split(/ +/).slice(1)
			
			mess = {
				wait: 'Estou fazendo ⌛',
				registro: `
	╭◪ *「 📝REGISTRO📝  」*
	╰───────────────╮
	╭───────────────╯
	├❏ Para se registrar :
	├❏「📌」Basta inscrever-se no canal
    ├❏「📌」 https://youtube.com/c/SkillerOfc 
    ├❏ e digitar ${prefix}rg idade
	├❏ exemplo : ${prefix}rg 15
	╰───────────────╯						
										`,
				sucesso: '✔️ Deu certo ✔️',
				erro: {
					stick: '❌ te peço que mande primeiro sua imagem ou gif/video de 9s no maximo e depois mande uma mensagem marcando o mesmo com .sticker❌',
					Iv: '❌ Link inválido ❌'
				},
				only: {
					grupo: '❌ Este comando só pode ser usado em grupos! ❌',
					premium: '[❗] ESTE PEDIDO É SO PARA *USUÁRIOS PREMIUMS*',
					donogrupo: '❌ Este comando só pode ser usado pelo dono! ❌',
					donobot: '❌ Este comando só pode ser usado pelo meu dono! ❌',
					admin: '❌ Este comando só pode ser usado por administradores de grupo! ❌',
					botadm: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
				}
			}

			const botNumber = client.user.jid
			const ownerNumber = [`${setting.ownerNumber}@s.whatsapp.net`] // replace this with your number
			const isGroup = from.endsWith('@g.us')
			const sender = isGroup ? mek.participant : mek.key.remoteJid
			const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
			const groupName = isGroup ? groupMetadata.subject : ''
			const groupId = isGroup ? groupMetadata.jid : ''
			const groupMembers = isGroup ? groupMetadata.participants : ''
			const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
			const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
			const isGroupAdmins = groupAdmins.includes(sender) || false
			const isWelkom = isGroup ? welkom.includes(from) : false
            const isRegistrar = checaregistro(sender)
			const isRegistrar18 = registro18.includes(sender)
			const isLevelingOn = isGroup ? leveling.includes(from) : true
            pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
			const isOwner = ownerNumber.includes(sender)
			const isBot = botNumber.includes(sender)
			const isPreemium = prem.includes(sender)         
			const q = args.join(' ')
const horario = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(horario < "23:59:00"){
var frase = 'Boa noite'
                                        }
if(horario < "19:00:00"){
var frase = 'Boa tarde'
                                         }
if(horario < "18:00:00"){
var frase = 'Boa tarde'
                                         }
if(horario < "15:00:00"){
var frase = 'Boa tarde'
                                         }
if(horario < "11:00:00"){
var frase = 'Boa noite'
                                         }
if(horario < "05:00:00"){
var frase = 'Bom dia'
                                         }
                                         const msgbodia = `Horario:${horario}\n${frase}`
			const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": msgbodia, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync(`assets/botlogo.webp`)} } }
			const isUrl = (url) => {
			    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
			}
			const enviar = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const reply = (teks) => {
				client.sendMessage(from, teks, text, {quoted:mek})
			}
			const skillo = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": `Private Bot`,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": logo, "sourceUrl": `https://api.whatsapp.com/send?phone=558892594715&text=Salvee!!!%20meu Nick é:`},mentionedJid:[sender]
            }
            const slslsl = {text: 'oi', sendEphemeral: true,"externalAdReply": {"title": 'Clique e visualize os produtos❗' ,"body": "","previewType": "PHOTO","thumbnailUrl": "","thumbnail": logo, "sourceUrl": `https://drive.google.com/file/d/1WqwrJon5jmNVn0zjT2og6sAIqZ7HPoAA/view?usp=drivesdk`},mentionedJid:[sender]
            }
			const sendMess = (hehe, teks) => {
				client.sendMessage(hehe, teks, text)
			}
			if ((budy === "Offpv")){
				    if (!isOwner) return await reply('Apenas meu dono o owner')
                      if (!banChats) return await reply('Nao estava ativado ainda')
                      banChats = false
                      setting.banChats = banChats
                      fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
                      await client.sendMessage(from, "*Sucesso modo antipv desligado, pv liberado.", text)           
				    }
			if (banChats === true) return reply(`Oii, agradeço por seu contato.
Meu atendimento pelo WhatsApp e Instagram funcionam de segunda-feira à sexta-feira de *08:00 às 17:00h* , com intervalo de almoço de *12:00 às 13:30h* e aos sábados de *08:00 às 12:00.* 
(Só não atendo normalmente nos domingos e nos feriados.)
Assim que possível, retorno seu contato.
*Att. Iara Witória*❤️`)
              const iarabot = mek.isBaileys
              if (iarabot === true) return

			avaliacao = client.prepareMessageFromContent(from,{
"listMessage": {
"title": "Avalie o nosso trabalho",
"description": "Agradecemos sua resposta",
"buttonText": "Avaliar",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": '⭐⭐⭐⭐⭐',
"rowId": ''
},
{
"title": '⭐⭐⭐⭐',
"rowId": ''
},
{
"title": '⭐⭐⭐',
"rowId": ''
},
{
"title": '⭐⭐',
"rowId": ''
},
{
"title": '⭐',
"rowId": ''
}
]
}
]                    
}
}, {quoted:freply})
			 produtos = client.prepareMessageFromContent(from,{
"listMessage": {
"title": "Nossos produtos!",
"description": "Clique no produto desejado e envie",
"buttonText": "Ver produtos",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'Decoração (Quadros, placas, porta chaves e afins)',
"rowId": ''
},
{
"title": 'Polaroids',
"rowId": ''
},
{
"title": 'Chaveiro personalizado',
"rowId": ''
},
{
"title": 'Ilustração ou Logotipo',
"rowId": ''
},
{
"title": 'Cestas ou caixas',
"rowId": ''
},
{
"title": 'Imãs',
"rowId": ''
},
{
"title": 'Convites/tags',
"rowId": ''
},
{
"title": 'Cubo de fotos/álbum personalizado',
"rowId": ''
},
{
"title": 'RG do Pet',
"rowId": ''
},
{
"title": 'Currículo',
"rowId": ''
},
{
"title": 'Impressão simples',
"rowId": ''
},
{
"title": 'Outro',
"rowId": ''
}
]
}
]                    
}
}, {quoted:freply})
produtos2 = client.prepareMessageFromContent(from,{
"listMessage": {
"title": "Outros produtos",
"description": "Clique no produto desejado e envie",
"buttonText": "Ver produtos",
"listType": "SINGLE_SELECT",
"sections": [
{
"rows": [
{
"title": 'Quadros',
"rowId": ''
},
{
"title": 'Placas',
"rowId": ''
},
{
"title": 'Porta chaves',
"rowId": ''
},
{
"title": 'Pote de luzes',
"rowId": ''
},
{
"title": 'Cartões',
"rowId": ''
},
{
"title": 'Carta do Harry Potter',
"rowId": ''
}
]
}
]                    
}
}, {quoted:freply})

			const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vf "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=60, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse" ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: freply})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}  
const sendStickerSt = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('pronto');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
client.sendMessage(to, media, MessageType.sticker,{sendEphemeral: true, contextInfo: { forwardingScore: 508, isForwarded: true}, quoted: freply})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}  
			const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
client.sendMessage(to, media, type, { quoted: freply, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}   
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Erro ao baixar e enviar mídia_')
console.log(e)
})
})
})
})
}
			const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : client.sendMessage(from, teks.trim(), extendedText, {quoted: freply, contextInfo: {"mentionedJid": memberr}})
			}
			
			//Botão
if (selectedButton == `produts`) {
teks = ' '
client.sendMessage(from, teks ,text,{quoted: mek, contextInfo: slslsl})
        }
	if (selectedButton == `Pedir`) {
reply("te enviarei uma ficha que você ira preencher e enviar")
reply(`Seu nome:\nSeu pedido e para entrega?\nQual metodo de pagamento?\nO que você deseja pedir?`)
		}
if (selectedButton == `Cestas`) {
 const info = `
Cestas
O valor vai depender de quais itens você gostaria de colocar dentro da cestinha, então envie a lista dos itens que passo o orçamento
`
 reply(info)
}
if (selectedButton == `Caixas`) {
 const info = `
Caixas:
O valor vai depender de quais itens você gostaria de colocar dentro da caixinha, então envie a lista dos itens que passo o orçamento
`
 reply(info)
}
if (selectedButton == `Ilustração`) {
 const info = `
Ilustração: Para solicitar o orçamento de uma ilustração envie a foto desejada!
`
 reply(info)
}
if (selectedButton == `Logotipo`) {
 const info = `
Logotipo: Para saber o orçamento do logotipo responda algumas perguntas:
• Qual o tipo de negócio?
• Gostaria de uma criação do zero, ou quer reaproveitar o seu logotipo antigo?
• Tem algum desenho no projeto?
`
 reply(info)
}
if (selectedButton == `Cubo de fotos`) {
 const info = `
Cubo de fotos: R$25,00
`
 reply(info)
}
if (selectedButton == `álbum personalizado`) {
 const info = `
Para álbuns:
Diga a quantidade de fotos que deseja adicionar no álbum e escolha um dos tamanhos para saber o orçamento:
10 x 15 cm
20 x 20 cm
15 x 21 cm
`
 reply(info)
}
//BOTÃO DE LISTA
symantec = (type === 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
if (symantec == '⭐⭐⭐⭐⭐') {
reply("Avaliação enviada")
add5es(sender)
}
if (symantec == '⭐⭐⭐⭐') {
reply("Avaliação enviada")
add4es(sender)
}
if (symantec == '⭐⭐⭐') {
reply("Avaliação enviada")
add3es(sender)
}
if (symantec == '⭐⭐') {
reply("Avaliação enviada")
add2es(sender)
}
if (symantec == '⭐') {
reply("Avaliação enviada")
}else{
add1es(sender)
}
if (symantec == 'Carta do Harry Potter') {
 const info = `
Carta do Harry Potter: R$10,00
`
 reply(info)
}
if (symantec == 'Cartões') {
 const info = `
Cartão Love: R$14,90
Cartão colmeia: R$39,90
`
 reply(info)
}
if (symantec == 'Pote de luzes') {
 const info = `
Pote de luzes: R$37,90
`
 reply(info)
}
if (symantec == 'Porta chaves') {
 const info = `PORTAS CHAVES🔑
Tabela de porta chaves:
15 x 21cm, por R$34,90
20 x 20cm, por R$37,90
15 x 15cm, por R$31,90
20 x 30cm, por R$44,90
`
 reply(info)
}
if (symantec == 'Quadros') {
 const info = `QUADROS🖼️
Quadro 20 x 30 cm, R$39,90
Quadro 15 x 21 cm, R$27,90
Quadro 20 x 20 cm, R$34,90
Quadro 15 x 15 cm, R$24,90
`
 reply(info)
}
if (symantec == 'Placas') {
 const info = `PLACAS 🪧
Plaquinhas de MDF: 
Plaquinha 20 x 28cm: R$18,90
Plaquinha 19 x 19cm: R$15,90
`
 reply(info)
}
if (symantec == 'Polaroids') {
 const info = `POLAROIDS🌠
Polaroids tamanho pequeno, 6 x 8 cm
Pacote com 10 Polaroids
R$9,99
Pacote com 15 Polaroids
R$13,99
Pacote com 20 Polaroide 
R$18,99
Pacote com 25 Polaroids
R$23,99
Pacote com 30 Polaroids
R$27,99

Polaroids tamanho médio, 8 x  10 cm
Pacote com 10 Polaroids
R$14,90
Pacote com 15 Polaroids
R$21,90
Pacote com 20 Polaroide 
R$29,90
Pacote com 25 Polaroids
R$35,90
Pacote com 30 Polaroids
R$44,90

Polaroids tamanho grande, 10 x 12 cm
Pacote com 4 polaroids: R$7,90
Pacote com 10 polaroids:
R$18,90
Pacote com 15 polaroids:
R$28,90
Pacote com 20 polaroids:
R$34,90
Pacote com 30 polaroids:
R$57,90


Polaroid de mesa: R$11,90

(Caso o pedido ultrapasse de 30 unidades basta informar que passo o valor pra você)
`
 reply(info)
}
if (symantec == 'Chaveiro personalizado') {
 const info = ` CHAVEIROS PERSONALIZADOS🦋
Chaveiro de acrílico 3 x 4 com foto ou frase: R$9,90
Chaveiro de acrílico em formato de coração: R$14,90
`
 reply(info)
}
if (symantec == 'Ilustração ou Logotipo') {
const buttons3 = [
{buttonId: 'Ilustração', buttonText: {displayText: 'Ilustração'}, type: 1},
{buttonId: 'Logotipo', buttonText: {displayText: 'Logotipo'}, type: 1},
]
const button3Message = {
contentText: `
Sobre que produto deseja saber?
`,
footerText: 'Ilustração/Logotipo',
buttons: buttons3,
headerType: 1
}
client.sendMessage(from, button3Message, MessageType.buttonsMessage, {quoted: freply})
}
if (symantec == 'Cestas ou caixas') {
const buttons3 = [
{buttonId: 'Cestas', buttonText: {displayText: 'Cestas'}, type: 1},
{buttonId: 'Caixas', buttonText: {displayText: 'Caixas'}, type: 1},
]
const button3Message = {
contentText: `
Sobre que produto deseja saber?
`,
footerText: 'Cestas/caixas',
buttons: buttons3,
headerType: 1
}
client.sendMessage(from, button3Message, MessageType.buttonsMessage, {quoted: freply})
}
if (symantec == 'Imãs') {
const info = `
Imãs tamanho Mini 6 x 8 cm
Pacote com 10 Polaroids
R$17,90
Pacote com 15 Polaroids
R$26,90
Pacote com 20 Polaroide 
R$35,90
Pacote com 25 Polaroids
R$44,90
Pacote com 30 Polaroids
R$49,90
(Caso tenha interesse em outro tamanho basta solicitar)
`
 reply(info)
}
if (symantec == 'Convites/tags') {
const info = `CONVITES E TAGS❤️
Convites:
Para solicitar o orçamento de convite envie uma foto de referência de algum convite que deseja, e a quantidade desejada.

Tags
Para impressão de Tags, etiquetas ou algo do tipo, informe a quantidade e o modelo desejados.
`
 reply(info)
}
if (symantec == 'Cubo de fotos/álbum personalizado') {
const buttons2 = [
{buttonId: 'Cubo de fotos', buttonText: {displayText: 'Cubo de fotos'}, type: 1},
{buttonId: 'álbum personalizado', buttonText: {displayText: 'álbum personalizado'}, type: 1},
]
const button2Message = {
contentText: `
Sobre que produto deseja saber?
`,
footerText: 'Cubo de fotos/álbum personalizado',
buttons: buttons2,
headerType: 1
}
client.sendMessage(from, button2Message, MessageType.buttonsMessage, {quoted: freply})
}
if (symantec == 'RG do Pet') {
 const info = `REGISTROS PARA PET🐕🐈‍⬛
RG do Pet: R$10,00 
`
 reply(info)
}
if (symantec == 'Decoração (Quadros, placas, porta chaves e afins)') {
 client.relayWAMessage(produtos2)
}
if (symantec == 'Currículo') {
 const info = `CURRÍCULOS📝
Currículo: R$18,00
`
 reply(info)
}
if (symantec == 'Impressão simples') {
 const info = `IMPRESSÃO📄
• Xerox: R$1,00
• Impressão simples em A4: R$1,50
• Impressão em papel fotográfico: R$5,00
• Impressão em papel fotográfico adesivo: R$6,00
• Impressão em papel adesivo fosco: R$4,00
• Impressão em papel 60kg: R$3,50
• Impressão em papel 40kg: R$2,00
`
 reply(info)
}
if (symantec == 'Outro') {
reply("Descreva qual o tipo de serviço ou ideia que está procurando, estou a disposição para ajudar!")
}
//fim dos botões

			colors = ['red','white','black','blue','yellow','green']
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			
			//COMANDOS
			if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]),'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			//MENSAGENS
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensagem'), 'de', color(pushname), color(sender.split('@')[0]), 'grupo', color(groupName), 'args :', color(args.length))
			
            let authorname = client.contacts[from] != undefined ? client.contacts[from].vname || client.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }	
			
			function addMetadata(packname, author) {	
				if (!packname) packname = 'Skiller'; if (!author) author = 'Bot';	
				author = author.replace(/[^a-zA-Z0-9]/g, '');	
				let name = `${author}_${packname}`
				if (fs.existsSync(`./src/stickers/${name}.exif`)) return `./src/stickers/${name}.exif`
				const json = {	
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}
				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

				let len = JSON.stringify(json).length	
				let last	

				if (len > 256) {	
					len = len - 256	
					bytes.unshift(0x01)	
				} else {	
					bytes.unshift(0x00)	
				}	

				if (len < 16) {	
					last = len.toString(16)	
					last = "0" + len	
				} else {	
					last = len.toString(16)	
				}	

				const buf2 = Buffer.from(last, "hex")	
				const buf3 = Buffer.from(bytes)	
				const buf4 = Buffer.from(JSON.stringify(json))	

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

				fs.writeFile(`./src/stickers/${name}.exif`, buffer, (err) => {	
					return `./src/stickers/${name}.exif`	
				})	

			}
switch(command) {
case 'bc':
					if (!isOwner) return reply('Quem é você?')
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ *TRASMISSÃO DESENHANDO VOCÊ* ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *TRASMISSÃO DESENHANDO VOCÊ* ]\n\n${body.slice(4)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
case 'tm':
					if (args.length < 1) return reply('.......')
					anu = await client.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							client.sendMessage(_.jid, buff, image, {caption: `[ *TRASMISSÃO DESENHANDO VOCÊ* ]\n\n${body.slice(4)}`})
						}
						reply('Transmissao enviada')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ *TRASMISSÃO DESENHANDO VOCÊ* ]\n\n${body.slice(4)}`)
						}
						reply('Tm enviada com sucesso')
					}
					break
}
			switch(budy) {
				case 'Olá, tenho interesse em um de seus produtos, poderia fazer um orçamento?':
				case 'Quero fazer um orçamento':
case 'Ola, gostaria de fazer um orçamento.':
				case 'Orçamento':
				case 'orçamento':
				case 'Produtos':
				case 'produtos':
				case 'Olá':
				case 'olá':
				case 'oii':
				case 'Oi':
				case 'Boa noite':
				case 'boa noite':
				case 'Bom dia':
				case 'bom dia':
				case 'boa tarde':
				case 'Boa tarde':
				case 'Lara':
				case 'Iara':
				case 'Tudo bem?':
				case 'tudo bem?':
				case 'Voltei':
				case 'voltei':
				case 'desenhando você':
				case 'Desenhando você':
				client.relayWAMessage(produtos) 
				const buttonsa = [
{buttonId: 'produts', buttonText: {displayText: 'Visualizar produtos'}, type: 1},
]
const buttonaMessage = {
contentText: `
Catálogo com imagens
`,
footerText: 'Este catálogo contém todas as fotos dos nossos produtos',
buttons: buttonsa,
headerType: 1
}
client.sendMessage(from, buttonaMessage, MessageType.buttonsMessage, {quoted: freply})
				break
case 'avaliar':
case 'Avaliar': 
client.relayWAMessage(avaliacao)
break

case 'avaliaçoes'://CASE BY SKILLER
case 'avaliações':
case 'Avaliaçoes':
case 'Avaliações':
es1 = estrela1.length
es2 = estrela2.length
es3 = estrela3.length
es4 = estrela4.length
es5 = estrela5.length
ttl = javaliou.length

				reply(`Avaliações
				⭐⭐⭐⭐⭐ ${es5}
				⭐⭐⭐⭐ ${es4}
				⭐⭐⭐ ${es3}
				⭐⭐ ${es2}
				⭐ ${es1}
				Avaliações totais:${ttl}
				`)
				break
case 'Onpv':
case 'onpv':
                      if (!isOwner) return await reply('Apenas Meu Dono')
                      if (banChats) return await reply('já está ativo o modo antipv')
                      banChats = true
                      setting.banChats = banChats
                      fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
                      await client.sendMessage(from, "*Sucesso alterado para modo antipv, pv não poderá ser utilizado", text)
                      break
                  case 'Offpv':
                  case 'offpv':
                      if (!isOwner) return await reply('Apenas meu dono o owner')
                      if (!banChats) return await reply('Nao estava ativado ainda')
                      banChats = false
                      setting.banChats = banChats
                      fs.writeFileSync('./src/settings.json', JSON.stringify(setting, null, '\t'))
                      await client.sendMessage(from, "*Sucesso modo antipv desligado, pv liberado.", text)
                      break
case 'pedir':
const bug = body.slice(7)
 if (args.length > 300) return client.sendMessage(from, 'Máximo 300 caracteres', msgType.text, {quoted: mek})
var nomor = mek.participant
teks1 = `[Novo pedido]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nPedido: ${bug}`
var options = {
 text: teks1, 
contextInfo: {mentionedJid: [sender]}, 
}
client.sendMessage('558892594715@s.whatsapp.net', teks1, text, {quoted: mek})
reply("Seu pedido foi enviado em breve retornaremos")
break
				default: 
				if (body == `${prefix}${command}`) {
hsl = `*⟅❗em que posso ajudar?❗⟆ *\n\n❯ Olá @${sender.split("@")[0]}!!\n❯ Eu sou o bot:*Desenhando você*\n❯ digite *Orçamento* para ver meus produtos\n❯ *Agradecemos pela sua escolha* ^^`
client.sendMessage(from, hsl, text, {quoted: freply, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()