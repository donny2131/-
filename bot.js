const me = require("discord.js") , Maystro = new me.Client({disableEveryone: true
 , autoReconnect:true}) , fs = require("fs") , config = require('./config.json')
 , s = 1000 ,  m = s * 60 , h = m * 60 , d = h * 24 , y = d * 365 
 , targeted = JSON.parse(fs.readFileSync('./data/delete.json' , 'utf8'))
 , cmd = JSON.parse(fs.readFileSync('./data/cmd.json' , 'utf8'))
 , autoclear = JSON.parse(fs.readFileSync('./data/clear.json' , 'utf8'))
 , welc = JSON.parse(fs.readFileSync('./data/welc.json' , 'utf8'))
 , welm = JSON.parse(fs.readFileSync('./data/welm.json' , 'utf8'))
 , owner = config.id , token = config.token;
Maystro.on("ready", () => {
  console.log(`hello , all CopyRight for Maystro only`);
  console.log(`self bot : v2 || release time 2019/7/6 `);
  console.log(`name : ${Maystro.user.tag}`);
  console.log(`every thing good.`);
  console.log(`have fun :)`);
});
Maystro.on('message', message => {
  if(!cmd[config.id]) cmd[config.id] = {
    pre: config.prefix,
   }
   fs.writeFileSync("./data/cmd.json", JSON.stringify(cmd, null, 2), (err) => {
    if (err) console.error(err)
   });
   if(!welc[config.id]) welc[config.id] = {
    welc: "4865487654187",
  }
  fs.writeFile("./data/welc.json", JSON.stringify(welc, null, 2), (err) => {
    if (err) console.error(err)
  });
   var arg = message.content.split(' ').slice(1);
   var args = message.content.split(' ').slice(1).join(' ');
   if (message.author.id !== owner) return;
   	var prefix = cmd[config.id].pre;
    if (message.content.startsWith(prefix + 'wt')) {
     if(args){
      Maystro.user.setActivity(args, {type:'WATCHING'});
      message.channel.send("** Done , You Are Watching :**` "+` ${args}`+"`").then(message => {message.delete(3000)})
      } else 
      if(!args) {
      message.channel.send("**Can You Put An Input ? Please?**").then(message => {message.delete(3000)})
      }
     message.delete(3000);
      } else
    if (message.content.startsWith(prefix + 'st')) {        
      if(args){
         message.channel.send("**Done , You Are Streaming :**` "+` ${args}`+"`").then(message => {message.delete(3000)})
        Maystro.user.setActivity(args, {type:'STREAMING', url:"https://www.twitch.tv/Maystroalmutairi"});
      } else 
    if(!args) {
      message.channel.send("**Can You Put An Input ? Please?**").then(message => {message.delete(3000)})          
      }
     message.delete(3000);
     } else
  if (message.content.startsWith(prefix + 'pl')) {
      if(args){
         message.channel.send("**Done , You Are Playing :**`"+` ${args}`+"`").then(message => {message.delete(3000)})
        Maystro.user.setActivity(args, {type:'PLAYING'});
      } else 
    if(!args) {
      message.channel.send("**Can You Put An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
   } else
  if (message.content.startsWith(prefix + 'li')) {    
      if(args){
         message.channel.send("**:white_check_mark: Done , You Are Listening :**`"+` ${args}`+"`").then(message => {message.delete(3000)})
        Maystro.user.setActivity(args, {type:'LISTENING'});
      } else 
      if(!args) {
      message.channel.send("**Can You Put An Input? Please?**").then(message => {message.delete(3000)})          
      }
    message.delete(3000);
   } else
	if (message.content.startsWith(prefix + "dnd")) {
        message.channel.send("**Done Changing Your Status To `DND`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  Maystro.user.setStatus("dnd");
	 } else
	if (message.content.startsWith(prefix + "on")) {
        message.channel.send("**Done Changing Your Status To `Online`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  Maystro.user.setStatus("online");
	 } else
  if (message.content.startsWith(prefix + "idle")) {
        message.channel.send("**Done Changing Your Status To `IDLE`**").then(message => {message.delete(3000)})
        message.delete(3000);
		  Maystro.user.setStatus("idle");
	 } else
	if (message.content.startsWith(prefix + "off")) {
          message.channel.send("**Done Changing Your Status To `OFFLINE`**").then(message => {message.delete(3000)})
          message.delete(3000);
		  Maystro.user.setStatus("invisible");
	 } else 
  if (message.content.startsWith(prefix + "c")) {
        let count = parseInt(args) || 1;
          message.delete();
          message.channel.fetchMessages({ limit: Math.min(count, 100), before: message.id }).then(messages => {
          const prunable = messages.filter(m => m.author.id === Maystro.user.id);
        return Promise.all(
            prunable.map(m => m.delete())
        );
      }).catch(message.error);
   } else
 /*    if (message.content.startsWith(prefix + "f")) {
      if (args.length < 1) {
           message.channel.send('You must provide text to space out!').then(message => {message.delete(3000)})
       }
          let amount = 1;
       if (!isNaN(arg[0])) {
           amount = parseInt(arg[0]);
           (amount < 1) && (amount = 1);
           (amount > 15) && (amount = 15);
           arg = arg.slice(1);
       }
       message.delete();
       message.channel.send(arg.join(' '.repeat(amount / 2)).split('').join(' '.repeat(amount)));
    } */ 
  if (message.content.startsWith(prefix + "e")) {
      if(args){
       let embed = new me.RichEmbed()
          .setDescription(args)
          .setColor("#000000")
       message.channel.sendEmbed(embed);
       message.delete(3000);
      } else 
      if(!args) {
      message.channel.send("**Can You Put Something For Me To Transfer it to embed?**").then(message => {message.delete(3000)})          
      }
   }
  if (message.content.startsWith(prefix + 'sav')) {
      if(!args) message.channel.send('**Put Avatar link Please ?**').then((message) => message.delete(3000));
      Maystro.user.setAvatar(args);
      message.channel.sendMessage(`**:white_check_mark: Done Channged Your avatar.**`).then(message => {message.delete(4000)});
      message.delete(3000);
	   }
  if(message.content.startsWith(prefix + 'vo')) {
        var mention = message.mentions.users.first() || Maystro.users.get(args);
         if(!mention) return message.channel.send('**Some Mention Or id ? Please ?**');
         var guilds = Maystro.guilds.filter((guild) => guild.member(mention) && guild.member(mention).voiceChannel);
         if(guilds.size <= 0) return message.channel.send(`**i Can't find him.**`).then((message) => message.delete(3000));
        var embed = new me.RichEmbed()
         .setAuthor(mention.tag, mention.avatarURL)
         .setDescription(guilds.map((guild) => `${guild.name} | ${guild.member(mention).voiceChannel.name}` ).join("\n"))
        message.channel.send(embed);
    message.delete(3000);
   }
    if (message.content.startsWith(prefix + 'ping')) {
         message.channel.send(`Ping Now : ${Math.round(Maystro.ping)}`).then((message) => message.delete(5000));
 	      message.delete(3000);
   }
  /*  if(message.content.startsWith(prefix + 'vc')) {
     var shad = message.mentions.members.first() || Maystro.users.get(args);
     if(!shad) return;
     var filter = Maystro.guilds.filter((guild) => guild.member(shad) && guild.member(shad).voiceChannel);
       let ss = ""
       var xx = new me.RichEmbed()
     //  filter.voiceChannel.forEach(member =>{
       //     xx
            .setTitle('المتواجدين في الروم.')
            .setDescription(filter.map((guild) => `${guild.member(shad).voiceChannel.member}`).join("\n"))
            .setTimestamp()
     //   })
        message.channel.send(xx).then((message) => message.delete(6000));
	    message.delete(3000);
     }*/
  if (message.content.startsWith(prefix + "av")) {
      let user = Maystro.users.get(args) || message.mentions.users.first();
          var uu;
          if(user) {
            uu = user;
          } else {
            uu = message.author;
          }
          let avatar = new me.RichEmbed()
              .setColor("#000000")
              .setTitle(`Link Here.`)
              .setURL(`${uu.avatarURL}`)
              .setImage(`${uu.avatarURL}`)
           message.channel.sendEmbed(avatar).then((message) => message.delete(20000));
      message.delete(3000);
   }
  if(message.content.startsWith(prefix + 'ro')) {
    if(!args) return message.channel.send('**put room id please.**').then((message) => message.delete(4000));
    let ch = Maystro.channels.get(args);
    if(!ch) return message.channel.send(`**i Can't find this room.**`).then((message) => message.delete(4000));
    if(ch.type == 'voice') {
      ch.join();
      message.channel.send(`**:white_check_mark: Done i join `+'`'+ `#${ch.name}`+'`**').then((message) => message.delete(4000));
    } else {
      message.channel.send('only voice channel.').then((message) => message.delete(3000));
    }
    message.delete(3000);
  }
  if(message.content.startsWith('ban')) {
       let user = message.mentions.users.first();
       message.channel.send(`**:white_check_mark: ${user} was banned from the server ! :airplane: **`);
   }
  if(message.content === prefix + 'restart') {
      message.channel.send('Ok Ok Ok i Will Restart...').then((m) => m.delete(2500));
      console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
      console.log('Restarting....');
        setTimeout(() => {
            Maystro.destroy();
            Maystro.login(token);
       },3000);
      message.delete(2500);
  }
  if(message.content.startsWith(prefix + 'get')) {
   let ss = Maystro.users.get(args) || message.mentions.users.first();
   if(!ss || !ss.bot) return message.channel.send('** Are This Really Bot ?**');
    if(ss) {
      let aa = new me.RichEmbed()
          .setTitle('Link Here')
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=${ss.id}&scope=bot&permissions=0`)
          .setDescription(`https://discordapp.com/oauth2/authorize?client_id=${ss.id}&scope=bot&permissions=0`)
      message.channel.sendEmbed(aa);
    } else {
    }
    message.delete(3000);
   }
  if(message.content.startsWith(prefix + "sr")) {
    let ll = Maystro.guilds.get(args);
    let server;
    if(ll) {
      server = ll;
    } else {
      server = message.guild;
    }
    if(server) {
    var embed  = new me.RichEmbed()
    .setAuthor(server.name.replace(/ +/g, " "), server.iconURL)
    .setDescription(` Owner   : <@${server.owner.user.id}>
 Members : ${server.memberCount} (${server.members.filter(m => m.presence.status !== 'offline').size})
 text    : ${server.channels.filter(m => m.type === 'text').size} 
 room    : ${server.channels.filter(m => m.type === 'voice').size} 
 roles   : ${server.roles.size}
 voice   : ${server.members.filter(e => e.voiceChannel).size}`)
    .setColor('#000000')
    .setTimestamp()
    message.channel.sendEmbed(embed)
    } else {
    message.channel.send(':x: Put an Server id pleas ?').then((message) => message.delete(4000));
    }
    message.delete(3000);
   }
  if(message.content.startsWith(prefix + 'bots')) {
    let ss = Maystro.guilds.get(args);
    let i = 1;
    let server;
    if(ss) {
      server = ss;
    } else {
      server = message.guild;
    }
    if(server) {
    const bbot = server.members.filter(m=>m.user.bot).map(m=>`${i++}- <@${m.id}>`);
      const embed = new me.RichEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL)
      .setDescription(`${bbot.join(' ')}`)
      .setFooter(`${server.members.filter(m=>m.user.bot).size} Bots.`)
      .setTimestamp();
    message.channel.send(embed)
    } else {
    message.channel.send(':x: Put an Server id pleas ?').then((message) => message.delete(4000));
    }
   message.delete(s * 5);
   }
  if(message.content.startsWith(prefix + "hc")) {
    let server;
    let gul = Maystro.guilds.get(args);
    let cc = []; 
    var qq = 0;
     if(gul) {
      server = gul;
     } else {
      server = message.guild;
      }
      if(server) {
      server.channels.forEach(channel => {
      var type = "#";
      if(channel.type == "text") 
        if(!channel.permissionsFor(message.author).has('VIEW_CHANNEL')) cc.push("`" + ++qq + "-` " + type + channel.name +'  ('+channel.id+')');
    });
    message.delete(5000);
    message.channel.send(`${cc.join(`\n`)}`);
     } else {
      message.channel.send(':x: Put an Server id pleas ?').then((message) => message.delete(4000));
     }
     message.delete(5000);
   }
  if(message.content.startsWith(prefix + "hv")) {
     let server;
     let gul = Maystro.guilds.get(args);
     let tt = []; 
     var vv = 0;
     if(gul) {
     server = gul;
     } else {
      server = message.guild;
     }
     if(server) {
     server.channels.forEach(channel => {
     var type = ":loud_sound:";
     if(channel.type == "voice")
     if(!channel.permissionsFor(message.author).has('VIEW_CHANNEL')) tt.push("`" + ++vv + "-` " + type + channel.name +'  ('+channel.id+')');
     });
     message.channel.send(`${tt.join(`\n`)}`);
     } else {
     message.channel.send(':x: Put an Server id pleas ?').then((message) => message.delete(4000));
     }
    message.delete(5000);
   }
  if (message.content.startsWith(prefix + 'target')) {
    if(!args) return message.channel.send('**Some Id Or Mention ? Please ?**').then((message) => message.delete(4000));
     let user = Maystro.users.get(args) || message.mentions.users.first();
     if(!user) return message.channel.send("**i Can't find this One.**").then((message) => message.delete(4000));
     if(!targeted[user.id]) targeted[user.id] = {
     status: 'off'
      }
      fs.writeFile("./data/delete.json", JSON.stringify(targeted, null, 2), (err) => {
      if (err) console.error(err)
      })
       if(targeted[user.id].status === 'on') {
     targeted[user.id] = {
       status : 'off'
       }
     fs.writeFile("./data/delete.json", JSON.stringify(targeted, null, 2), (err) => {
       if (err) console.error(err)
       })
        message.channel.send(`<@${user.id}> targeted by Maystro.`).then((message) => message.delete(5000));
        } else {
         targeted[user.id] = {
         status : 'on'
         }
         fs.writeFile("./data/delete.json", JSON.stringify(targeted, null, 2), (err) => {
         if (err) console.error(err)
         })
         message.channel.send(`<@${user.id}> ok ok i will untargeted by Maystro.`).then((message) => message.delete(5000));
         }
         message.delete(3000);
   }
  if(message.content.startsWith('start')) {
    if(isNaN(args)) return message.channel.send('**type number ? please ?**');
     autoclear[config.id] = {
       time : args,
       active : 'on'
     }
    fs.writeFile("./data/clear.json", JSON.stringify(autoclear, null, 2), (err) => {
      if (err) console.error(err)
     });
     message.channel.send(`**:white_check_mark: Done Start Auto Clear for ${args}s **`).then((message) => message.delete(4000));
     message.delete(3000);
   }
  if(message.content === 'stop') {
   autoclear[config.id] = {
    active : 'off'
     }
     fs.writeFile("./data/clear.json", JSON.stringify(autoclear, null, 2), (err) => {
       if (err) console.error(err)
       });
       message.channel.send('**:white_check_mark: Done Stop Auto Clear.**').then((message) => message.delete(4000));
    message.delete(3000);
  }
 if(message.content.startsWith(prefix + 'swm')) {
   if(!args) return message.channel.send('**Type the Message Please.**').then((message) => message.delete(3000));
  welm[config.id] = {
    welmsg : args
    }
    fs.writeFile("./data/welm.json", JSON.stringify(welm, null, 2), (err) => {
    if (err) console.error(err)
    });
    message.channel.send('**:white_check_mark: Done Set Welcome Message to `'+`${args}`+'`**').then((message) => message.delete(3000));
    message.delete(3000);
   }
   if(message.content.startsWith(prefix + 'swc')) {
    if(!args) return message.channel.send('**Put Chat id Please.**').then((message) => message.delete(3000));
     let chat = Maystro.channels.get(args);
     if(!chat || chat.type !== 'text') return message.channel.send('**i Can`t find this Channel.**').then((message) => message.delete(3000));
    welc[config.id] = {
      welchat : chat.id,
      onoff : 'on'
      }
      fs.writeFile("./data/welc.json", JSON.stringify(welc, null, 2), (err) => {
      if (err) console.error(err)
      });
      message.channel.send("**:white_check_mark: Done Set Welcome Chat : " + `<#${chat.id}>`+"**").then((message) => message.delete(3000));
      message.delete(3000);
     }
  if(message.content.startsWith(prefix + 'wel')) {
    let oo = welc[config.id].welchat;
	if(!args) return message.channel.send('**Only Put ``on`` Or ``off``.**').then((message) => message.delete(3000));
    if(args ==- 'on' || args ==- 'off') return message.channel.send('**Only Put ``on`` Or ``off``.**').then((message) => message.delete(3000));
    welc[config.id] = {
      welchat : oo,
      onoff : args
      }
      fs.writeFile("./data/welc.json", JSON.stringify(welc, null, 2), (err) => {
      if (err) console.error(err)
      });
      message.channel.send("**:white_check_mark: Done Set Welcome Status : `" + `${args}`+"`**").then((message) => message.delete(3000));
    message.delete(3000);
   }
  if(message.content.startsWith(prefix + 'pre')) {
    if(!args) return message.channel.send('**Put An New Prefix Pleas.**').then((message) => message.delete(3000));
      cmd[config.id] = {
        pre : args
        }
        fs.writeFile("./data/cmd.json", JSON.stringify(cmd, null, 2), (err) => {
        if (err) console.error(err)
        });
        message.channel.send("**:white_check_mark: Done Set prefix to `"+`${args}`+"`**").then((message) => message.delete(3000));
        message.delete(3000);
   }
	if (message.content === prefix + 'help') {
    message.channel.send('```'+`
 ${prefix}wt     : Watching.
 ${prefix}pl     : Playing.
 ${prefix}li     : Listening.
 ${prefix}st     : Sreaming.
 ${prefix}off    : Set Offline.
 ${prefix}dnd    : Set Dnd.
 ${prefix}idle   : Set Idle.
 ${prefix}on     : Set Online.
 ${prefix}c      : Clear Your Message.
 ${prefix}f      : Space Out.
 ${prefix}e      : Transfer to Embed.
 ${prefix}av     : Show The Avatar.
 ${prefix}vc     : xxx.
 ${prefix}vo     : Know Where is the user (mention or id).
 ${prefix}ro     : Join Room By Id.
 ${prefix}hc     : Send the name for every hid chats of server (can use by id).
 ${prefix}hv     : Send the name for every hid rooms of server (can use by id).
 ${prefix}target : Target Some User Message.
 ${prefix}ping   : Bot Poing.
 ${prefix}sav    : Channge the Avatar.
 ${prefix}get    : Get an Bot Link.
 ${prefix}sr     : server info (Can Used By id).
 ${prefix}bots   : server bots(Can Used By id).
 ${prefix}restart: restart bot.
 ${prefix}swc    : Set the Auto Welcome Chat (Only Channel id).
 ${prefix}swm    : Set the Auto Welcome Message.
 ${prefix}wel    : Active Auto Welcome (on or off).
 ${prefix}pre    : Set the prefix.
 start   : Auto Clear Message (set the time by secend).
 stop    : Stop Auto Clear Message.
 All CopyRight Resived for ©Maystro.`+'```');
   message.delete(3000);
  }
 });
Maystro.on('message', message => {
   if(!targeted[message.author.id]) return;
   if(targeted[message.author.id].status == 'off') return;
   if(message.channel.type == "text") {
    message.delete();
   } else {
   }
});
Maystro.on('message', message => {
  if(message.author.id !== owner) return;
  if(!autoclear[config.id]) autoclear[config.id] = {
    active: 'off',
	time: 0
	}
  if(autoclear[config.id].active == 'off') return;
  if(!autoclear[config.id].time) return;
  let rr = autoclear[config.id].time;
  if(autoclear[config.id].active == 'on') {
    setTimeout(() => 
    message.delete(), s * rr)
  }
});
Maystro.on('guildMemberAdd', member => {
  if(!welc[config.id]) welc[config.id] = {
    welchat: 4865487654187,
  }
  fs.writeFile("./data/welc.json", JSON.stringify(welc, null, 2), (err) => {
    if (err) console.error(err)
  });
  if(welc[config.id].onoff == 'on') {
    var shad = member.guild.channels.get(welc[config.id].welchat);
    if(!shad) return;
    let ah;
    var we = welm[config.id].welmsg;
    if (we) {
      ah = we;
    } else {
      ah = member.guild.name.replace(/ +/g, " ");
    }
    setTimeout(() => shad.send(ah), 7000)
  }
});
Maystro.login(token);
Maystro.on("error", console.error);
Maystro.on("reconnect", () => {
return
});
client.login(process.env.BOT_TOKEEN);
