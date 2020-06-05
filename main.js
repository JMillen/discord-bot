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


//if user says "hello" the bot will reply with =
client.on('message', msg=>{
    if(msg.content === "beet is"){
        msg.reply('my lord and saviour');
    }
});

client.on('guildMemberRemove', member => {

});

//member join message and auto role add
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "✝-the-hub-✝");
    if(!channel) return;

    channel.send(`Welcome brother, ${member} to the beetle juicism society!`);


  });


























// bot token
client.login(process.env.token);