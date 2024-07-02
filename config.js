const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = false;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = ["923437407669"];
global.ownertag = [""]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Usman-md-v2";
global.packname = "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"uEnz82SmGKr+T9zEuRTOgB18CRjEdK+54EIJnh+TUVc="},"public":{"type":"Buffer","data":"2lfBTHVpytaSgQTod+3r3eCN4cREphXBxLhIRNJG8W4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"SHYiD3NZgS4exeDyWY4MD+ECQlhOeXA8rgw4K3b05m0="},"public":{"type":"Buffer","data":"s99PmIRiZvztoyW8zynnNlhdW2EIMvYuHNWaouxGtAk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"YP4DeCDeL6NvIa6mHoLP29kosKMXcGIxy41KVyMnx3s="},"public":{"type":"Buffer","data":"+baTM9hs0NPIYyK52MtKj+Af9j0NOq3UzcOSUWYvOUU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"kIi7vaTm0UPt/JS1p6rpo2JSM+8zHijHJKDiMIawtWA="},"public":{"type":"Buffer","data":"ILZRa0PWn1eyhAzIM/JEba1slMXyJQazsqzOAevfahQ="}},"signature":{"type":"Buffer","data":"oyAV4p/ZeY9wYbFYW1o8q3j6j2L4LlX7b2XMubzZtq5ZqMVZ5xHfCjvdbt2n216NbY4buXZ0ga5vWCJtXAvBBQ=="},"keyId":1},"registrationId":48,"advSecretKey":"hKFGOgn69qJFdB4BdMiAXeHDrKw3D+j7cC+YY5EonEI=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"UKlz4XQkQh280sAquPNhEg","phoneId":"20cc9704-97dc-47f1-86f7-fb3ab1ed16a1","identityId":{"type":"Buffer","data":"XWyQP8UpubQWQ3VgD77r4I1NKyo="},"registered":true,"backupToken":{"type":"Buffer","data":"7ZgQUeTHPHqROdeaFE7uqL+mqzo="},"registration":{},"pairingCode":"4LEDFGZV","me":{"id":"923437407669:31@s.whatsapp.net","name":"𝘽 𝙇 𝘼 𝘾 𝙆  𝙇 𝙄 𝙁 𝙀"},"account":{"details":"COHbzbUHEKTsj7QGGAUgACgA","accountSignatureKey":"1ls5x3zua4jMPqHCe78SI2XX3BJH0o9cvd+yTF9ML2s=","accountSignature":"ByeeYiqOs9hKwDgHFN8pkJeMN6ueHi8oS6lPcvmJ4reVQNnobk5v3UQEp+CmpuLRrVvyEmy5LihllSb3T7XqCA==","deviceSignature":"kOSnDB9X+9IvI4IuWE11rj86qCfhTzYnmb6hCg4e0kaetIlfF1QJaGgJiByP8yaH1+CIraSgvta2RZReUhjVAg=="},"signalIdentities":[{"identifier":{"name":"923437407669:31@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BdZbOcd87muIzD6hwnu/EiNl19wSR9KPXL3fskxfTC9r"}}],"platform":"smba","lastAccountSyncTimestamp":1719924273}`
global.prefa = ["."]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
