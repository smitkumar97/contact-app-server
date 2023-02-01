const express = require("express");
const contacts = require("../middleware/contacts");
const router = express.Router();

router.get("/contacts", contacts.getConatacts);
router.get("/contact/:id", contacts.getSingleContact);
router.get('/getmessages',contacts.getMessages)
router.post("/sendmessage",contacts.sendSMS);
router.post("/sms",contacts.messageResponse);

module.exports = router;
