var express = require("express");
var router = express.Router();
const app = express();
const bcrypt = require("bcryptjs");
var usermodel = require("../models/user");
var newsletter = require("../models/newsletter");
var contactus = require("../models/contactus");
var project = require("../models/project");

const jwt = require('jsonwebtoken')
const multer = require("multer");

const JWT_SECRET = 'sdjkfh8923yhjdksbfma@#*(&@*!^#&@bhjb2qiuhesdbhjdsfg839ujkdhfjk'
var nodemailer = require("nodemailer");
const storage = multer.diskStorage({
  destination:(req,file,callback)=>{
    callback(null,"./client/public/uploads/")
  },
  filename : (req,file,callback)=>{
    callback(null,file.originalname);
  }
})
const upload=multer({storage:storage});
router.post("/register/", async function (req, res, next) {
  emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const {
    username,
    password: plainTextPassword,
    email,
    lastname,
    firstname,
    role,
    image,
    activated,
  } = req.body;
  const password = await bcrypt.hash(plainTextPassword, 10);
  console.log("pass", password);
  try {
    const response = await usermodel.create({
      username,
      password,
      email,
      lastname,
      firstname,
      role,
      image,
      activated,
    });
    var token = jwt.sign(
      {
        _id: response._id,
        username:response.username,
        role:response.role

      },
      "secretkey",
      { expiresIn: "3600s" },
      JWT_SECRET
      );
    console.log("User created successfully: ", response);
  } catch (error) {
    if (error.code === 11000) {
      // duplicate key
      return res.json({ status: "error", error: "Username already in use" });
    }
    throw error;
  }

  return res.json({ status: "ok", data: token });
});
router.post("/login/", async (req, res) => {
  const { username, password } = req.body;
  console.log(password);

  const user = await usermodel.findOne({ username }).lean();
  console.log(user);
  if (!user) {
    return res.json({ status: "error", error: "Invalid username/password" });
  }
  if ((await bcrypt.compare(password, user.password)) == false) {
    return res.json({ status: "error", error: "Invalid password" });
  } else if (await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        _id: user._id,
        username:user.username,
        role:user.role

      },
      "secretkey",
      { expiresIn: "3600s" },
      JWT_SECRET
      );
      
      return res.json({ status: "ok", data: token });
    console.log("ok");
  }
});

router.get("/Alluser", function (req, res, next) {
  usermodel.find(function (err, data) {
    if (err) console.log(err);
    res.json(data);
    console.log(data);
  });
  //console.log(admin)
});

router.post("/newsletter", async function (req, res, next) {
  const { subject, text } = req.body;
  try {
    const response = await newsletter.create({
      subject,
      text,
    });
    console.log("add newsletter: ", response);
    usermodel.find(function (err, data) {
      if (err) console.log(err);
      data.map((val, key) => {
        console.log("email" + val.email);
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "edubot4twin5@gmail.com",
            pass: "Edubot404",
          },
        });

        var mailOptions = {
          from: "OFD",
          to: val.email,
          subject: subject,
          text: text,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      });
    });
  } catch (error) {
    throw error;
  }
});
router.post("/Contactus", async function (req, res, next) {
  const { fullname,subject, text, email } = req.body;
  try {
    const response = await contactus.create({
      subject,
      text,
      email,fullname
    });
    console.log("add newsletter: ", response);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "edubot4twin5@gmail.com",
        pass: "Edubot404",
      },
    });

    var mailOptions = {
      from: email,
      to: "jassemtalbi2@gmail.com",
      subject: subject,
      text: "Good morning im" +" "+fullname+" i send this email for "+" "+text+" "+"send by"+"" + email,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    throw error;
  }
});


router.post("/addproject",upload.single('image'), async function (req, res, next) {
 const newproject=new project({
   title:req.body.title,
   description:req.body.description,
   image:req.file.originalname,
   event:req.body.event
 })
 newproject.save().then(()=>res.json("new project")).catch((err)=>res.status(400).json(`error:+${err}`))
});
router.get("/AllProject", function (req, res, next) {
  project.find(function (err, data) {
    if (err) console.log(err);
    res.json(data);
    console.log(data);
  });
});
router.get("/getRole", function (req, res, next) {
  usermodel.find(function (err, data) {
    data.map((val,key)=>{
      const role=val.role
      console.log(val.role)
      res.json(role)
    })
});
});
module.exports = router;
