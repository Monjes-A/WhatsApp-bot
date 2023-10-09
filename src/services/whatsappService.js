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
        path: "/v17.0/115566168307697/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EABY9pvWHDkUBO10m4SwtDTpOOoXesiCgRVqi6B46Ko6P5pQ4axIRaFxauCcaY3vpeYDnNSsf5rZBg6sEP0qcBArZAggH8TTPfA0fu8qYV8i6RjycoKsatZCbCN259wmkWJbD1koa99sMcNfH4QPxOSR0sfDG8IPwchna7q2T5SETAAZCTeTbCotH4xRsgkdGAvNCfdPRekLB3VgKMj0ZD"
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