//esta parte del codigo es fija , ya q es para la autenticacion del token q va conectado
//entre hosting y el whatsapp
const fs = require("fs");
const whatsappService = require("../services/whatsappService");
const verifyToken = (req, res) => {

    try {
        var accessToken = "6vDZG2vWROha6sZV81fBgjCGzIFDEPp2NTwmMo8Wixw6/lUGQjb/j/!IjEeHVXhc";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == accessToken) {
            res.send(challenge);
        } else {
            res.status(400).send();
        }
    }
    catch (e) {
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    console.log("holis")
    try {
        var entry = (req.body["entry"])[0];// de aqui hasta el otro comentario 
        var changes = (entry["changes"])[0];//lo q se hace es navegar en el formato json de whatsapp
        var value = changes["value"];// hasta llega a la informacion q recivimos de la app
        console.log(value);
        var messageObject = value["messages"];
        console.log("segundo " + messageObject);


        if (typeof messageObject != "undefined") {
            console.log("dentro " + number + " el mensaje " + messages);

            var messages = messageObject[0];
            var number = messages["from"];

            var text = GetTexUser(messages);  //se llama a una función para q nos diga q tipo de mensaje recivio
            console.log(text);
            whatsappService.SendMessageWhatsApp("el usuario dijo " + text, number)
        }

        res.send("EVENT_RECEIVED");
    } catch (e) {
        console.log(e);
        console.log ("se salio de la condicional")
        res.send("EVENT_RECEIVED");
    }
}


function GetTexUser(messages) { // me dice q tipo de mensanje y q mensaje envio el usuario
    var text = "";
    var typeMessage = messages["type"];

    if (typeMessage == "text") {
        text = (messages["text"])["body"];
        console.log ("efectivamente es un text");
    }
    else if (typeMessage = "interactive") {

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        console.log(interactiveObject);

        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        }

        if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];
        } else {
            console.log("sin mensaje");
        }
    } else {
        console.log("sin mensaje");

    }

}

module.exports = {
    verifyToken,
    ReceivedMessage
}