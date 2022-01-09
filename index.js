const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = "-"





client.commands = new Discord.Collection();
const fs = require('fs');
const folder = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'))

for (const file of (folder))
{
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command)
}


client.on('message',async message=>{
  const [cmd] = message.content.split(' ');
  if (!message.guild) return;
  if (!cmd.startsWith(prefix)) return;
  if (message.author.bot) return;

  client.commands.find(command => {
    if (command.name == cmd.slice(prefix.length) || command.aliases && command.aliases.includes(cmd.slice(prefix.length))){

      const args = message.content.slice(prefix.length).trim().split(/ +/);
      command.run(message,args,client)
      
    } 
  });
})





client.on('guildBanAdd', guild => {
  guild.fetchAuditLogs()
    .then(logs => {
      let ban = logs.entries
        .filter(e => e.action === 'MEMBER_BAN_ADD')
        .sort((a, b) => b.createdAt - a.createdAt)
        .first()
       const user = guild.members.cache.get(ban.executor.id)
       user.kick("banned a user");
    })
})








client.on('roleDelete', async role1 => {
  role1.guild.fetchAuditLogs()
    .then(logs => {
      let role = logs.entries
        .filter(e => e.action === 'ROLE_DELETE')
        .sort((a, b) => b.createdAt - a.createdAt)
        .first()
       const user = role1.guild.members.cache.get(role.executor.id)
       user.kick("deleted a role");
    })
})




client.on('channelDelete', async channel1 => {
  channel1.guild.fetchAuditLogs()
    .then(logs => {
      let channel = logs.entries
        .filter(e => e.action === 'CHANNEL_DELETE')
        .sort((a, b) => b.createdAt - a.createdAt)
        .first()
       const user = channel1.guild.members.cache.get(channel.executor.id)
       user.kick("deleted a channel");
    })
})



client.on('guildMemberRemove', async member => {
  member.guild.fetchAuditLogs()
    .then(logs => {
      let kick = logs.entries
        .filter(e => e.action === 'MEMBER_KICK')
        .sort((a, b) => b.createdAt - a.createdAt)
        .first()

       const user = member.guild.members.cache.get(kick.executor.id)
       user.kick("kicked member");
    })
})

client.on('ready',()=>{
  console.log("The bot is online");
})





client.login("هنا تحط توكن البوت");