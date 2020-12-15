require("express")().listen(1343);//ukqzn

const db = require("quick.db"); 
const discord = require("discord.js");//ukqzn
const client = new discord.Client({ disableEveryone: true });//ukqzn
client.login("NzU2NDk1MTExODg5NzQ3OTc4.X2Sq-Q.HavlMnMUADgMCWFoZpDlR9vmP1E");
const fetch = require("node-fetch");
const fs = require('fs')//ukqzn

setInterval(() => {
  var links = db.get("linkler");//ukqzn
  if(!links) return 
  var linkA = links.map(c => c.url)//ukqzn
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Başarıyla Pinglendi.")//ukqzn
}, 60000)

client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {//ukqzn
db.set("linkler", [])
}//ukqzn
})

client.on("ready", () => {
  client.user.setActivity(`up!ekle | DM'den kullan!`)//ukqzn
  console.log(`Logined`)//ukqzn
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!ekle") {
  var link = spl[1]//ukqzn
  fetch(link).then(() => {//ukqzn
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("**⛔ Bu bot zaten uptime ediliyor.**")//ukqzn
    
    let yardım = new Discord.RichEmbed()//ukqzn
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("**✅ Başarılı! Projeniz artık 7/24!**")//ukqzn
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
     message.channel.send(yardım).then(msg => msg.delete(60000)); //ukqzn
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    let yardım = new Discord.RichEmbed()//ukqzn
        .setAuthor(client.user.username)
        .setColor(0x6A3DB8)
        .setDescription("⛔ **Hata! Sadece düzgün url'ler ekleyebilirsiniz.**")//ukqzn
        .setFooter(`© ${client.user.username}`)
        .setTimestamp()
   return message.channel.send(yardım).then(msg => msg.delete(60000)); //ukqzn
  })//ukqzn
  }
})


client.on("message", message => {//ukqzn
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!botsay") {//ukqzn
  var link = spl[1]
 message.channel.send(`**${db.get("linkler").length} / 1000**`)//ukqzn
}})



const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!yardım") {
let embed = new Discord.RichEmbed()//ukqzn
.setColor('#070706')
.addField(`Botu Davet Etmek için Tıkla! = hhttps://is.gd/2WS2Y8`, `Botu Sunucunuza Eklerseniz Büyük Destek Olursunuz!`)
.setDescription(`**Uptime komudunu kullandıktan sonra sisteme eklenmesi için 3-5 dk bekleyin.**

 🌙 **up!yardım** : Botun yardım menüsünü açar.

 🔋 **up!ekle <link>** : Eklediğiniz proje linkini 7/24 açık yapar.

 ⚡ **up!botsay** : Bot'umuzla uptime olan proje sayısını gösterir.

 🔮 **up!botbilgi** : Bot'un istastistik verilerini gösterir.

`)
.setAuthor(`UptimeBOT | Yardım Menüsü`, client.user.avatarURL)
.setFooter(`UptimeBOT | Botun Kodlayıcısı = @ayberk#6300`)//ukqzn
.setImage(`https://cdn.discordapp.com/attachments/741014134576906332/741980222101913600/unknown.png`)
return message.channel.send(embed);//ukqzn
    }
  
  })
  const log = message => {//ukqzn
  console.log(`${message}`);
}
  
client.on("message", message => {//ukqzn
  if(message.author.bot) return;
  var spl = message.content.split(" ");//ukqzn
  if(spl[0] == "up!botbilgi") {
  var link = spl[1]
 message.channel.send(`***çok yakında eklenecek!***`)//ukqzn
}})

//coded by ukqzn
  

  