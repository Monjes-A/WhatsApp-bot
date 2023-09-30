const verifyToken = (req, res) => {
    
    try{
        var accessToken = "6vDZG2vWROha6sZV81fBgjCGzIFDEPp2NTwmMo8Wixw6/lUGQjb/j/!IjEeHVXhc";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];
        
        if(challenge != null && token != null && token == accessToken){
            res.send(challenge);
        }else{
            res.status(400).send();
        }        
    }
    catch(e){
        res.status(400).send();
    }
}

const ReceivedMessage = (req, res) => {
    res.send("hola Received");
}

module.exports = {
    verifyToken,
    ReceivedMessage
}