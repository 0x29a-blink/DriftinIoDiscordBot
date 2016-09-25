var Discord = require('discord.js')

var bot = new Discord.Client({bot: true})

var settings = {}
settings.config = require(`./config.json`)
settings.TOKEN = settings.config.TOKEN
settings.PREFIX = `drift `
settings.YTAPI = settings.config.YTAPI
settings.CatID = `177286767903244288`
settings.DebossID = `160853902726660096`
settings.restartUP = true
let queue = {};

const yt = require('ytdl-core');

var search = require('youtube-search');
var opts = {
  maxResults: 2,
  key: settings.YTAPI
};






// cleverbot    = require("./cleverbot.js").cleverbot

bot.on(`guildMemberAdd`, (guild, member) => {
  bot.channels.get(`212750159040217088`).sendMessage(member.user.username + " welcome to Driftin.io's Official Discord Server please read <#212749774011629578> for the rules and have a great time :D")
})

bot.on("ready", () => {
  console.log(`ready to drift around`)
bot.user.setStatus(`online`, 'The Bot Prefix Is drift (drift stats list)')
})

/* bot.on(`message`,  function (message) {
  if (message.channel.isPrivate) {
            return; //cleverbot
        } else {
        if (message.mentions.length !== 0) {
            if (message.isMentioned(bot.user) && new RegExp('^<@!?' + bot.user.id + '>').test(cmd)) {
                    cleverbot(bot, message);
          return;
                }
            }
        }
}) */
bot.on(`message`, (msg) => {
	if (msg.author.id === settings.CatID || msg.author.id === settings.DebossID) {
    if (msg.content === "drift update code") {
  const exec = require('child_process').exec;
   exec(`git pull`, function(err, stdout, stderr){
      msg.channel.sendMessage("\`\`\`\n" + stdout +"\n"+ stderr + "\n\`\`\`").then(() => {if (settings.restartUP = true) return process.exit(1); else {return msg.channel.sendMessage(`you should restart bot now`)}}
    });
      
    }
  }
var cmd = msg.content
	if (cmd === settings.PREFIX + "owner") {
		msg.channel.sendMessage("***The Bot Owner Is `Deboss`***")
	}
	if (cmd === settings.PREFIX + "stats racer") {
		msg.channel.sendMessage("Racer\nSpeed : 🔲🔲🔲\nDefense : 🔲🔲🔲\nDamage : 🔲🔲🔲\nHandling : 🔲🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats bully") {
		msg.channel.sendMessage("Bully\nSpeed : 🔲\nDefense : 🔲🔲🔲🔲\nDamage : 🔲\nHandling : 🔲🔲🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats flash") {
		msg.channel.sendMessage("Flash\nSpeed : 🔲🔲🔲🔲🔲🔲\nDefense : 🔲\nDamage : 🔲\nHandling : 🔲")
	}
	if (cmd === settings.PREFIX + "stats hazard") {
		msg.channel.sendMessage("Hazard\nSpeed : 🔲🔲\nDefense : 🔲🔲🔲\nDamage : 🔲🔲🔲🔲🔲\nHandling : 🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats buster") {
		msg.channel.sendMessage("Buster\nSpeed : 🔲\nDefense : 🔲🔲\nDamage : 🔲🔲🔲🔲\nHandling : 🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats ambulamp") {
		msg.channel.sendMessage("Ambulamp\nSpeed : 🔲🔲🔲\nDefense : 🔲🔲🔲\nDamage : 🔲\nHandling : 🔲🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats piercer") {
		msg.channel.sendMessage("Piercer\nSpeed : 🔲🔲🔲🔲🔲\nDefense : 🔲\nDamage : 🔲\nHandling : 🔲🔲🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats sludger") {
		msg.channel.sendMessage("Sludger\nSpeed : 🔲🔲🔲\nDefense : 🔲🔲🔲\nDamage : 🔲🔲\nHandling : 🔲🔲🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats deprived") {
		msg.channel.sendMessage("Deprived\nSpeed : 🔲\nDefense : 🔲\nDamage : 🔲\nHandling : 🔲")
	}
	if (cmd === settings.PREFIX + "stats star") {
		msg.channel.sendMessage("Star\nSpeed : 🔲🔲\nDefense : 🔲🔲\nDamage : 🔲🔲🔲\nHandling : 🔲🔲🔲")
	}
	if (cmd === settings.PREFIX + "stats list") {
		msg.reply("The DriftinBot Stats Commands Are\n```fix\ndrift stats racer\ndrift stats bully\ndrift stats flash\ndrift stats hazard\ndrift stats buster\ndrift stats ambulamp\ndrift stats piercer\ndrift stats sludger\ndrift stats deprived\ndrift stats star\n```")
	}
	if (cmd === settings.PREFIX + "secret class") {
    msg.channel.sendMessage("How to unlock the secret class in Driftin.io\nOpen https://driftin.io\nDO NOT PRESS PLAY YET\nPress CTRL+SHIFT+I\nOnce inspect element is open click on Console\nThen type in console\n***classIndex=31081995***\nNow press play and BOOM you have the secret class")
	}
	if (cmd === settings.PREFIX + "official server") {
		msg.reply("**My official discord server is** ***https://discord.gg/FJQKjwa***")
	}
	if(cmd === settings.PREFIX +`play`) {
			if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`**drift add** \`song_name\``);
			if (!bot.voiceConnections.exists('channel', msg.member.voiceChannel)) return msg.channel.sendMessage(`**drift join** to make me join a voice channel`);
			if (queue[msg.guild.id].playing) return msg.channel.sendMessage(`**I am already playing**`);
			let myVoiceConnection = bot.voiceConnections.find('channel', msg.member.voiceChannel);
			let dispatcher;
			queue[msg.guild.id].playing = true;

			console.log(queue);
			(function play(song) {
				console.log(song);
				if (song === undefined) return msg.channel.sendMessage('⏹ playlist is empty\n⏏ left voice channel').then(() => {
					queue[msg.guild.id].playing = false;
					msg.member.voiceChannel.leave();
				});
				msg.channel.sendMessage(`▶ **${song.title}** added by **${song.requester}**`);
				dispatcher = myVoiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : 1 });
				let collector = msg.channel.createCollector(m => m);
				collector.on('message', m => {
					if (m.content.startsWith(settings.PREFIX +'pause')) {
						msg.channel.sendMessage(`⏸ **${song.title}**`).then(() => {dispatcher.pause();});
					} else if (m.content.startsWith(settings.PREFIX +'resume')){
						msg.channel.sendMessage(`⏯ **${song.title}**`).then(() => {dispatcher.resume();});
					} else if (m.content.startsWith(settings.PREFIX +'skip')){
						msg.channel.sendMessage(`⏭ **${song.title}**`).then(() => {dispatcher.end();});
				} else if (m.content.startsWith(settings.PREFIX +'next')){
						msg.channel.sendMessage(`⏭ **${song.title}**`).then(() => {dispatcher.end();});
				}
				});
				dispatcher.on('end', () => {
					collector.stop();
					queue[msg.guild.id].songs.shift();
					play(queue[msg.guild.id].songs[0]);
				});
				dispatcher.on('error', (err) => {
					return msg.channel.sendMessage('error: ' + err).then(() => {
						collector.stop();
						queue[msg.guild.id].songs.shift();
						play(queue[msg.guild.id].songs[0]);
					});
				});
			})(queue[msg.guild.id].songs[0]);
		} else if(msg.content.startsWith(settings.PREFIX +"join")) {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join();
		} else if(msg.content.startsWith(settings.PREFIX +"leave")) {
			const voiceChannel = msg.member.voiceChannel;
			voiceChannel.leave();
		}else if(msg.content.startsWith(settings.PREFIX +"now")) {
			msg.channel.sendMessage(`**🎤 ${queue[msg.guild.id].songs[0].title}** added by **${queue[msg.guild.id].songs[0].requester}**`)
		}else if(msg.content.startsWith(settings.PREFIX +"later")) {
			msg.channel.sendMessage(`**🆙 ${queue[msg.guild.id].songs[1].title}** added by **${queue[msg.guild.id].songs[1].requester}**`)
		}else if(msg.content.startsWith(settings.PREFIX +"playlist")) {
			if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`**drift add \`song_name\`**. First add songs to see playlist`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`\`${i+1}.\`**${song.title}** added by **${song.requester}**`);});
		msg.channel.sendMessage(`**${msg.guild.name}'s server music playlist \`${tosend.length} song(s)\`**\n${tosend.slice(0,15).join('\n')}`);
		} else if(msg.content.startsWith(settings.PREFIX +"add")) {
			let input = msg.content.slice(10);
			
			search(input, opts, function(err, results) {
				if(err) return console.log(err);
				console.dir(results);
				var url = results[0].link;
				yt.getInfo(url, (err, info) => {
					if(err) {
						return msg.channel.sendMessage(`❌ **${input}**`);
					}
					if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
					queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
					msg.channel.sendMessage(`✅ added to playlist **${info.title}**`);
				});
			});
		}
});
bot.login(settings.TOKEN);
