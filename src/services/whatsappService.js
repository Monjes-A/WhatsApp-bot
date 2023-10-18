/* este documento se va ha dedicar ha realizar los envíos de los mensajes
previamente estructurados y paso por la lógica de los otros módulos dentro de la app 
solo se dedica a enviar el mensajes 
 */
const https = require("https");
function SendMessageWhatsApp(data) {
    /*      ----- ya no se usa esta parte ya q construiremos nuestra "data" en otro documento   
            const data = JSON.stringify({
            "messaging_product": "WhatsApp",
            "to": number,
            "text": {
                "body": textResponse
            },
            "type": "text",
    
        }); */

    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/138572409345850/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EABY9pvWHDkUBOwDTgKM9lL10hsVGnMIg70C1ZBKOxsSZAHMiPZA0o1yMtRWCxlvz53ZBIxA0eElSrZC4LiEWbiqwFpgWtLTwmpdBaBHQcSN64knL7xlPT65tfRZAwoGag8PdBbJgEeRgmi1VZAqSzjvIXxSzHU1WiVIAtdNqkhO1ZAgkqSZCqvrHQZA1bbSLFKPtn4QZCMkxQ27DLqsqTpmUSgZD"
        }
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {

        console.error(error);
        console.log("un pinchis error")
    });

    req.write(data);
    req.end();

}
module.exports = {
    SendMessageWhatsApp
};