const https = require("https");
function SendMessageWhatsApp(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text",

    });

    const options = {
        host: "graph.facebook.com",
        path: "/v17.0/115566168307697/messages",
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer EABY9pvWHDkUBO3hFjGRpgPvqD1e3SxSBGMIhJxpXbgJCRYJLbN9420UG7272rWPYFp9Mi7BwtuY3gv81imFuj99MmzuX3aZCihM0MtAZAqHul5PzTLsMVCldM9ZA3DpMqGZBZBZB9fmTD8ake06kvQRx10Qx0XjkxPZCuw84D2lHvQZBzhF7K2UUgl2Iv8d4rNB30oZAysw2tr9ZCTlcuwhfEZD"
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