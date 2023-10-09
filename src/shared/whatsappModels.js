function messageText(textResponse, number) {
    const data = JSON.stringify({
        "messaging_product": "whatsapp",
        "to": number,
        "text": {
            "body": textResponse
        },
        "type": "text"
    });
    return data;
}

module.exports ={
messageText
}