const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
	bot.user.setActivity('SunClay', { type: 'WATCHING' }).catch(console.error)
	console.log('///////////////////////////////////////')
	console.log('        [!]Connexion effectué !')
	console.log('///////////////////////////////////////')
})

bot.on('message', function (message) {
	if (message.content === '!help') {
		let testEmbed = new Discord.RichEmbed()
			.setDescription('CECI EST LA DESCRIPTION')
			.setColor('#1CFF1C')
			.addField('première ligne', 'deuxième ligne')
			.addField('troisième ligne', 'quatrième ligne')
			.setFooter('CECI EST UN FOOTER')
		message.channel.send(testEmbed)
		console.log('!help')
	}

	if (message.content === '!server') {
		let server_name = message.guild.name
		let server_size = message.guild.members.size
		message.channel.send('Server : ' + server_name + '\nPersonnes : ' + server_size)
	}
})





bot.login('process.env.TOKEN')