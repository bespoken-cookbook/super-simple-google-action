var bst = require("bespoken-tools");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.set("port", 9999);

bst.Logless.enableConsoleLogging();
const middleware = bst.Logless.middleware("d05a3ed5-9676-4ed5-80cb-32d572bd993b");
app.use(bodyParser.json({type: "application/json"}));
app.use(middleware.requestHandler);

// Health
app.get("/", function (req, res) {
    res.json({version: utils.version()});
});

app.post("/", function (req, res) {
    var intent = req.body.result.metadata.intentName;
    console.log("Intent: " + intent);

    var response = {
        data: null,
        contextOut: null,
        source: "SuperSimpleGH"
    }

    if (intent === "Default Welcome Intent") {
        response.speech = "Hello";
        response.displayText = "Hello";
    } else if (intent === "Hello") {
        response.speech = "Hi There, I'm The World";
        response.displayText = "Hi There";
    } else if (intent === "Goodbye") {
        response.speech = "So long";
        response.displayText = "So long";
    }

    res.json(response);
});

app.use(middleware.errorHandler);

// Start the server
var server = app.listen(app.get("port"), function () {
    console.log("Server is listening on port %s", server.address().port);
});