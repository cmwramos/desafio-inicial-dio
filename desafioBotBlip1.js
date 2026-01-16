let comando = gets(); 

if (comando === "start"){
    console.log("Bot Started");
}else if (comando === "stop"){
    console.log("Bot Stopped");
}else if (comando === "pause"){
    console.log("Bot Paused");
}else {
    console.log("Unknown Command");
}