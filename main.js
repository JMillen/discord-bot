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


//if user says "beet is" the bot will reply with =
client.on('message', msg=>{
    if(msg.content === "beet is"){
        msg.reply('my lord and saviour');
    }
});

//if user says "help" the bot will reply with =
client.on('message', msg=>{
    if(msg.content === "help"){
        msg.reply('commands list: hello, beet is');
    }
});

//if user says "" the bot will reply with =
client.on('message', msg=>{

    if(msg.content === "nice"){
        const attachment = new Attachment('https://tenor.com/view/beetlejuice-beet-beetlejuice-lester-green-lester-green-beetle-gif-12561400');
        message.channel.send(message.author, attachment);
    }
});

//if user leaves message will be displayed
client.on('guildMemberRemove', member => {

});

//member join message 
client.on("guildMemberAdd", (member) => {
    const channel = member.guild.channels.cache.find(channel => channel.name === "✝-the-hub-✝");
    if(!channel) return;

    channel.send(`Welcome brother, ${member} to the beetle juicism society!`);


  });


























// bot token
client.login(process.env.token);