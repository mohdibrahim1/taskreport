const express = require('express');
const env = require('./env');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
const db = require('./helper/db');
const DailyTask = require('./model/DailyTask');
// require('dotenv').config();
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'))


db.authenticate().then(()=>{
    console.log("connection successfull");
})

 app.get('/home',(req,res)=>{
    res.send("Home Controller");
})
app.get('/DailyTask',async (req, res) => {
    await DailyTask.findAll({
        where:{
            rct:Date.now()
        }
    }).then(list => {
        console.log("data",list);
         res.send(list)
        console.log("a",a)
    }).catch(err => console.log(err));

})

app.get('/DailyTaskRecords', async (req, res) => {
    await DailyTask.findAll({
      
    }).then(list => {
        console.log("data",list);
         var dtHtml = "<div>Hello World</div>"

         res.send(list)
        console.log("a",a)
    }).catch(err => console.log(err));

})
app.post ('/mailReport',async (req,res)=>{
    const { mailTo, subject, mailBody } = req.body;
    console.log("req.body: ", req.body)
  
})

app.listen(env.port, () => {
    console.log("server started ", env.port);
})