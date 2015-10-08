var soap = require('soap');
var config = require('./Config.json');

function processTrafficRequest(headers, body, resp) {
    var url = config.TrafficEstimatorService.wsdl_url;
    var args = body;
    try {
        soap.createClient(url, function (err, client) {
            if (err) {
                resp.setHeader("Content-Type", "application/json");
                resp.end(JSON.stringify(err));
            } else {
                client.addSoapHeader({
                    "tns:RequestHeader": {
                        "clientCustomerId": config.TrafficEstimatorService.clientCustomerId,
                        "developerToken": config.TrafficEstimatorService.developerToken,
                        "userAgent": config.TrafficEstimatorService.userAgent,
                        "validateOnly": config.TrafficEstimatorService.validateOnly,
                        "partialFailure": config.TrafficEstimatorService.partialFailure,
                    }
                }, "", "cm", "")
                client.TrafficEstimatorService.TrafficEstimatorServiceInterfacePort.get(args, function (err, result) {
                    if (err) {
                        resp.setHeader("Content-Type", "application/json");
                        resp.end(JSON.stringify(err));
                    } else {
                        resp.setHeader("Content-Type", "application/json");
                        resp.end(JSON.stringify(result));
                    }
                });
            }
        });
    } catch (err) {
        resp.setHeader("Content-Type", "application/json");
        resp.end(JSON.stringify(err));
    }
}

function processIdeaRequest(headers, body, resp) {
    var url = config.TargetingIdeaService.wsdl_url;
    var args = body;
    try {
        soap.createClient(url, function (err, client) {
            if (err) {
                resp.setHeader("Content-Type", "application/json");
                resp.end(JSON.stringify(err));
            } else {
                client.addSoapHeader({
                    "tns:RequestHeader": {
                        "clientCustomerId": config.TargetingIdeaService.clientCustomerId,
                        "developerToken": config.TargetingIdeaService.developerToken,
                        "userAgent": config.TargetingIdeaService.userAgent,
                        "validateOnly": config.TargetingIdeaService.validateOnly,
                        "partialFailure": config.TargetingIdeaService.partialFailure,
                    }
                }, "", "cm", "")
                client.TargetingIdeaService.TargetingIdeaServiceInterfacePort.get(args, function (err, result) {
                    if (err) {
                        resp.setHeader("Content-Type", "application/json");
                        resp.end(JSON.stringify(err));
                    } else {
                        resp.setHeader("Content-Type", "application/json");
                        resp.end(JSON.stringify(result));
                    }
                });
            }
        });
    } catch (err) {
        resp.setHeader("Content-Type", "application/json");
        resp.end(JSON.stringify(err));
    }
}

exports.processTrafficRequest = processTrafficRequest;
exports.processIdeaRequest = processIdeaRequest;