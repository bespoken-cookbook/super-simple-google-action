var bst = require("bespoken-tools");

var simpleFunction = function (request, response) {
    console.log("Body: " + JSON.stringify(request.body));
    var intent = request.body.result.metadata.intentName;
    console.log("Intent: " + intent);

    var responseJSON = {
        data: null,
        contextOut: null,
        source: "SuperSimpleGH"
    }

    if (intent === "Default Welcome Intent") {
        responseJSON.speech = "Hello";
        responseJSON.displayText = "Hello";
    } else if (intent === "Hello") {
        responseJSON.speech = "Hi There, I'm The World";
        responseJSON.displayText = "Hi There";
    } else if (intent === "Goodbye") {
        responseJSON.speech = "So long";
        responseJSON.displayText = "So long";
    }

    response.json(responseJSON);
};

exports.simpleFunction = bst.Logless.capture("<YOUR_SECRET_KEY>", simpleFunction);