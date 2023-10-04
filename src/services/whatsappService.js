const https = require("https");
function SendMessageWhatsApp(data) {
    /*      ----- ya no se usa esta parte ya q contruiremos nuestra "data" en otro documento   
            const data = JSON.stringify({
            "messaging_product": "whatsapp",
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
            Authorization: "Bearer EABY9pvWHDkUBO6BAFb8QJzAywJaAMVDqHTh2RKrEtxsVgLMRp1gsm3WTxT9QeGDu6iRPQnONKSPEqurWBfsqaomoPkWIAiVPbRvJvxrTPUZCwWtZBZBN8S53L05JkcraIsUvNR0Acvf1eD76ZCJoj0ZB1fGaifQwGwDmbOepderJmQ4fH2jQQlvy9gaNloHxRDmc36WILpgMDVKuSe4cZD"
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