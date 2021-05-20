// bot.js
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// importar discord.js en vez de discord.io? creo que si
// also documentacion https://discordjs.guide/popular-topics/webhooks.html#creating-webhooks-through-server-settings
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 2) == '>>') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // >>code XXXXXX
            case 'code':
                //crear el hook y pasarselo a la web junto con el codigo de la sala, args
                bot.sendMessage({
                    to: channelID,
                    message: 'Conectandose al servidor'
                });

                const codigo = args;
                // POST/channels/{channel.id}/webhooks
                // Requires the MANAGE_WEBHOOKS permission.
                // Returns a webhook object
                /**JSON Params
                 * name     string
                 * avatar	?image data
                 */
                // CREATE THE WEBHOOK
                
            break;
            // Just add any case commands if you want to..
         }
     }
});