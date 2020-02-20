const Discord = require("discord.js") 
const bot = new Discord.Client();
const prefix = "$";



bot.on('ready', async => {
    console.log("Go Pub !")
    bot.user.setGame('𝙗𝙮 ៛𝙣𝙠𝙨・', 'https://www.twitch.tv/glimowetmowgli');
})

bot.on('message', message => {

    let messageArray = message.content.split(" "); let cmd = messageArray[0]; let args = messageArray.slice(1);
             if (cmd === prefix + "mp"){
        if(message.author.id != "566006224416407562") return;
                if(message.channel.type === "dm") return;
                if(message.deletable) message.delete();

                let MpMessage = args.slice(0).join(" ");

                message.guild.members.forEach(member => {
                    member.send(`${MpMessage}`)
                })
            
            }
})

bot.login("NjgwMTg2NTQyMTE5MDU5NTMx.Xk8PXw.lA2ttzZePrOJzwOy7vbBziybyP8").catch(err=> console.log("Token Incorrect"));
