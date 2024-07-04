const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_02_07_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTQsXG4gICAgICAgIDg5LFxuICAgICAgICA1NixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY2LFxuICAgICAgICAyOCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMyxcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMzcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0MSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDYzLFxuICAgICAgICA4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMixcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTksXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA2OSxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNixcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDk2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzOCxcbiAgICAgICAgODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTUwLFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyLFxuICAgICAgICA4MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRnA4cmhQSms5dWR2YWFrS01GaFgxTmo5M29ac0xFKzV2RWI1amt4azBOaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDQ4NDkwNDA3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2QkEwNDlBN0REMkZCRTEyOTAxRjdFM0I5Q0ZBNDg5RVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxMTI1NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiN0hhMUljQ2FTTDZMNXhGWHRYbVhCUVwiLFxuICBcInBob25lSWRcIjogXCI0ZmZmMjkxMy1hMTlkLTQyOTktODRlNC05M2YxMDk0NWI1NTNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcwLFxuICAgICAgMjA1LFxuICAgICAgMTg1LFxuICAgICAgMjE5LFxuICAgICAgMTEsXG4gICAgICAzMixcbiAgICAgIDIzNCxcbiAgICAgIDIxNSxcbiAgICAgIDIzMyxcbiAgICAgIDc4LFxuICAgICAgMjI0LFxuICAgICAgMTMzLFxuICAgICAgMTYwLFxuICAgICAgMjMyLFxuICAgICAgMTc1LFxuICAgICAgOTMsXG4gICAgICAxNzAsXG4gICAgICAxNzYsXG4gICAgICAxNDIsXG4gICAgICA2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NSxcbiAgICAgIDIwLFxuICAgICAgMjQwLFxuICAgICAgMTAzLFxuICAgICAgMTg1LFxuICAgICAgOTQsXG4gICAgICAyLFxuICAgICAgMjQ2LFxuICAgICAgMjUwLFxuICAgICAgMjQ0LFxuICAgICAgMTY1LFxuICAgICAgMTU2LFxuICAgICAgMTA2LFxuICAgICAgMjIzLFxuICAgICAgMTIyLFxuICAgICAgMjUxLFxuICAgICAgMjE3LFxuICAgICAgMTYzLFxuICAgICAgMTc5LFxuICAgICAgMTk0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjdHUDRYWTE4XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ4NDkwNDA3OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QvfCdm6XwnZGMIPCdm6rwnZGGIPCdkL3wnZGI8J2RhvCdkYcg8J2Qt/Cdm6rwnZC58J2QufCdm6/wnZGF8J2br/Cdm67wnZGHXCIsXG4gICAgXCJsaWRcIjogXCI0MTU0NTU4NzgxNDUwNzozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKbkNwb1lHRUxhcm03UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkh5NmdPbmhiQlJ4and4ZG5RTlRJc3FGVlpZNFZYOW1NVmdiZXhjSkpvRUk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjhoUGJaa0lNemhkZnpFTFp4cDNHNHNjbDRIOGc5ejI2U0ZGaHh1aXc4UHRXdkdwL1B0VGNPRGRZTWhJN2RGODJiQkdlellLMkpmd0JwODAwL3hQQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibjZoZUU4RjJnTC9yQ0lodFp3Z29CaTdZdE90anlIeDA0YlpOc3hCdW9SSDRDeGdNNGhUd2NwL0p2NklmV0w3N1hsOXBVMmxaVjZ2cDF4MGFsbmNWamc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0ODQ5MDQwNzozN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDExMjU3MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU90blwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3RuLmpzb24iOiAie1wia2V5RGF0YVwiOlwicWk0clNSUGdxYXdVTE5XaHBzUlVvUmFRRmlFckFsaXBNNThQVXhKZ2QxUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjIzODI2NzA5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5Njg4MTIzNTQyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
