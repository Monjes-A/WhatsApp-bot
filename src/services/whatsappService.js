const https = require("https");
function SendMessageWhatsApp(textResponse, number) {

    const data = Json.stringify({

        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "preview_url": false,
            "body": textResponse

        }

    });

    const options = {
        host: "graph.facebook.com",
        path: "v17.0/115566168307697/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EABY9pvWHDkUBO7W2fbPuprda3xHiFxvK0eUD3NPXfZCWwjj9BU54vuoZCuAsQfdibDGcismHs5sYZAC0ZCErBy6KDkC6irpUcxbVk8RYDpLXJ9ZCLcuxYUayloK63eV9Wh9bNllYw5u2ZCn6cuC9VNhzBdV0fzqTHVpYMTrqrVEgaURZAcisNFZCePzjb31xeceJ"
        }
    };

    const req = https.request(options, res => {
        res.on("data", d => {
            process.stdout.write(d);
        });
    });

    req.on("error", error => {
        console.error(error);
    });

    req.write(data);
    req.end();
}
module.exports = {
    SendMessageWhatsApp
};