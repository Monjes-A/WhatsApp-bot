/* aquí se lleva la lógica de la conversación en la app, para decidir q decirle al cliente */

const whatsappModel = require("../shared/whatsappModels");
const whatsappService = require("../services/whatsappService")

function Process(textUser, number) {
    textUser = textUser.toLowerCase()
    var models = [];


    if (textUser.include("hola")) {
        //saludar
        var model = whatsappModel.messageText("hola, un gusto atenderte n/ soy una asistente virtual", number)
        models.push(model);
    }
    // despedirse
    else if (textUser.include("adios") || textUser.include("gracias") || textUser.include("adiós") || textUser.include("hasta luego")) {
        var model = whatsappModel.messageText("fue un gusto atenderte.", number)
        models.push(model);
    }
    //no sabe q escribió 
    else {
        var model = whatsappModel.messageText("no te entiendo chamo", number)
        models.push(model);
    }

    models.forEach(enviar => { //envía uno por uno lo q esté dentro del array(models)
        whatsappService.SendMessageWhatsApp(enviar)

    });


}

module.exports = {
    Process
};