const Discord = require('discord.js');

const client = new Discord.Client();

//termianl ready message
client.on('ready', function (){
    console.log(`${bot.user.username} Is online!`);
});

//if user says "hello" the bot will reply with =
client.on('message', msg=>{
    if(msg.content === "hello"){
        msg.reply('Hello idiot');
    }
});

client.on('guildMemberRemove', member => {

});

//member join message and auto role add
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`welcome idiot, ${member}, thanks for joining!`);


  });


























// bot token
client.login(process.env.token);