const Sana = require('../events');

const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');

const fs = require('fs');

const Config = require('../config')

const axios = require('axios')

const request = require('request');

const os = require('os');

var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    

var ggg = Buffer.from(clh.cd, 'base64')

var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Sana.addCommand({pattern: 'link', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {

// send a buttons message!

    const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '♡︎..𝙶𝙸𝚃..𝙻𝙽𝙺..♡︎  \n\n\nhttps://github.com/Ajx-Abu/Sana-Mwol'}, type: 1},

        {buttonId: 'id2', buttonText: {displayText: '♡︎..𝙶𝚁𝙾𝚄𝙿..𝙻𝙸𝙽𝙺..♡︎   \n\n\nhttps://chat.whatsapp.com/Bq0eHs3UpGJ2BKIHOmy7mk'}, type: 1},

        {buttonId: 'id3', buttonText: {displayText: '♡︎..𝙾𝚆𝙽𝙴𝚁..♡︎    \n\n\nhttp://wa.me/917025994178'}, type: 1}
        
        {buttonId: 'id4', buttonText: {displayText: '♡︎..𝙰𝙱𝚄..𝚂𝙴𝚁..♡︎    \n\n\n✰𝙰𝙱𝚄..𝚂𝙴𝚁..𝙸𝚂..𝙼𝚈..𝙾𝚆𝙽𝙴𝚁✰'}, type: 1}

      ]

      

      const buttonMessage = {

          contentText: "𝙲𝙻𝙸𝙲𝙺 𝚃𝙷𝙸𝚂 𝙱𝚄𝚃𝚃𝙾𝙽",

          footerText: '™ ♡︎..ᴀʙᴜ ©',

          buttons: buttons,

          headerType: 1

      }

      

      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
