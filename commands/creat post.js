 const Discord = require('discord.js');
  module.exports = {
  name:"instagram",
  description:"to mack post in diffrent channels",
  aliases:["twitter","twit","tiktok","tik","instagram","insta","tellonym"],
  async run (message,args,client) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return
    if (!args[1]) return message.reply("**you must enter the username!**")
    if (!args[2]) return message.reply("**you must enter a channel!**")
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
    if (!channel) return message.reply(`**I cant't find this channel __**${args[1]}**__**`)
    if (!args[3]) return message.reply("**you must specify a Price!**")
    if (!args[4]) return message.reply("**عليك كتابة تحديد اذا كان الحساب بالايميل الساسي او لا بكتابة Yes/No في اخر الرسالة**")
    if (args[4] != "Yes" && args[4]!= "No") return message.reply("**عليك كتابة تحديد اذا كان الحساب بالايميل الاساسي او لا بكتابة Yes/No في اخر الرسالة**")
    

    if (args[0] == "insta" || args[0] == "instagram")
    {
      if (!args[5]) return message.reply("**عليك كتابة تحديد اذا كان الحساب مربوط برقم او لا بكتابة Yes/No في اخر الرسالة**")
      if (args[5] != "Yes" && args[5]!= "No") return message.reply("**عليك كتابة تحديد اذا كان الحساب مربوط برقم او لا بكتابة Yes/No في اخر الرسالة**")
      let embed = new Discord.MessageEmbed()
      .setColor("#ac14c5")
      .setTitle("**Instagram**","https://www.instagram.com/")
      .addField("Username",`**${args[1]}**`,true)
      .addField("Price:",`**${args[3]}**`)
      .addField("مع الايميل الاساسي / OGE ",`**${args[4]}**`,true)
      .addField("مربوط برقم / with PhoneNum <",`**${args[5]}**`,true)
      .setFooter(client.user.username)
      .setThumbnail("https://cdn.discordapp.com/attachments/928382680842776627/928419600444579881/unknown-removebg-preview_2.png")
      .setTimestamp()
      channel.send("<@&929099796864716850>",embed)
       return;
    }
    else if (args[0] == "twitter" || args[0] == "twit")
    {
      let embed = new Discord.MessageEmbed()
      .setColor("#00feff")
      .setTitle("**Twitter**","https://twitter.com")
      .addField("Username",`**${args[1]}**`,true)
      .addField("Price:",`**${args[3]}**`)
      .addField("مع الايميل الاساسي / OGE ؟",`**${args[4]}**`)
      .setThumbnail("https://cdn.discordapp.com/attachments/928382680842776627/928419601325387776/download-removebg-preview_2.png")
      .setFooter(client.user.username)
      .setTimestamp()
      channel.send("<@&929099796864716850>",embed)
      return;
    }
    else if (args[0] == "tiktok" || args[0] == "tik")
    {
      

    let embed = new Discord.MessageEmbed()
    .setColor("#ffffff")
    .setTitle("**TikTok**","https://www.tiktok.com/")
    .addField("Username",`**${args[1]}**`,true)
    .addField("Price:",`**${args[3]}**`)
    .addField("مع الايميل الاساسي / OGE ؟",`**${args[4]}**`)
    .setThumbnail("https://cdn.discordapp.com/attachments/928382680842776627/928419600721391667/download-removebg-preview_5.png")
    .setFooter(client.user.username)
    .setTimestamp()
    channel.send("<@&929099796864716850>",embed)
    return;
    }
    else if (args[0] == "tellonym")
    {
    let embed = new Discord.MessageEmbed()
    .setColor("#ff00e0")
    .setTitle("**Tellonym**")
    .addField("Username",`**${args[1]}**`,true)
    .addField("Price:",`**${args[3]}**`)  
    .addField("مع الايميل الاساسي / OGE ؟",`**${args[4]}**`)
    .setThumbnail("https://cdn.discordapp.com/attachments/928382680842776627/928418931826380811/icon98x98_square.png")
    .setFooter(client.user.username)
    .setTimestamp()
    channel.send("<@&929099796864716850>",embed)
    return;
    }
    else return;







  }}