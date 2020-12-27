//=========================================   Pre Load   =========================================//
// set max individual actions greater than default [10]
require('events').EventEmitter.defaultMaxListeners = 11;

// require the discord.js module
const Discord = require('discord.js');
require('dotenv').config(); 

// create a new Discord client
const client = new Discord.Client();


// import files
const veloxWelcome = require("./Welcome/welcome")
const update1 = require("./Updates/update1")



//We are online
client.on('ready', () => {
    console.log("Velox Bot Initiated")


	// Channel IDs
	//cookGeneralChannel.send("I'm Online Sire")


	// Initialize Files
	veloxWelcome(client)
	update1(client)
});


//login using bot token from env
client.login(process.env.TOKEN); 



//========================================   Bug Fixing   ========================================//

// console.log(JSON.stringify(message))