let canal = gets();

function saudacaoBot(canal) {
    if (canal === "whatsapp") {
        console.log("Ola, este e o WhatsAppBot!");
    } else if (canal === "telegram") {
        console.log("Ola, este e o TelegramBot!");
    } else if (canal === "webchat") {
        console.log("Ola, este e o WebChatBot!");
    } else {
        console.log("Canal nao suportado");
    }
}

saudacaoBot(canal);