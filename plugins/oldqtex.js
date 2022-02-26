const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'mp3 downlod', fromMe: false, desc: 'command help menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
🌺 ᴍᴘ3 ᴄᴏᴍᴍᴀɴᴅs🌺
┏╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
┣𝕾⃝🌺 ᴍᴘ3
┣𝕾⃝🌺 sᴛɪᴄᴋᴇʀ
┣𝕾⃝🌺 ᴘʜᴏᴛᴏ
┣𝕾⃝🌺 ʀᴇᴠᴇʀᴄᴇ
┣𝕾⃝🌺 ʙᴀss
┣𝕾⃝🌺 ᴘɪᴛᴄʜ
┣𝕾⃝🌺 ʟᴏᴡ
┣𝕾⃝🌺 ᴛᴛs
┣𝕾⃝🌺 ᴜɴᴠᴏɪᴄᴇ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇʙɢ
┣𝕾⃝🌺 ᴀᴛᴛᴘ
┣𝕾⃝🌺 ᴇᴍᴏ
┣𝕾⃝🌺 ᴛʀᴛ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ
┣𝕾⃝🌺 ᴘʟᴜɢɪɴ ʟɪsᴛ
┣𝕾⃝🌺 ʀᴇᴍᴏᴠᴇ
┣𝕾⃝🌺 ғɪʟᴛᴇʀ
┣𝕾⃝🌺 ᴊɪᴅ
┣𝕾⃝🌺 ʙʟᴏᴄᴋ
┣𝕾⃝🌺 ᴜɴʙʟᴏᴄᴋ
┣𝕾⃝🌺 ᴡʜᴏɪs
┣𝕾⃝🌺 ᴘɪɴɢ
┣𝕾⃝🌺 ᴍᴇɴᴜ
┣𝕾⃝🌺 ʜᴇʟᴘ
┣𝕾⃝🌺 ɪɴғᴏ
┗╍╍╍╍╍╍╍╍╍╍╍╍╍╍╍
`}) 

}));
