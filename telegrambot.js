// This is the telegram bot 
// Started on 4/28/16

var TelegramBot = require('node-telegram-bot-api');

var token = '176619036:AAGxgfkqvKLMRntXDg5OJARJWCMbcZKeY3Y';

var bot = new TelegramBot(token, {polling: true});



bot.on('message', function(msg){
	var chatId = msg.chat.id;
	var text = msg.text;
	text = text.toLowerCase();
	var resp = "whatever"
	console.log(JSON.stringify(msg, null, 2));

	if (text.includes("nigger")){
		resp = "Don't say that you cis misgendering culturally appropriating scumbag that doesn't deserve to live on this liberal all-loving planet";
		bot.sendMessage(chatId, resp);

	}

	else if (text.includes("meme")){
		resp = "Don't say that dirty word";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("god")){
		resp = "Logic  brings power!";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("medical" || "medicine")){
		resp = "I'm going to smash your hippocampus because you don't know how to use it correctly.";
		bot.sendMessage(chatId, resp);
	}



});


