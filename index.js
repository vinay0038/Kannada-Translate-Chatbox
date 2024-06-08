var express = require('express')
var ejs = require('ejs')
const bodyParser = require('body-parser');
const Translate= require('@google-cloud/translate').v2;
const path =require('path');

var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine','ejs');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));

});



app.listen(3000,function(req,res){
    console.log("server running on port 3000")
});
