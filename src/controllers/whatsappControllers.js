//esta parte del codigo es fija , ya q es para la autenticacion del token q va conectado
//entre hosting y el whatsapp
const fs = require("fs");
const whatsappService = require("../services/whatsappService");

/**req es lo que nos envia whatsapp, mientras que el res es lo que podemos responder*/
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
    try {
        var entry = (req.body["entry"])[0];// de aqui hasta el otro comentario 
        var changes = (entry["changes"])[0];//lo q se hace es navegar en el formato json de whatsapp
        var value = changes["value"];// hasta llegar a la informacion q recivimos de la app
        var messageObject = value["messages"];


        if (typeof messageObject != "undefined") {

            var messages = messageObject[0];
            var number = messages["from"];

            var text = GetTextUser(messages);  //se llama a una función para q nos diga q tipo de mensaje recivio

            whatsappService.SendMessageWhatsApp("el usuario dice q dijiste " + text, number);
            console.log("el text es " + text);
        }

        res.send("EVENT_RECEIVED");
    } catch (e) {
        console.log(e);
        console.log("se salio de la condicional")
        res.send("EVENT_RECEIVED");
    }
}


function GetTextUser(messages) {
    var text = "";
    var typeMessage = messages["type"];
    if (typeMessage == "text") {
        text = (messages["text"])["body"];
    }
    else if (typeMessage == "interactive") {

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        Console.log(interactiveObject);

        if (typeInteractive == "button_reply") {
            text = (interactiveObject["button_reply"])["title"];
        }
        else if (typeInteractive == "list_reply") {
            text = (interactiveObject["list_reply"])["title"];
        } else {
            Console.log("sin mensaje");

        }
    } else {
        Console.log("sin mensaje");
    }
    return text;
}

module.exports = {
    verifyToken,
    ReceivedMessage
}