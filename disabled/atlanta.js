const Discord = require("discord.js");
const config = require("../data/config.json")
quickdb = require('quick.db'),
errors = require('../utils/errors.js'),
ms = require('ms'),
functions = require('../utils/functions.js'),
fs = require('fs');

quickdb.init('./data/atlanta.sqlite');
var users_data = new quickdb.table('usersdata');

module.exports.run = async (message, args, bot, emotes, data) => {
    
    functions.arcadiaCall(message, 'badge', 'url='+bot.user.displayAvatarURL+'&name='+bot.user.username+'&servers='+bot.guilds.size+'&users='+bot.users.size+'&description=Atlanta est un bot Discord très complet ! Il propose actuellement plus d\'une centaine de commandes !', false, data)

}

module.exports.help = {
    name:"atlanta",
    desc:"Petite présentation d'Atlanta :)",
    usage:"atlanta",
    group:"images",
    examples:"$atlanta"
}

module.exports.settings = {
    permissions:"false",
    nsfw:"false",
    support_only:"false",
    disabled:"false",
    premium:"false",
    owner:"false"
}