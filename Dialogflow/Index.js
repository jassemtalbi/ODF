const bodyParser = require("body-parser");
const talkToChatbot = require("./Chatbot");
var express = require("express");

var router = express.Router();

tabregister = [];

async function bot(req, res) {
  try {
    const [dialog] = await Promise.all([
      getValue1Async(req, res)
    ]);

    //JASSEM
    if (
      (
        dialog.intent.displayName == "inscri_aa") &&  dialog.queryText != "hi") {
          console.log("done")    }
              if ( dialog.intent.displayName == "inscri_aa") {
      res.send({ message: dialog.fulfillmentMessages });
    console.log('question njareb')
    }
  }
catch {
    console.log("Problemeeee ");
  }
}
// 2 promise !! 2 fetch  =>
// bot
async function getValue1Async(req, res) {
  try {
    console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);

    const dialog = await talkToChatbot(req.body.message);
    res.send({ message: dialog.fulfillmentMessages });
    return dialog;

  } catch {
    console.log("problem");
  }
}
// response api


router.post("/chatbot", bot);
module.exports = router;
