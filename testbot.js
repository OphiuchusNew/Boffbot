// This is the telegram bot 
// Started on 4/28/16

var TelegramBot = require('node-telegram-bot-api');

var token = '176619036:AAGxgfkqvKLMRntXDg5OJARJWCMbcZKeY3Y';

var bot = new TelegramBot(token, {polling: true});

var nigCount = 0;
var weGetItCount = 0;




bot.on('message', function(msg){
	var chatId = msg.chat.id;
	var resp = "whatever";
	console.log(JSON.stringify(msg, null, 2));

	if (msg === msg.text){
		if (text.includes("nigger")){
		resp = "Don't say that you cis misgendering culturally appropriating scumbag that doesn't deserve to live on this liberal all-loving planet";
		nigCount = nigCount + 1;
		nigCountOut = "Nigger Count: " + nigCount;
		bot.sendMessage(chatId, resp);
		bot.sendMessage(chatId, nigCountOut);

	}

	else if (text.includes("meme")){
		resp = "Don't say that dirty word";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("god")){
		resp = "Logic brings power!";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("medical" )){
		resp = "I'm going to smash your hippocampus because you don't know how to use it correctly.";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("medicine")){
		resp = "I'm going to smash your hippocampus because you don't know how to use it correctly.";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("feske")){
		resp = "Do not take the Lord's name in vain";
		bot.sendMessage(chatId, resp);
	}

	else if(text.includes("love")){
		resp = "Never have I met such a soul of compassion and love";
		bot.sendMessage(chatId, resp);
	}

	else if(text.includes("british")){
		resp = "Never have I met such a soul of compassion and love";
		bot.sendMessage(chatId, resp);
	}

	else if(text.includes("wife")){
		resp = "Never have I met such a soul of compassion and love";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("yale")){
		resp = "One of the greatest intellectual institutions of  the modern age";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("harvard")){
		resp = "An altar of knowledge and a cathedral of intellect. One must be the proud follower of such to thrive. Unfortunately you are not. Become a disciple of knowledge and then talk to me";
		weGetItCount = weGetItCount + 1;
		weGetItCountOut = "We get it Count: " + weGetItCount;
		bot.sendMessage(chatId, resp);
		bot.sendMessage(chatId, weGetItCountOut);
	}

	else if (text.includes("antonio")){
		resp = "I fucking hate that nigger.";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("terrence")){
		resp = "I fucking hate that nigger.";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("bless")){
		resp = "You have been blessed!";
		bot.sendMessage(chatId, resp);
	}

	else if (text.includes("check")){
		nums = Math.floor(Math.random() * (999999999 - 10000000)) + 100000000;
		bot.sendMessage(chatId, nums);
	}

	else if (text.includes("dubs")){
		nums = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000;
		bot.sendMessage(chatId, nums);
	}

	else if (text.includes("trips")){
		nums = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000;
		bot.sendMessage(chatId, nums);
	}

	else if (text.includes("quads")){
		nums = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000;
		bot.sendMessage(chatId, nums);
	}

	else if (text.includes("quints")){
		nums = Math.floor(Math.random() * (999999999 - 100000000)) + 100000000;
		bot.sendMessage(chatId, nums);
	}

	else if (text.includes("goofy")){
		bot.sendSticker(chatId, 'BQADAwADNwEAAmzJGgjacDYAAWxJcZ0C');
	}
	}

	if (msg ===msg.sticker){
		bot.getUpdates();
		bot.sendSticker(chatId, 'BQADAwADNwEAAmzJGgjacDYAAWxJcZ0C');
	}
	









});


