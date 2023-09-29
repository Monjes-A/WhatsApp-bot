const expres = require("express");
const router = expres.Router();
const whatsappControllers = require("../controllers/whatsappControllers");

router
    .get("/", whatsappControllers.verifyToken)
    .post("/", whatsappControllers.ReceivedMessage)

module.exports = router;