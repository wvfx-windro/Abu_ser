const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'group', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
🌹ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs🌹
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌹 ᴀᴅᴅ
┣𝕾⃝🌹 ᴋɪᴄᴋ
┣𝕾⃝🌹 ᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴜɴᴍᴜᴛᴇ
┣𝕾⃝🌹 ᴘʀᴏᴍᴏᴛᴇ
┣𝕾⃝🌹 ᴅᴇᴍᴏᴛᴇ
┣𝕾⃝🌹 ɪɴᴠɪᴛᴇ
┣𝕾⃝🌹 ʀᴇᴠᴏᴋᴇ
┣𝕾⃝🌹 ᴡᴇʟᴄᴏᴍᴇ
┣𝕾⃝🌹 ɢᴏᴏᴅʙʏᴇ
┣𝕾⃝🌹 ʟᴇᴀᴠᴇ
┣𝕾⃝🌹 ᴛᴀɢ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}) 

}));
