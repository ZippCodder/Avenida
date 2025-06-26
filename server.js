const http = require("node:http");
const https = require("node:https");
const fs = require("node:fs");
const path = require("node:path");
const querystring = require("node:querystring");
const mongodb = require("mongodb");

const Mongo = new mongodb.MongoClient(process.env.MONGO_URI);
const database = Mongo.db("Centro");
const usersCollection = database.collection("Users");

const protocol = (process.env.MODE === "development") ? http:https;
const server = protocol.createServer((process.env.MODE === "production") ? {key: fs.readFileSync(process.env.KEY_PATH), cert: fs.readFileSync(process.env.CERT_PATH)}:undefined);

const handlers = {
 "/": function(req, res) {      
  try {
   file = fs.readFileSync(__dirname + "/public/pages/index.html", "utf-8").replace("{title}", "Centro: Apply to hundreds of jobs on auto-pilot!").replace("{bundle}", "/dist/home.bundle.js");
  } catch (err) {
   console.log(err);
   res.statusCode = 404;
   res.end("file not found!");
  }
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end(file);
 }, 
 "/register": function(req, res) {   
  if (req.method === "GET") {
   try {
    file = fs.readFileSync(__dirname + "/public/pages/index.html", "utf-8").replace("{title}", "Centro: Register").replace("{bundle}", "/dist/register.bundle.js");
   } catch (err) {
    handlers["404"](req, res, "file not found!");
   }
   res.setHeader("Content-Type", "text/html");
   res.statusCode = 200;
   res.end(file);
  } else if (req.method === "POST") {
    let doc = Object.assign(req.body,{_id: new mongodb.ObjectId()});
    console.log(req.body);
    usersCollection.insertOne(doc).then(data => {
     console.log("inserted doc...");
     res.setHeader("Content-Type", "text/html");
     res.statusCode = 200;
     res.end("{status: 'Success'}");
    }).catch(err => {
      handlers["500"](req, res, "database error!", err);
    }); 
  }
 },
 "/pricing": function(req, res) {      
  try {
   file = fs.readFileSync(__dirname + "/public/pages/index.html", "utf-8").replace("{title}", "Centro: Pricing").replace("{bundle}", "/dist/pricing.bundle.js");
  } catch (err) {
   handlers["404"](req, res, "file not found!");
  }
  res.setHeader("Content-Type", "text/html");
  res.statusCode = 200;
  res.end(file);
 },
 "404": function(req, res, message) {
   res.statusCode = 404; 
   res.end(message);
 },
 "500": function(req, res, message, error) {
   console.log(error);
   res.statusCode = 500; 
   res.end(message);
 }
}

server.on("request",(req,res) => {

 let body = "";

 req.on("data", (data) => {
  body += data.toString();
 });

 req.on("end", (data) => {
 if (data) body += data.toString();
 if (body) req.body = JSON.parse(body);

 if (!path.extname(req.url)) {
   (handlers[req.url] || handlers["404"])(req, res);
   return; 
 }

 let contentType = "text/plain", file;

 try {
  file = fs.readFileSync(__dirname + req.url);
 } catch (err) {
  console.log(err);
  res.statusCode = 404;
  res.end("file not found!");
  return 
 }

 switch (path.extname(req.url)) {
  case ".html": {
   contentType = "text/html";
  }; 
  break;
  case ".css": {
   contentType = "text/css";
  };
  break;
  case ".js": {
   contentType = "text/javascript";
  };
  break;
  case ".wav": {
   contentType = "audio/wav";
  };
  case ".mp3": {
   contentType = "audio/mpeg";
  }; 
  default: {
   contentType = "image/png";
  }
 }

 res.setHeader("Content-Type",contentType);
 res.statusCode = 200;
 res.end(file);
 }) 
});

server.listen(process.env.PORT,function() {
 console.log("Server is active...");
});

