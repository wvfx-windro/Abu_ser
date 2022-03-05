const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const fs = require('fs');
const got = require('got');
const config = require('../config');
const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'owner list', fromMe: false, desc: 'command give me owner'}, (async (message, match) => {

    var r_text = new Array ();
    
    r_text[0] = Config.LG_LOGO
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `
   ` + config.LOGO_NAME + `
 
🎗️ .Wɪɴᴅʀᴏ [Oᴡɴᴇʀ]
💖 Wʜᴀᴛsᴀᴘᴘ Nᴜᴍʙᴇʀ:-wa.me/918606413490._ 

🎗️ .Aʙᴜ Sᴇʀ [Oᴡɴᴇʀ]
💖 Wʜᴀᴛsᴀᴘᴘ Nᴜᴍʙᴇʀ:-wa.me/917025994178._ 

🎗️ .Aᴍʀᴜ sᴇʀ [Oᴡɴᴇʀ]
💖 Wʜᴀᴛsᴀᴘᴘ Nᴜᴍʙᴇʀ:-wa.me/917025631103._ 

`}) 

}));
