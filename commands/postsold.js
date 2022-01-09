const Discord = require('discord.js');
  module.exports = {
  name:"sold",
  description:"to mack post in diffrent channels",
  aliases:["done"],
  async run (message,args,client) {
    message.delete();
    if (!args[1]) return
    const messageEd = await message.channel.messages.fetch(args[1])
    if (!messageEd) return
    // messageEd.edit("Sold Out"+messageEd.content);
     messageEd.embeds.forEach(embed => {
       let embed2 = embed
        embed2.addField("تم البيع","**Sold**")
        messageEd.edit(embed2);
        })
  }}