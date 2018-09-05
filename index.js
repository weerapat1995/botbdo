const Discord = require('discord.js')
const client = new Discord.Client()

client.login('NDc5OTY3MjEwNjY0NjI0MTMw.DlhP0g.uT-UAK-nkkUFg8Kl-qCVrnGFOk0')

client.on("ready",()=>{
    console.log('HELLO!')
})

client.on("message" , message =>{
    if(!message.content.startsWith("$")) return;
    var xxx = message.content.slice(1).split(" ")[1];
    // var nameitem = new toString(xxx);
    // var alert = setInterval(Store,840000);
    var alert = setInterval(Store,2000);
    function Store(){
    message.channel.send(`${message.author}, ภายใน 1 นาที `+ xxx +` จะลง`)
        clearInterval(alert);

        
    }
})
