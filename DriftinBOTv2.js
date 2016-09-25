const Discord = require('discord.js');
const client = new Discord.Client({bot: true});

// SETTINGS
const settings = {}
var bot = client;
settings.config = require('./config.json');
settings.token = settings.config.TOKEN
settings.prefix = `drift `
settings.CatID = `177286767903244288`
settings.DebossID = `160853902726660096`
settings.autorestart = true
settings.exec = require('child_process').exec;
settings.pf = settings.prefix ? settings.prefix : `${client.user.toString()} `;
settings.cmdeasy = new Map([
  ["owner", "***The Bot Owner Is \`Deboss\` & Cat***"],
  ["", ""],
  ["", ""],
  ["", ""],
  ["", ""]
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
        const code = msg.sbustring(11)
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

client.on('ready', () => {
    console.log('Lets drift'); client.user.setStatus(`online`, 'The Bot Prefix Is drift (drift stats list)')
});

client.on('reconnecting', () => {
    console.log('my batteries ended need to change them and join the figth back');
});

client.on('message', msg => {
  
  var command_name = msg.content.slice(6);
  
  if(settings.cmdeasy.has(command_name)) {
msg.channel.sendMessage(settings.cmdeasy.get(command_name))
    return;
  }


    if (msg.author.client) return;
    if (!msg.content.startsWith(settings.pf)) return;

    const content = msg.content.slice(settings.pf.length);

    const command = commands[content.split(' ')[0]];
    command(msg, content);
});


client.login(settings.token);
