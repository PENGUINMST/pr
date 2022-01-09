const Discord = require('discord.js');
module.exports = {
name:"help",
description:"to mack post in diffrent channels",
aliases:["helponeusers"],
async run (message,args,client) 
{
  

  let embed = new Discord.MessageEmbed()
  .setColor("#ffffef")
  .setTitle(`**${message.guild.name}**`)
  .addField("Commands:","`-twitter`, `-instagram`, `-tiktok`, `-tellonym`, `-sold`")
  .addField("Aliases:","`-twit`, `-insta`, `-tik`, `-done`")

  message.channel.send(embed)

}}