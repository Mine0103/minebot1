const Discord = require('discord.js');
const client = new Discord.Client();
const BlockList = require('./modules/BlockList.js');
const Embed = require('./modules/embed.js');

const prefix = '..';
const ownerID = '345126088248131584';

client.on('ready', () => {
  console.log(`봇이 켜졌습니다.`);
  client.user.setPresence({
    status: "online",
    game: {
      name: "봇 작동",
      type: "PLAYING"
    }
  });
});

client.on('message', msg => {
    var S = msg.content.split(' ');
    if(S[0] == '..정보') {
        let embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('마인봇 정보')
            .setAuthor('마인봇')
            .setDescription('마인봇')
            .setThumbnail(client.user.displayAvatarURL)
            .addField('명령어 보기', '..명령어')
            .addField('앨리스는 여신이야!!', '앨리스는 여신이야!!')
            .addField('제작자의 말', '살려줘...')
            .addField('제작자', '마인#4143')
            .setTimestamp()
            .setFooter('마인봇', client.user.displayAvatarURL);
        msg.channel.send(embed);
    }
    if(S[0] == "..명령어") {
        let embed = new Discord.RichEmbed()
            .setColor('#ff0000')
            .setTitle('마인봇 명령어')
            .setAuthor('마인봇', client.user.displayAvatarURL)
            .addField('..정보', '마인봇의 정보를 본다.')
            .addField('..앨리스', '앨리스의 정보를 보여준다.')
            .addField('..아스나', '아스나의 정보를 보여준다.')
            .addField('..따라하기 [따라할 말]', '[따라할 말]을 따라한다.')
            .setFooter("마인봇", client.user.displayAvatarURL);
        msg.channel.send(embed);
    }
    if(S[0] == "..앨리스") {
        let embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('앨리스 정보')
            .addField("이름", '앨리스 신서시스 서티(앨리스 투배르크)')
            .addField('생일', '인계력 361년 4월 9일')
            .setTimestamp()
            .setFooter('마인봇', client.user.displayAvatarURL);
        msg.channel.send(embed);
    }
    if(S[0] == "..아스나") {
        let embed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('아스나 정보')
            .addField("이름", '유우키 아스나')
            .addField('생일', '2007년 9월 30일')
            .setTimestamp()
            .setFooter('마인봇', client.user.displayAvatarURL);
        msg.channel.send(embed);
    }
    if(S[0] == "..따라하기") {
        if(S[1] == null) {
            msg.channel.send("따라할 말을 입력해주세요.");
        } else {
            msg.channel.send(msg.content.replace("..따라하기", ""));
            console.log(msg.content.name);
        }
    }
    if(S[0] == "..") {

    }
});

client.login(process.env.TOKEN);