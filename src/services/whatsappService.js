const https = require("https");
function SendMessageWhatsApp(textResponse, number) {
    console.log("numero " + number + " y la nformacion" + textResponse)
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text",

    });
    console.log("imprimiendo el data en json" + data)

    const options = {
        host: "graph.facebook.com",
        path: "v17.0/115566168307697/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EABY9pvWHDkUBO9ROwjPPEXLmNKGXv7jf45tnmyXUti7MDLbjAeHhc7mC5J2ZBY7fVTWFmsJaJZATZC9RaheXofjm5SAkgHgXrK4OnifuMXu09BOJZATLciC0eUw0iCcZBDwG0gFGSjKpnv76RPh8GUZADSDOWKjD2wG6eL0bEzJIC3dcvZA5ZBfZATzpWfLDeZAladivC2NZCGssdz3vWgF2vsZD"
        }
    };
    console.log("imprimiendo el options en json" + options)

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