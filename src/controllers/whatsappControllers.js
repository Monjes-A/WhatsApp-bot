const verifyToken = (req, res) => {
    res.send("hola verifyToken");
}

const ReceivedMessage = (req, res) => {
    res.send("hola Received");
}

module.exports = {
    verifyToken,
    ReceivedMessage
}