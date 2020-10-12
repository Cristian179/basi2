const express = require("express");
const bodyparser = require("body-parser");
const httpmsg = require("http-msgs");

const app = express();
app.listen(3000, ()=>{
    console.log("Server avviato!");
});
/* app.listen(process.env.ALWAYSDATA_HTTPD_PORT, process.env.ALWAYSDATA_HTTPD_IP, function(){
    console.log("Server avviato! ip: "+process.env.ALWAYSDATA_HTTPD_IP+ "\nPorta: "+process.env.ALWAYSDATA_HTTPD_PORT);
}); */

app.use(bodyparser.urlencoded({extended: false}));

app.use(express.static("public"));

/* app.get("/", (req, res)=>{
    res.send("ajax.html");
}); */

app.post("/ajax", (req, res)=>{
    var data = JSON.stringify(req.body);
    console.log(data);

    httpmsg.sendJSON(req, res, {
        from: "Ciao, sono il server",
        risp: req.body.username
    });
});