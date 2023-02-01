const data = require("../config/contacts.json");
const config = require("../config/config.json");
const accountSid = config.TWILIO_ACCOUNT_SID;
const authToken = config.TWILIO_AUTH_TOKEN;
const { MessagingResponse } = require('twilio').twiml;

//List contacts
  async function getConatacts(req, res, next) {
    if (true) {
      try {
        res.status(200).json({
          contacts: data,
        });
      } catch (error) {
        next(error);
      }
    }
  }

//Get a Contact
async function getSingleContact(req, res, next) {
  if (true) {
    try {
      res.status(200).json({
        contacts: data[req.params.id],
      });
    } catch (error) {
      next(error);
    }
  }
}

//Send Message
  async function sendSMS(req, res, next) {
    const sendMessageTo = req.body.to;
    const otp = req.body.otp;
    try {
      const client = require('twilio')(accountSid, authToken);
        client.messages
          .create({
            body: `Hi! Your OTP is: ${otp}`,
            from: '+13858326664',
            to: `+91 ${sendMessageTo}`
          })
          .then(message => {
            res.status(200).json({
              msg : "OTP sent successfully."
            })
          });
    } catch(error) {
        next(error);
    }
  }

  async function messageResponse(req, res, next) {
    try {
      const twiml = new MessagingResponse();
      twiml.message('OTP sent successfully!');
      res.type('text/xml').send(twiml.toString()); 
    } catch (error) {
      next(error);
    }
  }

  async function getMessages(req,res,next) {
    try {
        const client = require('twilio')(accountSid, authToken);
        client.messages.list({limit: 20}).then(messages => {
          res.status(200).json({
            messageList: messages
          })
        });
    } catch(error) {
      next(error);
    }
  }

  module.exports = {
      getConatacts,
      getSingleContact,
      sendSMS,
      getMessages,
      messageResponse
  }