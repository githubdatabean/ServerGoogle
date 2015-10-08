var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

var ProcessSOAP = require("./RequestHandler");

global.requestCache = "";
var config = require("./Config.json");

app.post('/TrafficEstimatorService', function (req, res, next) {
    console.log("Request Headers : " + JSON.stringify(req.headers))
    console.log("Request Body : " + JSON.stringify(req.body))
    ProcessSOAP.processTrafficRequest(req.headers, req.body, res);
});
app.post('/TargetingIdeaService', function (req, res, next) {
    console.log("Request Headers : " + JSON.stringify(req.headers))
    console.log("Request Body : " + JSON.stringify(req.body))
    ProcessSOAP.processIdeaRequest(req.headers, req.body, res);
});
app.get('/getRecentRequest', function (req, res, next) {
    console.log("Request Headers : " + JSON.stringify(req.headers))
    res.setHeader("Content-Type", "text/xml");
    res.end(global.requestCache ? global.requestCache : "<Result>DATA NOT FOUND</Result>");
});
var server = app.listen(config.serverPort, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server app listening at http://%s:%s', host, port);
});
