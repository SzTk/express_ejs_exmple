const express = require('express')
const fs = require('fs')
const path = require('path')
const ejs = require('ejs')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    fs.readFile(__dirname + '/public/index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get('/image', (req, res) => {
    fs.readFile(__dirname + '/data/flower_high.jpg', (err, data) => {
        res.writeHead(200, {'Content-Type':  'image/jpg' });
        res.write(data);
        res.end();
    });
})

app.get('/json', (req, res) => {
    fs.readFile(__dirname + '/data/corpus-bot-ja.json', 'utf8', (err, data) => {
        res.writeHead(200, {'Content-Type':  'text/json' });
        res.write(data);
        res.end();
    });
})

app.get("/ejs", (req, res) => {
    var imagedata = fs.readFileSync(__dirname + '/data/flower_high.jpg');
    var imagebase64data =  Buffer(imagedata).toString('base64');
    var jsondata = fs.readFileSync(__dirname + '/data/color.json', 'utf8');
    ejs.renderFile('./templates/example.ejs', {imagebase64data: imagebase64data, jsondata: jsondata}, function(err, html) {
        res.send(html);
    });
   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})