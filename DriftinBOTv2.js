const Discord = require('discord.js');
const bot = new Discord.Client({bot: true});

// SETTINGS
const settings = {}
var bot = bot;
settings.config = require('./config.json');
settings.token = settings.config.TOKEN
settings.prefix = `drift `
settings.CatID = `177286767903244288`
settings.DebossID = `160853902726660096`
settings.autorestart = true
settings.exec = require('child_process').exec;
settings.pf = settings.prefix ? settings.prefix : `${bot.user.toString()} `;
settings.cmdeasy = new Map([
  ["owner", "***The Bot Owner Is \`Deboss\` & Cat***"],
  ["stats list", 'The DriftinBot Stats Commands Are\n```fix\ndrift stats racer\ndrift stats bully\ndrift stats flash\ndrift stats hazard\ndrift stats buster\ndrift stats ambulamp\ndrift stats piercer\ndrift stats sludger\ndrift stats deprived\ndrift stats star\n```'],
  ["secret class", "How to unlock the secret class in Driftin.io\nOpen https://driftin.io\nDO NOT PRESS PLAY YET\nPress CTRL+SHIFT+I\nOnce inspect element is open click on Console\nThen type in console\n***classIndex=31081995***\nNow press play and BOOM you have the secret class"],
  ["official server", "**My official discord server is** ***https://discord.gg/FJQKjwa***"]
]);
// SETTINGS

const commands = {
    'git-pull': msg => {
      if (msg.author.id === settings.CatID || msg.author.id === settings.DebossID) {
settings.exec(`git pull`, function(err, stdout, stderr){
      msg.channel.sendMessage("\`\`\`xl\n" + stdout +"\n"+ stderr + "\n\`\`\`").then(() => {if (settings.autorestart = true) return process.exit(1); else {return msg.channel.sendMessage(`you should restart bot now`)}})
    });
    }
    },
    'restart': msg => {
        if (msg.author.id === settings.CatID || msg.author.id === settings.DebossID) {
        msg.channel.sendMessage('initiating protocol RESTART DRIFTIN BOT').then(() => process.exit(1));
    }  },
    'eval': (msg, newContent) => {
        if (msg.author.id === settings.CatID || msg.author.id === settings.DebossID) {
        const code = msg.substring(11)
        if (!code.length) return message.reply(`Add some code there`);
        try {
            const output = eval(code);
            msg.channel.sendMessage(
                `\`INPUT:\`\n\`\`\`${code.replace(/`/g, '"')}\`\`\`\n\`OUTPUT:\`\n\`\`\`${typeof output === 'object' ? JSON.stringify(output) : output}\`\`\``
            );
        } catch(err) {
            msg.channel.sendMessage(`\`INPUT:\`\n\`\`\`${code.replace(/`/g, '"')}\`\`\`\n\`ERROR:\`\n\`\`\`${err}\`\`\``);
        }
    }
  }
};

bot.on('ready', () => {
    console.log('Lets drift'); bot.user.setStatus(`online`, 'The Bot Prefix Is drift (drift stats list)')
});

bot.on('reconnecting', () => {
    console.log('my batteries ended need to change them and join the figth back');
});

bot.on('message', msg => {
  
  var command_name = msg.content.slice(6);
  
  if(settings.cmdeasy.has(command_name)) {
msg.channel.sendMessage(settings.cmdeasy.get(command_name))
    return;
  }


    if (msg.author.bot) return;
    if (!msg.content.startsWith(settings.pf)) return;

    const content = msg.content.slice(settings.pf.length);

    const command = commands[content.split(' ')[0]];
    command(msg, content);
});


bot.login(settings.token);
